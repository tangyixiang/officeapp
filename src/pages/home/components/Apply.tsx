import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import {
  Badge,
  Box,
  FlatList,
  Heading,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import BaseWrapper from '@/components/BaseWrapper'
import BaseCard from '@/components/BaseCard'

const screenWidth = Dimensions.get('window').width

const data = [
  {
    title: '年假申请',
    content: '原型杂货铺',
    time: '2021-03-01 10:00',
    node: '直接领导审核',
  },
  {
    title: '年假申请2222',
    content: '杂货铺',
    time: '2021-03-01 10:00',
    node: '直接审核',
  },
]

const Apply = () => {
  const [activeBtn, setActiveBtn] = useState('todo')

  return (
    <Box>
      <Box
        w="100%"
        backgroundColor="#fff"
        flexDirection="row"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1">
        <TouchableOpacity
          style={
            activeBtn == 'todo' ? [styles.button, styles.choose] : styles.button
          }
          onPress={() => setActiveBtn('todo')}>
          <Text fontSize="lg" color="gray.600">
            待办
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            activeBtn == 'finish'
              ? [styles.button, styles.choose]
              : styles.button
          }
          onPress={() => setActiveBtn('finish')}>
          <Text fontSize="lg" color="gray.600">
            完成
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            activeBtn == 'draft'
              ? [styles.button, styles.choose]
              : styles.button
          }
          onPress={() => setActiveBtn('draft')}>
          <Text fontSize="lg" color="gray.600">
            草稿
          </Text>
        </TouchableOpacity>
      </Box>
      <BaseWrapper>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box mt="2">
              <BaseCard>
                <VStack space="2" p="4">
                  <Heading size="md">{item.title}</Heading>
                  <Text fontSize={'md'}>{item.content}</Text>
                  <Text fontSize={'md'}>{item.time}</Text>
                  <Badge
                    colorScheme="info"
                    _text={{ fontSize: 15 }}
                    width="140">
                    {item.node}
                  </Badge>
                </VStack>
              </BaseCard>
            </Box>
          )}
        />
      </BaseWrapper>
    </Box>
  )
}

export default Apply

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    width: screenWidth / 3,
    textAlign: 'center',
  },
  choose: {
    borderBottomColor: '#3e2ad1',
    borderBottomWidth: 2,
  },
})
