/* eslint-disable */
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'

export default function ChatFooter() {
    const [message, setMessage] = useState('');
    const [sendEnable, setSendEnable] = useState(false)

    const onChange = (value) => {
        setMessage(value)
        setSendEnable(true)
    }

    const onSend = () => {
        setMessage('')
        setSendEnable(false),
        Alert.alert("send message!")
    }
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <VectorIcon
                        type="MaterialIcons"
                        name="emoji-emotions"
                        size={24}
                        color={Colors.white}
                    />
                    <TextInput placeholder='Message' style={styles.textInput} onChangeText={value => onChange(value)} value={message}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <VectorIcon
                        type="Entypo"
                        name="attachment"
                        size={18}
                        color={Colors.white}
                    />
                    <VectorIcon
                        type="FontAwesome"
                        name="rupee"
                        size={20}
                        color={Colors.white}
                        style={{ marginHorizontal: 25 }}
                    />
                    <VectorIcon
                        type="FontAwesome"
                        name="camera"
                        size={18}
                        color={Colors.white}
                    />
                </View>
            </View>
            <View style={{
                backgroundColor: Colors.teal,
                padding: 10,
                borderRadius: 50,
            }}>
                {sendEnable ? (
                    <VectorIcon
                        type="MaterialCommunityIcons"
                        name="send"
                        size={25}
                        color={Colors.white}
                        onPress={onSend}
                    />
                ) : (
                    <VectorIcon
                        type="MaterialCommunityIcons"
                        name="microphone"
                        size={25}
                        color={Colors.white}
                    />
                )}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        paddingVertical: 12,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        fontSize: 17,
        color: Colors.white,
        marginLeft: 5,
    },
    leftContainer: {
        width: '85%',
        flexDirection: 'row',
        backgroundColor: Colors.primaryColor,
        borderRadius: 30,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})