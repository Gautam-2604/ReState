import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Link href='/sign-in'>Sign In</Link>
        <Link href='/explore'>Explore</Link>
        <Link href='/profile'>profile</Link>
        <Link href='/properties/1'>Properties</Link>
      
    </View>
  )
}

export default index