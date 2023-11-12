/* eslint-disable */
import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatListScreen, CommunityScreen, StatusListScreen, CallListScreen } from '../screens';
import { Colors } from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';

const Tab = createMaterialTopTabNavigator();

const TopTabBar = () => {
  return (
    <Tab.Navigator
      initialRoute="ChatList"
      screenOptions={{
        tabBarInactiveTintColor: Colors.secondaryColor,
        tabBarActiveTintColor: Colors.tertiary,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.tertiary,
        },
        tabBarStyle: {
          backgroundColor: Colors.primaryColor
        },
      }}
    >
      <Tab.Screen name="ChatList" component={ChatListScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <VectorIcon
              type="FontAwesome"
              name="users"
              size={20}
              color={color}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen name="Community" component={CommunityScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <VectorIcon
              type="AntDesign"
              name="profile"
              size={20}
              color={color}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen name="StatusList" component={StatusListScreen} options={{
        tabBarLabel: "STATUS"
      }}/>
      <Tab.Screen name="CallList" component={CallListScreen} options={{
        tabBarLabel: "CALLS"
      }}/>
    </Tab.Navigator>
  )
}

export default TopTabBar