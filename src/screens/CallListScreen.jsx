/* eslint-disable */
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CallLink from '../components/CallLink'
import RecentCalls from '../components/RecentCalls'
import { Colors } from '../theme/Colors'

export default function CallListScreen() {
  return (
    <View style={{ backgroundColor: Colors.primaryColor, paddingHorizontal: 12, paddingTop: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CallLink />
        <RecentCalls />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})