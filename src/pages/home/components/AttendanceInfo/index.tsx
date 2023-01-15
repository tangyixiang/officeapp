import React, { useState, useRef } from 'react'
import { StyleSheet, Image, ScrollView } from 'react-native'
import {
  Heading,
  HStack,
  VStack,
  Text,
  Box,
  Center,
  Pressable,
  Divider,
  Badge,
  useToast,
} from 'native-base'
import BaseWrapper from '@/components/BaseWrapper'
import BaseCard from '@/components/BaseCard'
import Spacing from '@/constants/Spacing'
import Color from '@/constants/Color'

const AttendanceScreen = () => {
  const [goto, setGoto] = useState(true)
  const [goOff, setGoOff] = useState(false)
  const [goOffTime, setGoOffTime] = useState<String[]>([])

  const toast = useToast()

  return (
    <BaseWrapper>
      <ScrollView>
        <VStack space={Spacing}>
          <BaseCard>
            <HStack space={Spacing * 2} p={Spacing}>
              <Image
                style={styles.img}
                source={require('@/assets/img/avatar.png')}
              />
              <VStack space={Spacing}>
                <Heading size="md">张三</Heading>
                <Text fontSize="lg" color="gray.600">
                  12月08日 星期四
                </Text>
              </VStack>
            </HStack>
          </BaseCard>
          <BaseCard>
            <VStack p={Spacing} space={Spacing * 2}>
              <Box>
                <HStack px={Spacing} space={Spacing}>
                  <Box
                    bg={Color.primary}
                    style={styles.point}
                    borderColor="coolGray.200"
                    borderWidth="1"></Box>
                  <VStack space={Spacing}>
                    <HStack space={Spacing}>
                      <Text
                        style={{ fontSize: 15, verticalAlign: 'middle' }}
                        color="gray.600">
                        上班时间 09:00
                      </Text>
                      <Badge colorScheme="success" variant={'solid'}>
                        正常
                      </Badge>
                    </HStack>

                    {goto && <Heading size="sm">打卡时间 08:59</Heading>}
                  </VStack>
                </HStack>
              </Box>
              {!goto && (
                <Pressable>
                  {({ isHovered, isFocused, isPressed }) => {
                    return (
                      <Center>
                        <Box
                          borderWidth="1"
                          borderColor="coolGray.300"
                          shadow="3"
                          width="150"
                          height="150"
                          bg={
                            isPressed
                              ? 'indigo.500'
                              : isHovered
                              ? 'indigo.500'
                              : 'indigo.700'
                          }
                          p="5"
                          rounded="75"
                          style={{
                            transform: [
                              {
                                scale: isPressed ? 0.96 : 1,
                              },
                            ],
                          }}>
                          <Center flex="1">
                            <Heading size="lg" color="muted.50">
                              上班打卡
                            </Heading>
                          </Center>
                        </Box>
                      </Center>
                    )
                  }}
                </Pressable>
              )}
              <Divider />
              <Box>
                <HStack px={Spacing} space={Spacing}>
                  <Box
                    bg="warning.400"
                    style={styles.point}
                    borderColor="coolGray.200"
                    borderWidth="1"></Box>
                  <VStack space={Spacing}>
                    <Text
                      style={{ fontSize: 15, verticalAlign: 'middle' }}
                      color="gray.600">
                      下班时间 18:00
                    </Text>
                    {goOffTime.map((item, index) => (
                      <Heading key={index} size="sm">
                        打卡时间:{item}
                      </Heading>
                    ))}
                    {goOff && (
                      <HStack space={Spacing / 2}>
                        <Heading size="md">打卡成功 18:00</Heading>
                        <Badge colorScheme="success" variant={'solid'}>
                          正常
                        </Badge>
                      </HStack>
                    )}
                  </VStack>
                </HStack>
              </Box>
              {!goOff && (
                <Pressable
                  onPress={() => {
                    toast.show({
                      description: '打卡成功',
                    })
                    setGoOffTime([...goOffTime, '18:00'])
                  }}>
                  {({ isHovered, isFocused, isPressed }) => {
                    return (
                      <Center>
                        <Box
                          borderWidth="1"
                          borderColor="coolGray.300"
                          shadow="3"
                          width="150"
                          height="150"
                          bg={
                            isPressed
                              ? 'warning.300'
                              : isHovered
                              ? 'warning.300'
                              : 'warning.400'
                          }
                          p="5"
                          rounded="75"
                          style={{
                            transform: [
                              {
                                scale: isPressed ? 0.96 : 1,
                              },
                            ],
                          }}>
                          <Center flex="1">
                            <Heading size="lg" color="muted.50">
                              下班打卡
                            </Heading>
                          </Center>
                        </Box>
                      </Center>
                    )
                  }}
                </Pressable>
              )}
            </VStack>
          </BaseCard>
        </VStack>
      </ScrollView>
    </BaseWrapper>
  )
}

export default AttendanceScreen

const styles = StyleSheet.create({
  img: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  point: {
    height: 26,
    width: 26,
    borderRadius: 13,
  },
  check: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: Color.primary,
    alignItems: 'center',
  },
})
