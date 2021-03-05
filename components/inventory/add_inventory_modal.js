import * as React from 'react';
import { useState } from 'react/cjs/react.development';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { darkBlue } from '../../StyleVars';
import Slider from '@react-native-community/slider';

const StockAddModal = ({ hideModal, addItem }) => {
  const [newText, setNewText] = useState('');
  const [quantity, setQuantity] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.center, styles.slider]}>
        <Text style={[styles.quant, styles.textColor]}>Add an item</Text>
        <TextInput
          mode="outlined"
          style={[styles.textInput, styles.textColor]}
          placeholder={'Enter an item name'}
          underlineColor={darkBlue}
          sectionColor={darkBlue}
          onChangeText={(text) => setNewText(text)}
          value={newText}
          onSubmitEditing={() => (addItem(newText, quantity), hideModal())}
        />
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
      </View>
    </SafeAreaView>
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
  quant: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '70%',
  },
  textColor: {
    color: darkBlue,
  },
});

export default StockAddModal;
