import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Box } from 'native-base'

const BaseTouchable = (props: any) => {
  return (
    <Box>
      <TouchableOpacity style={styles.touch}>{props.children}</TouchableOpacity>
    </Box>
  )
}

export default BaseTouchable

const styles = StyleSheet.create({
  touch: {
    padding: 12,
  },
})
