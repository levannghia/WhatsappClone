/* eslint-disable */
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CommunityImg from "../assets/community-img.png"
import { Colors } from '../theme/Colors'

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={CommunityImg} style={{ width: 250, height: 150, resizeMode: "contain" }} />
      <Text style={styles.community}>Introducing Communities</Text>
      <Text style={styles.subText}>
        Easily organize your related groups and send announcements. Now, your
        communities, like neighbourhood or schools, can have their own space.
      </Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonTitle}>Start Your Community</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CommunityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  community: {
    fontSize: 26,
    color: Colors.white,
    fontWeight: '500',
    marginTop: 40,
  },
  subText: {
    color: Colors.textGrey,
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 30,
    marginTop: 5,
    lineHeight: 22,
    letterSpacing: 0.6,
  },
  buttonStyle: {
    backgroundColor: Colors.tertiary,
    marginTop: 30,
    padding: 8,
    borderRadius: 30,
    width: '80%',
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.background,
  },
})