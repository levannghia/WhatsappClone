/* eslint-disable */
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import User1 from '../assets/user1.jpeg'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'
import { ChatListData } from '../data/ChatListData'

const ChatList = () => {
    return (
        <>
            {ChatListData.map((item) => (
                <View key={item.id}>
                    <TouchableOpacity style={styles.container}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image style={styles.profileImg} source={item.profile} />
                            <View>
                                <Text style={styles.username}>{item.name}</Text>
                                <Text style={styles.message}>{item.message}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: "column", alignItems: "flex-end"}}>
                            <Text style={{ fontSize: 12, color: Colors.textGrey }}>{item.name}</Text>
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