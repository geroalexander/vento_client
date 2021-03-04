import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { useState } from 'react/cjs/react.development';
import { darkBlue } from '../StyleVars';

const StockAddModal = ({ addItem, hideModal }) => {
  const [newItem, setNewItem] = useState({});

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        style={styles.textInput}
        // onChangeText={(text) => setNewItem(text)}
        value={newItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    width: '90%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 30,
  },
  textInput: {
    height: 50,
    width: '100%',
  },
});

export default StockAddModal;
