import * as React from 'react';
import { useState } from 'react/cjs/react.development';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { darkBlue } from '../../StyleVars';
import Slider from '@react-native-community/slider';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const StockAddModal = ({ hideModal, addItem }) => {
  const [newText, setNewText] = useState('');
  const [quantity, setQuantity] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.center, styles.slider]}>
        <Text style={[styles.quant, styles.textColor]}>Add an item</Text>
        <TextInput
          theme={{
            colors: {
              placeholder: darkBlue,
              text: darkBlue,
              primary: darkBlue,
            },
          }}
          mode="outlined"
          style={[styles.textInput, styles.textColor]}
          label={'Enter an item'}
          underlineColor={darkBlue}
          sectionColor={darkBlue}
          onChangeText={(text) => setNewText(text)}
          value={newText}
          onSubmitEditing={() => (addItem(newText, quantity), hideModal())}
        />
        <Text style={[styles.quant, styles.textColor]}>{quantity + '%'}</Text>

        <View style={styles.row}>
          <Pressable
            style={[styles.center, styles.button]}
            onPress={() => hideModal()}
          >
            <View style={[styles.center]}>
              <Entypo name="back" size={34} color={darkBlue} />
            </View>
          </Pressable>
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
          <Pressable
            style={[styles.center, styles.button]}
            onPress={() => (addItem(newText, quantity), hideModal())}
          >
            <View style={[styles.center]}>
              <Ionicons
                name="checkmark-circle-sharp"
                size={36}
                color={darkBlue}
              />
            </View>
          </Pressable>
        </View>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: 50,
    paddingHorizontal: 10,
    marginHorizontal: 0,
    borderRadius: 15,
  },
});

export default StockAddModal;
