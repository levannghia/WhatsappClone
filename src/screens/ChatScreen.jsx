/* eslint-disable */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'

export default function ChatScreen() {
  return (
    <View>
      <ChatHeader/>
      <ChatBody/>
      <ChatFooter/>
    </View>
  )
}

const styles = StyleSheet.create({})