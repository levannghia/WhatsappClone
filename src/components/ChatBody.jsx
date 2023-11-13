/* eslint-disable */
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { Colors } from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
import { MessagesData } from '../data/MessageData';
import firestore from '@react-native-firebase/firestore'

export default function ChatBody({ chatId, userId }) {
  const scrollViewRef = useRef()

  useEffect(() => {
    firestore().collection('chats').doc(chatId)
    .collection('messages').get();
  }, [])
  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({animated: true});
  }
  const UserMessageView = ({ message, time }) => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.userInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
          <VectorIcon
            name="check-double"
            type="FontAwesome5"
            color={Colors.blue}
            size={12}
            style={styles.doubleCheck}
          />
        </View>
      </View>
    );
  };

  const OtherUserMessageView = ({ message, time }) => {
    return (
      <View style={styles.otherUserContainer}>
        <View style={styles.otherUserInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{paddingHorizontal: 12}}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={scrollToBottom}
        >
        {MessagesData.map((item,index) => (
          <>
            {item.sender === userId ? (
              <UserMessageView
                key={index}
                message={item.message}
                time={item.time}
              />
            ) : (
              <OtherUserMessageView
                key={index}
                message={item.message}
                time={item.time}
              />
            )}
          </>
        ))}
      </ScrollView>
      <View style={styles.scrollIcon}>
        <View style={styles.scrollDownArrow}>
          <VectorIcon
            name="angle-dobule-down"
            type="Fontisto"
            size={12}
            color={Colors.white}
            onPress={scrollToBottom}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5,
  },
  otherUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  userInnerContainer: {
    backgroundColor: Colors.teal,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  message: {
    fontSize: 13,
    color: Colors.white,
  },
  time: {
    fontSize: 9,
    color: Colors.white,
    marginLeft: 5,
  },
  doubleCheck: {
    marginLeft: 5,
  },
  otherUserInnerContainer: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  scrollDownArrow: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});