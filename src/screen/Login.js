import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Body from '../components/Body';

const Login = ({}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: '8%',
          width: '100%',
          backgroundColor: 'red',
        }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            top: 20,
          }}>
          Sign In
        </Text>
      </View>
      <Body />
    </View>
  );
};

export default Login;
