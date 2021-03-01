import React from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
} from 'react-native';
import { useState } from 'react/cjs/react.development';

const StockAddModal = ({ addItem, hideModal }) => {
  const [newItem, setNewItem] = useState({});

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text) => setNewItem(text)}
      value={newItem}
    />
    // <SafeAreaView style={styles.container}>
    //   <View style={styles.center}>
    //     <Text>THIS IS THE ADD MODAL!</Text>
    //   </View>

    //   <Pressable onPress={() => hideModal()}>
    //     <Text>GoBack</Text>
    //   </Pressable>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6e8c7',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    width: '90%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StockAddModal;
