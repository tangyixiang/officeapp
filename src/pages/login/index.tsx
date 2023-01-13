import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Text,
} from 'native-base'

const Login = () => {
  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" py="8">
        <Heading
          size="lg"
          textAlign="center"
          color="coolGray.800"
          // _dark={{
          //   color: 'warmGray.50',
          // }}
          fontWeight="bold">
          广西特种设备检验研究院桂林分院运营作业平台
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>账号</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>密码</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" size="lg" colorScheme="blue">
            <Text color="white" fontSize="lg">
              登录
            </Text>
          </Button>
        </VStack>
      </Box>
    </Center>
  )
}

export default Login

const styles = StyleSheet.create({})
