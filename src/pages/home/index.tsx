import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dream"
        options={{ headerShown: false }}
        component={Home}
      />
      <Tab.Screen
        name="Settings"
        options={{ headerShown: false }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
