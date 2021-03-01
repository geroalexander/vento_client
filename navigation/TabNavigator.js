import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import {
  TasksStackNavigator,
  InventoryStackNavigator,
  UserStackNavigator,
  SettingStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inventory"
      tabBarOptions={{
        activeTintColor: '#f4511e',
      }}
    >
      <Tab.Screen
        name="Inventory"
        component={InventoryStackNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 name="box-open" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={TasksStackNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="calendar-text"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={UserStackNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 name="users" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStackNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="cog" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
