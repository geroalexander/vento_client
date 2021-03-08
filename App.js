import * as React from 'react';
import { useState } from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LogInStack } from './navigation/StackNavigator';
import BottomTabNavigator from './navigation/TabNavigator';
import { AsyncStorage } from 'react-native';

const App = () => {
  const [logIn, setLogIn] = useState(true);

  const _storeData = async () => {
    try {
      await AsyncStorage.setItem('setLogIn', setLogIn);
    } catch (error) {
      console.log(error);
    }
  };

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
