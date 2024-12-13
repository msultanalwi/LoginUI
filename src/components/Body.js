import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';

const Body = ({}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tema, setTema] = useState(false);

  const HandlerLogin = () => {
    if (
      username === 'msultanalwi@gmail.com' ||
      (username === 'negaraOpenSource' && password === 'admin123')
    ) {
      Alert.alert('login success!');
    } else if (username === '' || password === '') {
      Alert.alert('you need to fill all the field!');
    } else {
      Alert.alert('login failed!');
    }
  };

  const handlerSwitch = () => {
    setTema(!tema);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: tema ? 'black' : '#c8d6db',
      }}>
      <Pressable
        onPress={handlerSwitch}
        style={{
          alignItems: 'flex-end',
          backgroundColor: tema ? 'black' : '#c8d6db',
        }}>
        <View
          style={{
            alignItems: 'center',
            height: 50,
            width: 100,
            backgroundColor: tema ? 'gray' : 'gray',
            borderRadius: 50,
            alignItems: tema ? 'flex-end' : 'flex-start',
          }}>
          <View
            style={{
              alignItems: 'center',
              height: 50,
              width: 50,
              backgroundColor: tema ? 'red' : 'aqua',
              borderRadius: 50,
            }}></View>
        </View>
      </Pressable>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'purple',
            // margin: 100,
            // marginVertical: 400,
            width: 370,
            height: 350,
            borderRadius: 10,
          }}>
          <View>
            <Text style={{fontSize: 20, marginBottom: 10}}>Username</Text>
            <TextInput
              placeholder="Enter Your Username or Email"
              value={username}
              onChangeText={text => setUsername(text)}
              style={{
                fontSize: 16,
                width: 300,
                height: 50,
                backgroundColor: 'orange',
                borderRadius: 5,
                marginBottom: 20,
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 20, marginBottom: 10}}>Password</Text>

            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={{
                fontSize: 16,
                width: 300,
                height: 50,
                backgroundColor: 'orange',
                borderRadius: 5,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={HandlerLogin}
            disabled={username || password ? false : true}
            style={{
              width: 300,
              height: 50,
              backgroundColor: username || password ? 'blue' : 'gray',
              justifyContent: 'center',
              borderRadius: 5,
              marginTop: 40,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default Body;
