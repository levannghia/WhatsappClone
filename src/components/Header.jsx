/* eslint-disable */
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WhatsappLogo from '../assets/whatsapp-logo.png'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcon'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logoStyle} source={WhatsappLogo} />
            <View style={styles.headerIcons}>
                <VectorIcon name="camera" type="Feather" color={Colors.secondaryColor} size={22} />
                <VectorIcon name="search" type="Ionicons" color={Colors.secondaryColor} size={20} style={styles.iconStyle}/>
                <VectorIcon name="dots-three-vertical" type="Entypo" color={Colors.secondaryColor} size={18} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    logoStyle: {
        height: 25,
        width: 115
    },
    headerIcons: {
        flexDirection: "row"
    },
    iconStyle: {
        marginHorizontal: 20
    }
})