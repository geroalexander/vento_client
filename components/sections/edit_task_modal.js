import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';
import { darkBlue } from '../../StyleVars';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const EditTaskModal = ({ task, hideModal, editTask }) => {
  const [quantity, setQuantity] = useState(task.current);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.info}>
        <Text style={[styles.title, styles.textColor]}>{task.taskName}</Text>
        <Text style={[styles.quant, styles.textColor]}>
          {quantity}/{task.maxQuantity}
        </Text>
      </View>
      <View style={styles.slider}>
        <View style={styles.buttons}>
          <Pressable
            style={[styles.center, styles.button]}
            onPress={() => hideModal()}
          >
            <View style={[styles.center]}>
              <Entypo name="back" size={34} color={darkBlue} />
            </View>
          </Pressable>
          <Text style={styles.text}>Slide to adjust</Text>
          <Pressable
            style={[styles.center, styles.button]}
            onPress={() => {
              editTask(quantity);
              hideModal();
            }}
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
        <Slider
          style={{ width: '100%', height: 50 }}
          minimumValue={0}
          maximumValue={task.maxQuantity}
          tapToSeek={true}
          step={1}
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
    opacity: 1,
    borderRadius: 7,
    padding: 20,
    width: '90%',
    height: 250,
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
  slider: {
    justifyContent: 'center',
    paddingTop: 20,
  },
  text: {
    color: darkBlue,
    fontSize: 20,
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default EditTaskModal;
