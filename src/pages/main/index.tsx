import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-ionicons'
import HomeScreen from '../home'
import FuncScreen from '../func'
import MeScreen from '../me'
import MessageScreen from '../message'

const Tab = createBottomTabNavigator()

function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerTitleAlign: 'center',
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
        name="应用"
        options={{
          title: '应用',
          headerShown: true,
          headerTitleAlign: 'center',
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
        name="消息"
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
            return <Icon name="ios-chatbubbles" size={size} color={color} />
          },
        }}
        component={MessageScreen}
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
