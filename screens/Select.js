import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { darkBlue } from '../StyleVars';

const LogIn = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.back}>
      <View style={styles.container}>
        <Button
          style={styles.btn}
          color={darkBlue}
          mode="contained"
          onPress={() => navigation.navigate('Admin')}
        >
          Proceed as Admin/Owner
        </Button>
        <Button
          style={styles.btn}
          color={darkBlue}
          mode="contained"
          onPress={() => navigation.navigate('Employee')}
        >
          Proceed as Employee
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
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

export default LogIn;
