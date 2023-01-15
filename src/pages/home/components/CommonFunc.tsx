import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { HStack, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import Spacing from '@/constants/Spacing'

const CommonFunc = () => {
  const navigation = useNavigation<any>()
  return (
    <HStack space={Spacing * 2} p={Spacing / 2} justifyContent="center">
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('attendanceDetail')}>
        <Image
          style={styles.img}
          source={require('../../../assets/icon/location.png')}
        />
        <Text style={styles.text}>打卡</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image
          style={styles.img}
          source={require('../../../assets/icon/calendar.png')}
        />
        <Text style={styles.text}>考勤查询</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('apply')}>
        <Image
          style={styles.img}
          source={require('../../../assets/icon/approve.png')}
        />
        <Text style={styles.text}>我的申请</Text>
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
  img: {
    width: 40,
    height: 40,
  },
  text: {
    textAlign: 'center',
    paddingTop: 8,
  },
})
