/* eslint-disable */
import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import Profile from '../assets/user1.jpeg'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'
import { useNavigation } from '@react-navigation/native'
import { getImage } from '../utils/helper'

export default function ChatHeader({contactUserRef}) {
    const navigation = useNavigation()
    const [user, setuser] = useState({})
    const getContactData = async () => {
        const contactSnapShot = await contactUserRef.get();
        const data = contactSnapShot.data();
        const name = data.name
        const profile = await getImage(data.profile)

        setuser({name, profile})
    }

    useEffect(() => {
        getContactData();
    }, [contactUserRef])
    

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <VectorIcon size={24} color={Colors.white} name="arrow-back" type="Ionicons" onPress={() => navigation.goBack()}/>
                {user?.profile && <Image source={{uri: user.profile}} style={styles.profilePhoto} />}
                {user?.name && <Text style={{ fontSize: 17, marginLeft: 10, color: Colors.white }}>{user.name}</Text>}
            </View>
            <View style={styles.innerContainer}>
                <VectorIcon
                    name="videocam"
                    type="Ionicons"
                    size={24}
                    color={Colors.white}
                />
                <VectorIcon
                    name="phone-alt"
                    type="FontAwesome5"
                    size={16}
                    color={Colors.white}
                    style={{marginHorizontal: 25}}
                />
                <VectorIcon
                    name="dots-three-vertical"
                    type="Entypo"
                    size={18}
                    color={Colors.white}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilePhoto: {
        marginLeft: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
    }
})