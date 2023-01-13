import React from 'react'
import 'react-native-gesture-handler'
import { NativeBaseProvider, Box } from 'native-base'
import RootNavigator from './src/navigator'

function App() {
  return (
    <NativeBaseProvider>
      <RootNavigator />
    </NativeBaseProvider>
  )
}

export default App
