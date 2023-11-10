/* eslint-disable */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CallLink from '../components/CallLink'
import RecentCalls from '../components/RecentCalls'

export default function CallListScreen() {
  return (
    <View>
      <CallLink/>
      <RecentCalls/>
    </View>
  )
}

const styles = StyleSheet.create({})