import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import ApiClient from '../../ApiClient';
import { darkBlue } from '../../StyleVars';
import { Checkbox } from 'react-native-paper';

const UserModal = ({ user }) => {
  const section = [
    '604511798bfaf58c227e4f5a',
    '604510c58bfaf58c227e4f57',
    '6045116c8bfaf58c227e4f59',
    '60450bc88bfaf58c227e4f56',
  ];

  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.text}>Select {user}'s sections</Text>
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
    width: '90%',
    height: 250,
    justifyContent: 'space-between',
    paddingVertical: 45,
    elevation: 20,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default UserModal;
