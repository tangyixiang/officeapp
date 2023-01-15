import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native'

const TodoScreen = () => {
  return (
    <LottieView
      source={{
        uri: 'https://assets7.lottiefiles.com/packages/lf20_rc5d0f61.json',
      }}
      autoPlay
    />
  )
}

export default TodoScreen

const styles = StyleSheet.create({})
