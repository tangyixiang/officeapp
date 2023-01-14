import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box } from 'native-base'

const BaseCard = (props: any) => {
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      backgroundColor="gray.50">
      {props.children}
    </Box>
  )
}

export default BaseCard

const styles = StyleSheet.create({})
