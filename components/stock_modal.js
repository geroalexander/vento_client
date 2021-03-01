import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';

import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const StockModal = ({ hideModal, item, updateItem, deleteItem }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.center, styles.slider]}>
        <Text style={styles.title}>{item.itemName}</Text>
        <Text style={styles.quant}>{quantity + '%'}</Text>
        <Slider
          style={{ width: '100%', height: 60 }}
          minimumValue={0}
          maximumValue={100}
          tapToSeek={true}
          step={5}
          value={quantity}
          minimumTrackTintColor="green"
          maximumTrackTintColor="black"
          onValueChange={(val) => setQuantity(val)}
        />
        <View style={styles.row}>
          <Pressable
            style={[styles.center, styles.button]}
            onPress={() => hideModal()}
          >
            <View style={[styles.center]}>
              <Entypo name="back" size={34} color="black" />
              <Text>GoBack</Text>
            </View>
          </Pressable>

          <Pressable
            style={[styles.center, styles.button]}
            onPress={() => (updateItem(item.itemName, quantity), hideModal())}
          >
            <View style={[styles.center]}>
              <Ionicons name="checkmark-circle-sharp" size={34} color="green" />
              <Text>Update</Text>
            </View>
          </Pressable>

          <Pressable
            style={[styles.center, styles.button]}
            onPress={() => (deleteItem(item.itemName), hideModal())}
          >
            <View style={[styles.center]}>
              <Foundation name="trash" size={34} color="red" />
              <Text>Delete</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
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
  button: {
    height: 50,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  backBtn: {
    color: 'yellow',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  quant: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slider: {
    width: '70%',
  },
});

export default StockModal;
