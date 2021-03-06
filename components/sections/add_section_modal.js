import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { darkBlue } from '../../StyleVars';

const AddSectionModal = ({ addSection, hideModal }) => {
  const [newSection, setNewSection] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        theme={{
          colors: {
            placeholder: darkBlue,
            text: darkBlue,
            primary: darkBlue,
          },
        }}
        mode="outlined"
        label={'Add a Section to your Kitchen'}
        underlineColor={darkBlue}
        sectionColor={darkBlue}
        onChangeText={(text) => setNewSection(text)}
        value={newSection}
        onSubmitEditing={() => {
          addSection(newSection);
          hideModal();
        }}
      />
      <Button
        color={darkBlue}
        mode="contained"
        onPress={() => {
          addSection(newSection);
          hideModal();
        }}
      >
        Add Section
      </Button>
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
});

export default AddSectionModal;