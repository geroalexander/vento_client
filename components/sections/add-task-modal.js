import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
  Alert,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import ApiClient from '../../ApiClient';
import { darkBlue } from '../../StyleVars';

const AddTaskModal = ({ hideModal, handleTask }) => {
  const [newTask, setNewTask] = useState('');
  const [maxQuant, setMaxQuant] = useState(null);

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
        label={'Add a task to your section'}
        underlineColor={darkBlue}
        sectionColor={darkBlue}
        onChangeText={(text) => setNewTask(text)}
        value={newTask}
        onSubmitEditing={() => {
          if (!maxQuant) Alert.alert('You must fill in both fields!');
          else {
            handleTask(newTask, maxQuant);
            hideModal();
          }
        }}
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
        label={'Enter maximum units'}
        keyboardType="number-pad"
        underlineColor={darkBlue}
        sectionColor={darkBlue}
        onChangeText={(text) => setMaxQuant(text)}
        value={maxQuant}
        onSubmitEditing={() => {
          if (newTask === '') Alert.alert('You must fill in both fields!');
          else {
            handleTask(newTask, maxQuant);
            hideModal();
          }
        }}
      />
      <View style={styles.btn}>
        <Button
          color={darkBlue}
          mode="contained"
          onPress={() => {
            if (newTask && maxQuant) {
              handleTask(newTask, maxQuant);
              hideModal();
            } else {
              Alert.alert('You must fill in both fields!');
            }
          }}
        >
          Add Task
        </Button>
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
    width: '90%',
    height: 250,
    justifyContent: 'space-around',
    paddingVertical: 45,
    elevation: 20,
  },
  btn: {
    paddingTop: 40,
  },
  textBox: {
    paddingTop: 30,
  },
});

export default AddTaskModal;
