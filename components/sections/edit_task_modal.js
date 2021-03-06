import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { darkBlue } from '../../StyleVars';
import { FontAwesome5 } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const EditTaskModal = ({ task }) => {
  const [quantity, setQuantity] = useState(task.current);

  function increase() {
    setQuantity((prevQuant) => prevQuant + 1);
  }
  function decrease() {
    setQuantity((prevQuant) => prevQuant + 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.info}>
        <Text style={[styles.title, styles.textColor]}>{task.taskName}</Text>
        <Text style={[styles.quant, styles.textColor]}>
          {quantity}/{task.maxQuantity}
        </Text>
      </View>
      <View style={styles.btn}>
        <Pressable onPress={decrease} style={styles.clickable}>
          <FontAwesome5 name="minus" size={34} color={darkBlue} />
        </Pressable>
        <View style={styles.adjust}>
          <Text style={styles.text}>Adjust Quantity</Text>
          {/* <Slider
            style={{ width: '100%', height: 60 }}
            minimumValue={0}
            maximumValue={task.maxQuantity}
            tapToSeek={true}
            step={5}
            value={quantity}
            minimumTrackTintColor="#00837b"
            maximumTrackTintColor={darkBlue}
            onValueChange={(val) => setQuantity(val)}
          /> */}
        </View>
        <Pressable onPress={increase} style={styles.clickable}>
          <FontAwesome5 name="plus" size={34} color={darkBlue} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    opacity: 1,
    borderRadius: 25,
    padding: 20,
    width: '90%',
    height: 250,
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 45,
    elevation: 20,
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: darkBlue,
  },
  quant: {
    fontSize: 40,
    fontWeight: 'bold',
    color: darkBlue,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 34,
  },
  clickable: {
    backgroundColor: 'red',
    // margin: 10,
  },
  text: {
    color: darkBlue,
    fontSize: 20,
    alignSelf: 'center',
  },
  adjust: {
    // backgroundColor: 'red',
  },
});

export default EditTaskModal;
