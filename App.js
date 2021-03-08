import * as React from 'react';
import { useState } from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LogInStack } from './navigation/StackNavigator';
import BottomTabNavigator from './navigation/TabNavigator';

const App = () => {
  const DrillDown = React.createContext();

  const [logIn, setLogIn] = useState(true);

  if (!logIn)
    return (
      <DrillDown.Provider value={() => setLogIn}>
        <NavigationContainer>
          <LogInStack />
        </NavigationContainer>
      </DrillDown.Provider>
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
