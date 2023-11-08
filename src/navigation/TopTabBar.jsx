/* eslint-disable */
import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatListScreen, CommunityScreen, StatusListScreen, CallListScreen } from '../screens';

const Tab = createMaterialTopTabNavigator();

const TopTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChatList" component={ChatListScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="StatusList" component={StatusListScreen} />
      <Tab.Screen name="CallList" component={CallListScreen} />
    </Tab.Navigator>
  )
}

export default TopTabBar