import * as React from 'react';
import { useState } from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LogInStack } from './navigation/StackNavigator';
import BottomTabNavigator from './navigation/TabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import {
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';

console.disableYellowBox = true;

const App = () => {
  const [logIn, setLogIn] = useState(true);

  let [fontsLoaded] = useFonts({
    ChakraPetch_300Light,
    ChakraPetch_300Light_Italic,
    ChakraPetch_500Medium,
    ChakraPetch_500Medium_Italic,
    ChakraPetch_700Bold,
    ChakraPetch_700Bold_Italic,
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
  }
};

AppRegistry.registerComponent('vento', () => App);
export default App;
