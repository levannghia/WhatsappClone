/* eslint-disable */
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import VectorIcon from '../utils/VectorIcon'
import ChatList from '../components/ChatList'
import { Colors } from '../theme/Colors'
import { useNavigation } from '@react-navigation/native'
import { getDeviceId } from '../utils/helper'

const ChatListScreen = () => {
  const navigation = useNavigation()
  const [userId, setUserId] = useState('')

  useEffect(() => {
    getDeviceId().then(id => setUserId(id))
  }, [])
 
  return (
    <View style={styles.container}>
      <ScrollView>
        <ChatList/>
      </ScrollView>
      <TouchableOpacity style={styles.contactIcon} onPress={() => navigation.navigate('Contact', {userId: userId})}>
      <VectorIcon
          name="message-reply-text"
          type="MaterialCommunityIcons"
          size={22}
          color={Colors.white}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ChatListScreen

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: Colors.background,
    flex: 1,
  },
  contactIcon: {
    backgroundColor: Colors.tertiary,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
})