/* eslint-disable */
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MyStatus from '../components/MyStatus'
// import RecentCalls from '../components/RecentCalls'
import ViewedStatus from '../components/ViewedStatus'
import { Colors } from '../theme/Colors'
import RecentStatus from '../components/RecentStatus'

const StatusListScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyStatus />
        <RecentStatus />
        <ViewedStatus />
      </ScrollView>
    </View>
  )
}

export default StatusListScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    backgroundColor: Colors.primaryColor,
  }
})