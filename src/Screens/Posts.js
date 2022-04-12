import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { Images,Matrics } from '../CommonConfig'
export default function Posts() {
  return (
    <View>
      <Image 
      source={require('../Assets/Icons/Customer.png')}
      style={{height:100,width:Matrics.ms(100),resizeMode:"contain"}}
      />
    </View>
  )
}

const styles = StyleSheet.create({})