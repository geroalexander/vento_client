import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { darkBlue } from '../StyleVars';

const Employee = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
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
        onChangeText={(text) => setEamil(text)}
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
      <View style={styles.btn}>
        <Button
          color={darkBlue}
          mode="contained"
          // onPress={() => {
          //   if (newTask && maxQuant) {
          //     handleTask(newTask, maxQuant);
          //     hideModal();
          //   } else {
          //     Alert.alert('You must fill in both fields!');
          //   }
          // }}
        >
          Add Task
        </Button>
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
