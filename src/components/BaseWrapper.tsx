import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Box, Center } from 'native-base'

const BaseWrapper = (props: any) => {
  return (
    <Center w="100%" flex={props.center ? 1 : undefined}>
      <Box safeArea p="2" w="95%" py="4">
        {props.children}
      </Box>
    </Center>
  )
}

export default BaseWrapper

const styles = StyleSheet.create({})
