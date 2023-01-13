import React from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

const DemoScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{
              width: 101,
              height: 101,
              marginTop: 54,
            }}
            source={require('../../assets/Logo.png')}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 20,
            paddingHorizontal: 40,
          }}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 20,
              color: '#150B3D',
            }}>
            Create an Account
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: 38,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 14,
              textAlign: 'center',
              color: '#524B6B',
            }}>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
            eiusmod tempor
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 16,
              color: '#150B3D',
            }}>
            Full name
          </Text>
          <TextInput
            style={{
              marginTop: 10,
              height: 50,
              // borderWidth: 1,
              backgroundColor: '#f4f5f5',
              borderRadius: 10,
            }}></TextInput>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 14 }}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 16,
              color: '#150B3D',
            }}>
            Email
          </Text>
          <TextInput
            style={{
              marginTop: 10,
              height: 50,
              // borderWidth: 1,
              backgroundColor: '#f4f5f5',
              borderRadius: 10,
            }}></TextInput>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 14 }}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 16,
              color: '#150B3D',
            }}>
            password
          </Text>
          <TextInput
            style={{
              marginTop: 10,
              height: 50,
              // borderWidth: 1,
              backgroundColor: '#f4f5f5',
              borderRadius: 10,
            }}
            textContentType="password"></TextInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DemoScreen

const styles = StyleSheet.create({})
