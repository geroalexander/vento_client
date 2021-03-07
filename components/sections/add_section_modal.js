import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import ApiClient from '../../ApiClient';
import { darkBlue } from '../../StyleVars';

const AddSectionModal = ({ hideModal, handleSection }) => {
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
        label={'Add a section to your kitchen'}
        underlineColor={darkBlue}
        sectionColor={darkBlue}
        onChangeText={(text) => setNewSection(text)}
        value={newSection}
        onSubmitEditing={() => {
          handleSection(newSection);
          hideModal();
        }}
      />
      <Button
        color={darkBlue}
        mode="contained"
        onPress={() => {
          handleSection(newSection);
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
