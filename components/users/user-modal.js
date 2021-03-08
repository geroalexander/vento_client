import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import ApiClient from '../../ApiClient';
import { darkBlue } from '../../StyleVars';
import { Checkbox } from 'react-native-paper';

const UserModal = ({ user }) => {
  const section = [
    { _id: '6045ef40bbabddad9f882ebe', sectionName: 'Grill' },
    { _id: '6045ef5bbbabddad9f882ebf', sectionName: 'Fryer' },
  ];

  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.text}>Select {user}'s sections</Text>
        <View style={styles.flatlist}>
          <FlatList
            data={section}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.sectionCheck}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>{item.sectionName}</Text>
              </View>
            )}
          />
        </View>
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
  sectionCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatlist: {
    width: '90%',
    justifyContent: 'space-between',
  },
});

export default UserModal;
