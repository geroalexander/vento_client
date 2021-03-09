import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useEffect } from 'react/cjs/react.development';
import ApiClient from '../ApiClient';
import { darkBlue } from '../StyleVars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../assets/logo.png';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [restaurant, setRestaurant] = useState('');

  const [user, setUser] = useState({});
  const [kitchen, setKitchen] = useState({});

  const createUser = (email, name, password) => {
    ApiClient.createNewAdmin(email, name, password).then((data) => {
      setUser(data);
      ApiClient.createNewKitchen(user._id, restaurant).then((data) => {
        setUser(data.updatedAdmin);
        setKitchen(data.newKitchen);
        // getData();
      });
    });
  };

  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('@LoginFunc');
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <SafeAreaView style={styles.back}>
      <View style={styles.container}>
        <Text style={styles.text}>LOG IN</Text>
        <TextInput
          theme={{
            colors: {
              placeholder: darkBlue,
              text: darkBlue,
              primary: darkBlue,
            },
          }}
          mode="outlined"
          label={'Enter your email/username'}
          underlineColor={darkBlue}
          sectionColor={darkBlue}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <TextInput
          style={styles.textBox}
          theme={{
            colors: {
              placeholder: darkBlue,
              text: darkBlue,
              primary: darkBlue,
            },
          }}
          mode="outlined"
          label={'Enter your password'}
          underlineColor={darkBlue}
          sectionColor={darkBlue}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />

        <View style={styles.btn}>
          <Button
            color={darkBlue}
            mode="contained"
            onPress={() => createUser(email, name, password)}
          >
            Log In!
          </Button>
        </View>
        <Image source={logo} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    opacity: 1,
    borderRadius: 7,
    padding: 20,
    paddingTop: 70,
    elevation: 20,
    flex: 1,
  },
  btn: {
    // paddingHorizontal: 60,
    marginTop: 20,
    paddingVertical: 10,
  },
  textBox: {
    paddingTop: 10,
  },
  back: {
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 25,
  },
  text: {
    fontFamily: 'ChakraPetch_700Bold',
    fontSize: 50,
    color: darkBlue,
    alignSelf: 'center',
    paddingTop: 30,
  },
});

export default Admin;
