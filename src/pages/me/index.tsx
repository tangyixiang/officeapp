import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { VStack, HStack, Image, Heading, Text, Divider } from 'native-base'
import BaseWrapper from '@/components/BaseWrapper'
import BaseCard from '@/components/BaseCard'
import Spacing from '@/constants/Spacing'

const MeScreen = () => {
  return (
    <BaseWrapper>
      <VStack space={Spacing}>
        <BaseCard>
          <HStack space={Spacing * 2} p={Spacing}>
            <Image
              alt="avatar"
              style={styles.img}
              source={require('@/assets/img/avatar.png')}
            />
            <VStack space={Spacing}>
              <Heading size="md">张三</Heading>
              <Text fontSize="md" color="gray.500">
                产品经理
              </Text>
            </VStack>
          </HStack>
        </BaseCard>
        <BaseCard>
          <VStack p={Spacing} space={Spacing / 2}>
            <TouchableOpacity>
              <Text fontSize={'lg'} color="gray.700">
                系统设置
              </Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity>
              <Text fontSize={'lg'} color="gray.700">
                关于
              </Text>
            </TouchableOpacity>
          </VStack>
        </BaseCard>
      </VStack>
    </BaseWrapper>
  )
}

export default MeScreen

const styles = StyleSheet.create({
  img: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
})
