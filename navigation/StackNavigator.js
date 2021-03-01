import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TaskScreen from '../screens/TaskScreen';
import HomeTasks from '../screens/HomeTasks';
import HomeInventory from '../screens/HomeInventory';
import HomeSetting from '../screens/HomeSetting';
import HomeUser from '../screens/HomeUser';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#f4511e',
    height: 90,
  },
  headerTintColor: '#fff',
  headerBackTitle: 'Back',
};

const InventoryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Inventory"
        component={HomeInventory}
        options={{ title: 'My Inventory' }}
      />
    </Stack.Navigator>
  );
};

const TasksStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Roster" component={HomeTasks} />
      <Stack.Screen name="TaskScreen" component={TaskScreen} />
    </Stack.Navigator>
  );
};

const UserStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="User" component={HomeUser} />
    </Stack.Navigator>
  );
};

const SettingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Setting" component={HomeSetting} />
    </Stack.Navigator>
  );
};

export {
  TasksStackNavigator,
  InventoryStackNavigator,
  UserStackNavigator,
  SettingStackNavigator,
};
