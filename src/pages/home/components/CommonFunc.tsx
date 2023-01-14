import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { HStack, Text, VStack } from 'native-base'
import { CompositeScreenProps, useNavigation } from '@react-navigation/native'

const CommonFunc = () => {
  const navigation = useNavigation<any>()
  return (
    <HStack space="8" p="4" justifyContent="center">
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('../../../assets/icon/location.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ textAlign: 'center', paddingTop: 8 }}>打卡</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('../../../assets/icon/calendar.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ textAlign: 'center', paddingTop: 8 }}>考勤查询</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('apply')}>
        <Image
          source={require('../../../assets/icon/approve.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ textAlign: 'center', paddingTop: 8 }}>我的申请</Text>
      </TouchableOpacity>
    </HStack>
  )
}

export default CommonFunc

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    padding: 10,
  },
})
