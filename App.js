import * as React from 'react';
import { useState } from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LogInStack } from './navigation/StackNavigator';
import BottomTabNavigator from './navigation/TabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [logIn, setLogIn] = useState(true);

  // const storeData = async (value) => {
  //   try {
  //     const jsonLogin = JSON.stringify(value);
  //     await AsyncStorage.setItem('@LoginFunc', jsonLogin);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // storeData(() => setLogIn(true));

  if (!logIn)
    return (
      <NavigationContainer>
        <LogInStack />
      </NavigationContainer>
    );
  else {
    return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    );
  }
};

AppRegistry.registerComponent('vento', () => App);
export default App;
