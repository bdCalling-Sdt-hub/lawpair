import { View, Text } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'
import Header from '../../components/Header'

const Login = () => {
  return (
    <View>
        <Header/>
      <Text style={tw`text-4xl `}>Login</Text>
    </View>
  )
}

export default Login