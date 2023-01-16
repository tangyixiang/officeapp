import BaseCard from '@/components/BaseCard'
import BaseWrapper from '@/components/BaseWrapper'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Box, Divider, Text } from 'native-base'
import BaseTouchable from '@/components/BaseTouchable'

const FuncScreen = () => {
  const data = ['财务管理', '车辆预约', '会议室预约']

  return (
    <BaseWrapper>
      <BaseCard>
        {data.map((item, index) => (
          <Box key={index}>
            <BaseTouchable>
              <Text fontSize={'md'}>{item}</Text>
            </BaseTouchable>
            <Divider />
          </Box>
        ))}
      </BaseCard>
    </BaseWrapper>
  )
}

export default FuncScreen

const styles = StyleSheet.create({})
