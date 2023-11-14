/* eslint-disable */
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import User1 from '../assets/user1.jpeg'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'
import { ChatListData } from '../data/ChatListData'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';
import { getImage } from '../utils/helper'

const ChatList = ({ userId }) => {
    const navigation = useNavigation()
    const [chatList, setChatList] = useState([])

    const getChatList = async () => {
        const userRef = firestore().collection('users').doc(userId);
        const allChatDoc = await firestore().collection('chats').where('participants', 'array-contains', userRef).get()

        const chatData = await Promise.all(
            allChatDoc.docs.map(async chatDoc => {
                const data = chatDoc.data();
                const participants = await Promise.all(
                    data.participants
                        .filter(item => {
                            return item.id != userId;
                        })
                        .map(async user => {
                            const userDoc = await user.get();
                            const userData = await userDoc.data();
                            const id = user?.id;
                            const name = userData?.name;
                            const profile = await getImage(userData?.profile)

                            return { id, name, profile }
                        }),
                );

                const chatDocRef = chatDoc.ref;
                const lastMessageDoc = await chatDocRef
                    .collection('messages')
                    .orderBy('timestamps', 'desc')
                    .limit(1)
                    .get();

                const lastMessage = lastMessageDoc?.docs?.length
                    ? lastMessageDoc.docs[0].data()
                    : {};
                return {
                    lastMessage,
                    otherUser: participants[0],
                };
            })
        )

        return chatData
    }

    useEffect(() => {
        getChatList()
            .then(chatData => {
                setChatList(chatData);
            })
            .catch(error => {
                console.log('error :', error);
            });
    }, [userId])

    console.log('chat: ', chatList);

    const onNavigate = (contactId) => {
        navigation.navigate('Chat', {
            contactId: contactId,
            userId: userId,
        });
    }
    return (
        <>
            {chatList.map((item) => (
                <View key={item.otherUser?.id}>
                    <TouchableOpacity style={styles.container} onPress={() => onNavigate(item.otherUser?.id)}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            {item.otherUser?.profile && <Image style={styles.profileImg} source={{uri: item.otherUser?.profile}} />}
                            <View>
                                <Text style={styles.username}>{item.otherUser?.name}</Text>
                                <Text style={styles.message}>{item.lastMessage.body}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                            <Text style={{ fontSize: 12, color: Colors.textGrey }}>{item.lastMessage.timestamp?.toDate().toDateString()}</Text>
                            {item.mute && <VectorIcon
                                type="MaterialCommunityIcons"
                                name="volume-variant-off"
                                size={22}
                                color={Colors.textGrey}
                                style={styles.muteIcon}
                            />}
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </>
    )
}

export default ChatList

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        padding: 16,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    profileImg: {
        borderRadius: 50,
        width: 40,
        height: 40,
        marginRight: 15
    },
    username: {
        color: Colors.textColor,
        fontSize: 16,
    },
    message: {
        color: Colors.textGrey,
        fontSize: 14,
        marginTop: 5,
    },
    muteIcon: {
        // textAlign: "right",
        marginTop: 5,
    },
})