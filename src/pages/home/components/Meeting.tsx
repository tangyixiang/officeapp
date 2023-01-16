import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import {
  HStack,
  VStack,
  Text,
  Heading,
  Divider,
  Box,
  Button,
} from 'native-base'
import Icon from 'react-native-ionicons'

const Meeting = () => {
  return (
    <VStack space="4" p="4">
      <Box justifyContent="space-between" flexDirection="row">
        <Heading size="md" color="indigo.600">
          会议通知
        </Heading>
        <TouchableOpacity>
          <Icon name="ios-arrow-forward" size={26} />
        </TouchableOpacity>
      </Box>
      <HStack space="6">
        <Image
          source={require('../../../assets/img/snow_gugong.jpg')}
          style={{ width: 80, height: 80 }}
        />
        <VStack space="2">
          <Heading size="sm">需求变动</Heading>
          <Text>今日 10:00-11:00</Text>
          <Text>301会议室</Text>
        </VStack>
      </HStack>
      <Divider />
      <HStack space="6">
        <Image
          source={require('../../../assets/img/gugong.jpg')}
          style={{ width: 80, height: 80 }}
        />
        <VStack space="2">
          <Heading size="sm">需求变动</Heading>
          <Text>今日 10:00-11:00</Text>
          <Text>301会议室</Text>
        </VStack>
      </HStack>
      <Divider />
    </VStack>
  )
}

export default Meeting

const styles = StyleSheet.create({})
