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

const CarUse = () => {
  return (
    <VStack space="4" p="4">
      <Box justifyContent="space-between" flexDirection="row">
        <Heading size="md" color="indigo.600">
          用车通知
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
          <Heading size="sm">拜访客户</Heading>
          <Text>今日 10:00-11:00</Text>
          <Text>闽A12345</Text>
        </VStack>
      </HStack>
      <Divider />
      <HStack space="6">
        <Image
          source={require('../../../assets/img/gugong.jpg')}
          style={{ width: 80, height: 80 }}
        />
        <VStack space="2">
          <Heading size="sm">外出开会</Heading>
          <Text>今日 10:00-11:00</Text>
          <Text>闽A43223</Text>
        </VStack>
      </HStack>
      <Divider />
    </VStack>
  )
}

export default CarUse

const styles = StyleSheet.create({})
