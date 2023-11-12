/* eslint-disable */
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'
import BackgroundImg from '../assets/wallpaper.jpeg'

export default function ChatScreen() {
  return (
    <>
      <ChatHeader/>
      <ImageBackground style={{flex: 1, height: "100%", paddingBottom: 5}} source={BackgroundImg}>
        <ChatBody userId="1jdfnvchjkd" chatId="1jdfnvchjkd"/>
      </ImageBackground>
      <ChatFooter/>
    </>
  )
}

const styles = StyleSheet.create({})