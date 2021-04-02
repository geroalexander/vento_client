import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { darkBlue } from '../StyleVars';

const Select = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.back}>
      <View style={styles.container}>
        <Text style={styles.text}>VENTO</Text>
        <Button
          style={styles.btn}
          color={darkBlue}
          mode="contained"
          onPress={() => navigation.navigate('Admin')}
        >
          Register as Admin
        </Button>
        <Button
          style={styles.btn}
          color={darkBlue}
          mode="contained"
          onPress={() => navigation.navigate('Employee')}
        >
          Register as Employee
        </Button>
        <Button
          style={styles.btn}
          color={darkBlue}
          mode="contained"
          onPress={() => navigation.navigate('LogIn')}
        >
          Log In
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
    elevation: 20,
    flex: 1,
    justifyContent: 'center',
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
  text: {
    fontFamily: 'ChakraPetch_700Bold',
    fontSize: 90,
    color: darkBlue,
    alignSelf: 'center',
  },
});

export default Select;
