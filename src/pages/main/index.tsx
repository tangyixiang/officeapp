import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-ionicons'
import HomeScreen from '../home'
import TodoScreen from '../todo'
import FuncScreen from '../func'
import MeScreen from '../me'

const Tab = createBottomTabNavigator()

function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60, paddingBottom: 10 },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({
            focused,
            color,
            size,
          }: {
            focused: boolean
            color: string
            size: number
          }) => {
            return <Icon name="home" size={size} color={color} />
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Todo"
        options={{
          headerShown: false,
          tabBarIcon: ({
            focused,
            color,
            size,
          }: {
            focused: boolean
            color: string
            size: number
          }) => {
            return <Icon name="barcode" size={size} color={color} />
          },
        }}
        component={TodoScreen}
      />
      <Tab.Screen
        name="Func"
        options={{
          headerShown: false,
          tabBarIcon: ({
            focused,
            color,
            size,
          }: {
            focused: boolean
            color: string
            size: number
          }) => {
            return <Icon name="apps" size={size} color={color} />
          },
        }}
        component={FuncScreen}
      />
      <Tab.Screen
        name="Me"
        options={{
          headerShown: false,
          tabBarIcon: ({
            focused,
            color,
            size,
          }: {
            focused: boolean
            color: string
            size: number
          }) => {
            return <Icon name="person" size={size} color={color} />
          },
        }}
        component={MeScreen}
      />
    </Tab.Navigator>
  )
}

export default MainScreen

const styles = StyleSheet.create({})
