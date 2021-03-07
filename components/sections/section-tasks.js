import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Modal } from 'react-native';
import ApiClient from '../../ApiClient';

import TaskItem from './task-item';
import { TextInput, Button } from 'react-native-paper';
import { darkBlue } from '../../StyleVars';
import TaskNotes from './task-notes';
import { useEffect } from 'react/cjs/react.development';

const SectionTasks = ({ section }) => {
  const [addModal, setAddModal] = useState(false);
  const [notes, setNotes] = useState(section.notes);

  const handleNotes = () => {
    ApiClient.updateNotes(section._id, notes).then((data) => {
      // console.log('data---->', data);
      setNotes(data.notes);
    });
  };

  if (section) {
    return (
      <View style={styles.taskList}>
        <FlatList
          ListFooterComponent={() => (
            <TaskNotes setAddModal={setAddModal} info={notes} />
          )}
          data={section.tasks}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TaskItem
              taskName={item.taskName}
              maxQuantity={item.maxQuantity}
              curQuantity={item.curQuantity}
              completed={item.completed}
              units={item.units}
              format={() => formatData()}
            />
          )}
        />
        <Modal
          animationType="none"
          transparent={true}
          visible={addModal}
          onRequestClose={() => setAddModal(false)}
        >
          <View style={styles.addModal}>
            <View style={styles.container}>
              <Text style={styles.text}>Notes:</Text>
              <TextInput
                theme={{
                  colors: {
                    placeholder: darkBlue,
                    text: darkBlue,
                    primary: darkBlue,
                  },
                }}
                style={{ height: 120, marginVertical: 20 }}
                mode="outlined"
                label={'Add notes'}
                multiline={true}
                underlineColor={darkBlue}
                sectionColor={darkBlue}
                onChangeText={(text) => setNotes(text)}
                value={notes}
                onSubmitEditing={() => {
                  handleNotes();
                  setAddModal(false);
                }}
              />
              <Button
                color={darkBlue}
                mode="contained"
                onPress={() => {
                  handleNotes();
                  setAddModal(() => false);
                }}
              >
                Save
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  return null;
};

// for ordering list!
const formatData = (taskInfo) => {
  taskInfo.sort(
    (a, b) => b.curQuantity / b.maxQuantity - a.curQuantity / a.maxQuantity,
  );
  return taskInfo;
};

const styles = StyleSheet.create({
  taskList: {},
  listContainer: {
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 25,
    borderColor: 'gray',
    elevation: 10,
  },
  taskItem: {
    borderColor: 'black',
  },
  addModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    backgroundColor: '#fff',
    opacity: 1,
    borderRadius: 7,
    padding: 20,
    width: '90%',
    height: 320,
    justifyContent: 'space-between',
    paddingVertical: 45,
    elevation: 20,
  },
  text: {
    color: darkBlue,
    fontSize: 20,
  },
});

export default SectionTasks;
