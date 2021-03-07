import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { darkBlue } from '../../StyleVars';

const TaskNotes = ({ info, setNotesModal }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => setNotesModal(true)}>
      <View style={styles.notes}>
        <Text style={[styles.text, styles.head]}>Notes:</Text>
        <Text style={styles.text}>{info}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  notes: {
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 7,
    elevation: 7,
    minHeight: 100,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    color: darkBlue,
    fontSize: 18,
  },
  head: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
});

export default TaskNotes;
