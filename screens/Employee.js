import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { darkBlue } from '../StyleVars';
import ApiClient from '../ApiClient';

const Employee = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [restaurant, setRestaurant] = useState('');

  const [user, setUser] = useState({});

  const createUser = (email, name, password) => {
    ApiClient.createNewEmployee(email, name, password).then((data) => {
      setUser(data);
    });
  };

  return (
    <SafeAreaView style={styles.back}>
      <View style={styles.container}>
        <TextInput
          theme={{
            colors: {
              placeholder: darkBlue,
              text: darkBlue,
              primary: darkBlue,
            },
          }}
          mode="outlined"
          label={'enter your email'}
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
          label={'enter your name'}
          underlineColor={darkBlue}
          sectionColor={darkBlue}
          onChangeText={(text) => setName(text)}
          value={name}
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
          label={'create your password'}
          underlineColor={darkBlue}
          sectionColor={darkBlue}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
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
          label={'enter your restaurant or kitchen name'}
          underlineColor={darkBlue}
          sectionColor={darkBlue}
          onChangeText={(text) => setRestaurant(text)}
          value={restaurant}
        />
        <View style={styles.btn}>
          <Button
            color={darkBlue}
            mode="contained"
            onPress={() => createUser(email, name, password)}
          >
            Create Account!
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '98%',
    backgroundColor: '#fff',
    opacity: 1,
    borderRadius: 7,
    padding: 20,
    elevation: 20,
    margin: 20,
    width: '90%',
  },
  btn: {
    // paddingHorizontal: 60,
    marginTop: 20,
    paddingVertical: 10,
  },
  textBox: {
    paddingTop: 30,
  },
  back: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default Employee;
