/* eslint-disable */
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Colors } from './src/theme/Colors';
import { HomeScreen } from './src/screens';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primaryColor}/>
      <HomeScreen/>
    </NavigationContainer>
  );
}

export default App