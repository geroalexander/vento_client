import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';

import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { darkBlue } from '../StyleVars';

const StockModal = ({ hideModal, item, updateItem, deleteItem }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.center, styles.slider]}>
        <Text style={[styles.title, styles.textColor]}>{item.itemName}</Text>
        <Text style={[styles.quant, styles.textColor]}>{quantity + '%'}</Text>
        <Slider
          style={{ width: '100%', height: 60 }}
          minimumValue={0}
          maximumValue={100}
          tapToSeek={true}
          step={5}
          value={quantity}
          minimumTrackTintColor="#00837b"
          maximumTrackTintColor={darkBlue}
          onValueChange={(val) => setQuantity(val)}
        />
        <View style={styles.row}>
          <Pressable
            style={[styles.center, styles.button]}
            onPress={() => hideModal()}
          >
            <View style={[styles.center]}>
              <Entypo name="back" size={34} color={darkBlue} />
            </View>
          </Pressable>

          <Pressable
            style={[styles.center, styles.button]}
            onPress={() => (updateItem(item.itemName, quantity), hideModal())}
          >
            <View style={[styles.center]}>
              <Ionicons
                name="checkmark-circle-sharp"
                size={36}
                color={darkBlue}
              />
            </View>
          </Pressable>

          <Pressable
            style={[styles.center, styles.button]}
            onPress={() => (deleteItem(item.itemName), hideModal())}
          >
            <View style={[styles.center]}>
              <Foundation name="trash" size={34} color={darkBlue} />
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

//007f77
//007e83
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    opacity: 1,
    borderRadius: 25,
    padding: 20,
    width: '90%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
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
  textColor: {
    color: darkBlue,
  },
});

export default StockModal;
