import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import DemoScreen from '../pages/demo'
import HomeScreen from '../pages/home'
import Login from '../pages/login'
import MainScreen from '../pages/main'

const Stack = createStackNavigator()

function NavigatorScreen() {
  const { Navigator, Screen, Group } = Stack
  return (
    <Navigator>
      {/* <Screen
        name="home"
        options={{ headerShown: false }}
        component={MainScreen}
      /> */}
      <Screen name="login" options={{ headerShown: false }} component={Login} />
    </Navigator>
  )
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <NavigatorScreen />
    </NavigationContainer>
  )
}

export default RootNavigator
