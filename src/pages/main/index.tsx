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
        headerShown: false,
        tabBarStyle: { height: 70, paddingBottom: 10 },
        tabBarLabelStyle: { fontSize: 14 },
      }}>
      <Tab.Screen
        name="首页"
        options={{
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
        name="待办"
        options={{
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
        name="应用"
        options={{
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
        name="我的"
        options={{
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
