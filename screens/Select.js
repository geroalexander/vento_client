import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { darkBlue } from '../StyleVars';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  ChakraPetch_300Light,
  ChakraPetch_300Light_Italic,
  ChakraPetch_500Medium,
  ChakraPetch_500Medium_Italic,
  ChakraPetch_700Bold,
  ChakraPetch_700Bold_Italic,
} from '@expo-google-fonts/chakra-petch';

const LogIn = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    ChakraPetch_300Light,
    ChakraPetch_300Light_Italic,
    ChakraPetch_500Medium,
    ChakraPetch_500Medium_Italic,
    ChakraPetch_700Bold,
    ChakraPetch_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
            Proceed as Admin
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
  }
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

export default LogIn;
