import React, { useState, useEffect } from 'react'
import { StyleSheet, Image } from 'react-native'
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
  Spinner,
  FlatList,
} from 'native-base'
import BaseWrapper from '@/components/BaseWrapper'
import BaseCard from '@/components/BaseCard'
import Spacing from '@/constants/Spacing'
import Color from '@/constants/Color'
import moment from 'moment'

const AttendanceScreen = () => {
  const [goto, setGoto] = useState(false)
  const [goOff, setGoOff] = useState(false)
  const [gotoTime, setGotoTime] = useState<String[]>([])
  const [goOffTime, setGoOffTime] = useState<String[]>([])
  const [disable, setdisable] = useState(false)
  const [text, setText] = useState('')
  const [color, setColor] = useState({ primary: '', press: '' })

  useEffect(() => {
    const hour = moment().hour()
    if (hour < 12) {
      setColor({ primary: 'indigo.700', press: 'indigo.500' })
      setText('上班打卡')
      setGoto(true)
    } else {
      setColor({ primary: 'warning.400', press: 'warning.300' })
      setText('下班打卡')
      setGoOff(true)
    }
  }, [])

  const toast = useToast()

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

                  <FlatList
                    height={'10'}
                    data={gotoTime}
                    renderItem={({ item }) => (
                      <Heading key={gotoTime.indexOf(item)} size="sm">
                        打卡时间:{item}
                      </Heading>
                    )}></FlatList>
                </VStack>
              </HStack>
            </Box>
            <Divider />
            <Box>
              <HStack px={Spacing} space={Spacing}>
                <Box
                  bg="warning.400"
                  style={styles.point}
                  borderColor="coolGray.200"
                  borderWidth="1"></Box>
                <VStack space={Spacing}>
                  <HStack space={Spacing}>
                    <Text
                      style={{ fontSize: 15, verticalAlign: 'middle' }}
                      color="gray.600">
                      下班时间 18:00
                    </Text>
                    <Badge colorScheme="success" variant={'solid'}>
                      正常
                    </Badge>
                  </HStack>
                  <FlatList
                    height={'10'}
                    data={goOffTime}
                    renderItem={({ item }) => (
                      <Heading key={goOffTime.indexOf(item)} size="sm">
                        打卡时间:{item}
                      </Heading>
                    )}></FlatList>
                </VStack>
              </HStack>
            </Box>
            <Divider />
          </VStack>
        </BaseCard>

        <Pressable
          py="20"
          onPress={() => {
            setdisable(true)
            //TODO 完成接口调用
            if (goto) {
              setGotoTime([...gotoTime, '09:00'])
            } else if (goOff) {
              setGoOffTime([...goOffTime, '18:00'])
            }
            toast.show({
              description: '打卡成功',
            })
            setdisable(false)
          }}>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Center>
                <Box
                  borderWidth="1"
                  borderColor="coolGray.300"
                  // shadow="2"
                  width="150"
                  height="150"
                  bg={
                    isPressed
                      ? color.press
                      : isHovered
                      ? color.press
                      : color.primary
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
                    {disable && <Spinner size="lg" color="warning.300" />}
                    {!disable && (
                      <Heading size="lg" color="muted.50">
                        {text}
                      </Heading>
                    )}
                  </Center>
                </Box>
              </Center>
            )
          }}
        </Pressable>
      </VStack>
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
