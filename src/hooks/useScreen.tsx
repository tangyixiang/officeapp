import React from 'react'
import { Dimensions } from 'react-native'

const useScreen = () => {
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height

  return [screenWidth, screenHeight]
}

export default useScreen
