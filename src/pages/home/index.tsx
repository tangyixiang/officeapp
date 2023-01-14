import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Heading, HStack, ScrollView, VStack } from 'native-base'
import BaseWrapper from '../../components/BaseWrapper'
import BaseCard from '../../components/BaseCard'
import Attendance from './components/Attendance'
import CommonFunc from './components/CommonFunc'
import Meeting from './components/Meeting'
import CarUse from './components/CarUse'
import News from './components/News'

const HomeScreen = () => {
  const components = [
    <Attendance />,
    <CommonFunc />,
    <Meeting />,
    <CarUse />,
    <News />,
  ]

  return (
    <ScrollView>
      <BaseWrapper>
        <VStack space={4}>
          <Heading size="md">你好，张三</Heading>
          {components.map((item, index) => (
            <BaseCard key={index}>{item}</BaseCard>
          ))}
        </VStack>
      </BaseWrapper>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
