/* eslint-disable */
import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'

export default function ChatFooter() {
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
                    <TextInput placeholder='Message' style={styles.textInput} />
                </View>
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