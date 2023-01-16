import React from 'react'
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native'
import { HStack, VStack, Heading, Divider, Box, Badge } from 'native-base'
import Icon from 'react-native-ionicons'

const News = () => {
  return (
    <VStack space="4" p="4">
      <Box justifyContent="space-between" flexDirection="row">
        <Heading size="md" color="indigo.600">
          公告通知
        </Heading>
        <TouchableOpacity>
          <Icon name="ios-arrow-forward" size={26} />
        </TouchableOpacity>
      </Box>
      <HStack space="4">
        <Image
          source={require('../../../assets/img/snow_gugong.jpg')}
          style={{ width: 80, height: 80 }}
        />
        <View style={{ flex: 1 }}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={{
              fontSize: 16,
            }}>
            吹响“逆战”集结号|2021年度集团民主生活前三次会议
          </Text>
          <Badge mt="2" style={{ width: 100, backgroundColor: '#6f90fe' }}>
            <Text style={{ color: '#fff' }}>公司新闻</Text>
          </Badge>
        </View>
      </HStack>
      <Divider />
      <HStack space="4">
        <View style={{ flex: 1 }}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={{
              fontSize: 16,
            }}>
            关于2021年考勤制度变更通知
          </Text>
          <Badge mt="2" style={{ width: 100, backgroundColor: '#ff9700' }}>
            <Text style={{ color: '#fff' }}>公司新闻</Text>
          </Badge>
        </View>
      </HStack>
      <Divider />
    </VStack>
  )
}

export default News

const styles = StyleSheet.create({})
