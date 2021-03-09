import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { darkBlue } from '../StyleVars';

import HomeSections from '../screens/HomeSections';
import HomeInventory from '../screens/HomeInventory';
import HomeUser from '../screens/HomeUser';
import Select from '../screens/Select';
import Admin from '../screens/Admin';
import Employee from '../screens/Employee';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: darkBlue,
    height: 90,
  },
  alignItems: 'center',
  justifyContent: 'center',
  headerTintColor: '#fff',
  headerBackTitle: 'Back',
};

const LogInStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Employee or Owner"
        component={Select}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Employee"
        component={Employee}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const SectionsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Roster"
        component={HomeSections}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const InventoryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Inventory"
        component={HomeInventory}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const UserStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="User"
        component={HomeUser}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// const SettingStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen
//         name="Setting"
//         component={LoadingAnimation}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

export {
  SectionsStackNavigator,
  InventoryStackNavigator,
  UserStackNavigator,
  // SettingStackNavigator,
  LogInStack,
};
