import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Switch,
  Pressable,
} from 'react-native';
import { darkBlue } from '../../StyleVars';
import { TextInput, Button } from 'react-native-paper';

const AddUserModal = ({ addUser, hideModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
        label={'Add a team member'}
        underlineColor={darkBlue}
        sectionColor={darkBlue}
        onChangeText={(text) => setName(text)}
        value={name}
        style={styles.input}
        // onSubmitEditing={() => {
        //   handleSection(newSection);
        //   hideModal();
        // }}
      />
      <TextInput
        theme={{
          colors: {
            placeholder: darkBlue,
            text: darkBlue,
            primary: darkBlue,
          },
        }}
        mode="outlined"
        label={'Add their email'}
        underlineColor={darkBlue}
        sectionColor={darkBlue}
        onChangeText={(text) => setEmail(text)}
        value={email}
        // onSubmitEditing={() => {
        //   handleSection(newSection);
        //   hideModal();
        // }}
      />
      <Button
        style={styles.btn}
        color={darkBlue}
        mode="contained"
        onPress={() => {
          addUser(name, email);
          hideModal();
        }}
      >
        Add team emmber!
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingBottom: 10,
  },
  container: {
    backgroundColor: '#fff',
    opacity: 1,
    borderRadius: 7,
    padding: 20,
    width: '90%',
    height: 250,
    justifyContent: 'space-between',
    paddingVertical: 25,
    elevation: 20,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginTop: 10,
  },
});

export default AddUserModal;
