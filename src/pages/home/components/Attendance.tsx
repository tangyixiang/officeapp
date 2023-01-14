import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Stack, Heading, Divider, HStack, Box, Text, Badge } from 'native-base'

const Attendance = () => {
  const [date, setDate] = useState('2023-01-08')
  const [checkExp, setCheckExp] = useState(true)

  return (
    <Stack p="4" space={3}>
      <Stack space={2}>
        <Heading size="md" ml="-1">
          {date} 考勤情况
        </Heading>
      </Stack>
      <Divider />
      <HStack space={10}>
        <TimeCard name="上班打卡" time="09:01" badgeText="迟到" />
        <TimeCard name="下班打卡" time="15:01" badgeText="早退" />
      </HStack>
      {checkExp && <Text>温馨提示： 打卡异常，请尽快处理异常情况哦！</Text>}
    </Stack>
  )
}

function TimeCard(props: any) {
  return (
    <Box>
      <Stack space={4}>
        <HStack space={2}>
          <Text fontSize="md" color="muted.500">
            {props.name}
          </Text>
          <Badge colorScheme="error" alignSelf="center" variant="outline">
            {props.badgeText}
          </Badge>
        </HStack>
        <Heading size="xl">{props.time}</Heading>
      </Stack>
    </Box>
  )
}

export default Attendance

const styles = StyleSheet.create({})
