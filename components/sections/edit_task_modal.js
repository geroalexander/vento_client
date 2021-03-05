import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const EditTaskModal = ({ task }) => {
  console.log(task.taskName);
  console.log(task.maxQuantity);
  console.log(task.current);
  return (
    <SafeAreaView style={styles.container}>
      <Text>HELLO</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    opacity: 1,
    borderRadius: 25,
    padding: 20,
    width: '90%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
});

export default EditTaskModal;
