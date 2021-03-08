import { DrawerItemList } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { darkBlue } from '../StyleVars';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [restaurant, setRestaurant] = useState('');

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
          // onSubmitEditing={() => {
          //   if (!maxQuant) Alert.alert('You must fill in all fields!');
          //   else {
          //     handleTask(newTask, maxQuant);
          //     hideModal();
          //   }
          // }}
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
          // onSubmitEditing={() => {
          //   if (newTask === '') Alert.alert('You must fill in both fields!');
          //   else {
          //     handleTask(newTask, maxQuant);
          //     hideModal();
          //   }
          // }}
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
          // onSubmitEditing={() => {
          //   if (newTask === '') Alert.alert('You must fill in both fields!');
          //   else {
          //     handleTask(newTask, maxQuant);
          //     hideModal();
          //   }
          // }}
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
          // onSubmitEditing={() => {
          //   if (
          //     email === '' ||
          //     name === '' ||
          //     password === '' ||
          //     restaurant === ''
          //   ) {
          //     Alert.alert('You must fill in both fields!');
          //   } else {
          //     setLogIn(true);
          //   }
          // }}
        />
        <View style={styles.btn}>
          <DrillDown.Consumer>
            <Button
              color={darkBlue}
              mode="contained"
              onPress={() => {
                if (
                  email === '' ||
                  name === '' ||
                  password === '' ||
                  restaurant === ''
                ) {
                  Alert.alert('You must fill in both fields!');
                } else {
                  value(true);
                }
              }}
            >
              Create Account!
            </Button>
          </DrillDown.Consumer>
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

export default Admin;
