import React, { useState } from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
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
  Modal,
} from 'native-base'
import BaseWrapper from '@/components/BaseWrapper'
import BaseCard from '@/components/BaseCard'
import Spacing from '@/constants/Spacing'
import Color from '@/constants/Color'
import useScreen from '@/hooks/useScreen'

const AttendanceScreen = () => {
  const [goto, setGoto] = useState(true)
  const [goOff, setGoOff] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [screenWidth, screenHight] = useScreen()

  return (
    <BaseWrapper>
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
                  <Text
                    style={{ fontSize: 15, verticalAlign: 'middle' }}
                    color="gray.600">
                    上班时间 09:00
                  </Text>
                  {goto && (
                    <HStack space={Spacing / 2}>
                      <Heading size="md">打卡成功 08:59</Heading>
                      <Badge colorScheme="success" variant={'solid'}>
                        正常
                      </Badge>
                    </HStack>
                  )}
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
                  setModalVisible(true)
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
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        size="md">
        <Modal.Content h={screenHight / 3}>
          <Modal.CloseButton />
          <Modal.Body>
            <VStack space={Spacing * 3}>
              <Heading size="md">下班打卡</Heading>
              <Center>
                <Image
                  source={require('@/assets/icon/single-yes.png')}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
              </Center>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
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
