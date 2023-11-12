/* eslint-disable */
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon'
import ChatList from '../components/ChatList'
import { Colors } from '../theme/Colors'
import { useNavigation } from '@react-navigation/native'

const ChatListScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ScrollView>
        <ChatList/>
      </ScrollView>
      <TouchableOpacity style={styles.contactIcon} onPress={() => navigation.navigate('Contact')}>
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