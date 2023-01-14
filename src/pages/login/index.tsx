import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Text,
  Stack,
  Pressable,
} from 'native-base'
import Icon from 'react-native-ionicons'

const Login = () => {
  const [show, setShow] = useState(false)

  return (
    <Center w="100%" flex="1">
      <Box safeArea p="2" w="90%" py="8">
        <Heading
          size="lg"
          mb="10"
          textAlign="center"
          color="coolGray.800"
          fontWeight="bold">
          广西特种设备检验研究院桂林分院运营作业平台
        </Heading>
        <VStack space={3} mt="5">
          <Stack space={'xl'}>
            <FormControl>
              <FormControl.Label>账号</FormControl.Label>
              <Input type="text" size="2xl" />
            </FormControl>
            <FormControl>
              <FormControl.Label>密码</FormControl.Label>
              <Input
                type={show ? 'text' : 'password'}
                size="2xl"
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      name={show ? 'eye-off' : 'eye'}
                      size={26}
                      style={{ marginRight: 8 }}
                    />
                  </Pressable>

                  // <Button
                  //   variant="unstyled"
                  //   size="md"
                  //   leftIcon={
                  //     <Icon name={show ? 'eye-off' : 'eye'} size={20} />
                  //   }
                  //   rounded="none"
                  //   w="1/6"
                  //   h="full"
                  //   onPress={handleClick}></Button>
                }
              />
            </FormControl>
            <Button mt="2" size="lg" colorScheme="blue">
              <Text color="white" fontSize="lg">
                登录
              </Text>
            </Button>
          </Stack>
        </VStack>
      </Box>
    </Center>
  )
}

export default Login

const styles = StyleSheet.create({})
