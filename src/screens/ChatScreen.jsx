/* eslint-disable */
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'
import firestore from '@react-native-firebase/firestore'
import BackgroundImg from '../assets/wallpaper.jpeg'

export default function ChatScreen(props) {
  const {userId, contactId} = props.route.params
  
  function generateChatId() {
    sortedUserIds = [userId, contactId].sort();
    const chatId = sortedUserIds.join('_')
    return chatId;
  }

  const chatId = generateChatId();
  const chatRef = firestore().collection('chats').doc(chatId);
  const userRef = firestore().collection('users').doc(userId);
  const contactRef = firestore().collection('users').doc(contactId);

  const createChatRoom = async () => {
    const chatSnapShot = await chatRef.get();
    if(!chatSnapShot.exists) {
      const participants = [userRef, contactRef]
      await chatRef.set({participants})
    }
  }

  createChatRoom()

  return (
    <>
      <ChatHeader contactUserRef={contactRef}/>
      <ImageBackground style={{flex: 1, height: "100%", paddingBottom: 5}} source={BackgroundImg}>
        <ChatBody userId={userId} chatId={chatId}/>
      </ImageBackground>
      <ChatFooter chatRef={chatRef} userId={userId}/>
    </>
  )
}

const styles = StyleSheet.create({})