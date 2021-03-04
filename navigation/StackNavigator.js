import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialIcons } from '@expo/vector-icons';
import { darkBlue } from '../StyleVars';

import TaskScreen from '../screens/TaskScreen';
import HomeTasks from '../screens/HomeTasks';
import HomeInventory from '../screens/HomeInventory';
import HomeSetting from '../screens/HomeSetting';
import HomeUser from '../screens/HomeUser';

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

const TasksStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Roster"
        component={HomeTasks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TaskScreen"
        component={TaskScreen}
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

const SettingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Setting"
        component={HomeSetting}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export {
  TasksStackNavigator,
  InventoryStackNavigator,
  UserStackNavigator,
  SettingStackNavigator,
};
