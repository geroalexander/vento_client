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
import { Ionicons } from '@expo/vector-icons';

const AddUserModal = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text>ADD USER HERE</Text>
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
    justifyContent: 'space-between',
    paddingVertical: 45,
    elevation: 20,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddUserModal;
