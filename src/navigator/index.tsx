import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../pages/login'
import MainScreen from '@/pages/main'
import Apply from '@/pages/home/components/Apply'
import AttendanceScreen from '@/pages/home/components/AttendanceInfo'
import TodoScreen from '@/pages/todo'

const Stack = createStackNavigator()

function NavigatorScreen() {
  const { Navigator, Screen } = Stack
  return (
    <Navigator>
      <Screen
        name="home"
        options={{ headerShown: false }}
        component={MainScreen}
      />
      <Screen
        name="attendanceDetail"
        options={{ title: '考勤打卡', headerTitleAlign: 'center' }}
        component={AttendanceScreen}
      />
      <Screen
        name="todo"
        options={{ title: '待办', headerTitleAlign: 'center' }}
        component={TodoScreen}
      />
      <Screen
        name="apply"
        options={{ title: '我的申请', headerTitleAlign: 'center' }}
        component={Apply}
      />
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
