import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal, Pressable } from 'react-native';
import { darkBlue } from '../../StyleVars';
import { ProgressBar, Colors } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import EditTaskModal from './edit_task_modal';
import CheckBox from '@react-native-community/checkbox';
import { useEffect } from 'react';

const TaskItem = ({ taskName, maxQuantity, curQuantity }) => {
  const [taskModal, setTaskModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [current, setCurrent] = useState(curQuantity);
  const [progression, setProgression] = useState(curQuantity / maxQuantity);

  // useEffect(() => {
  //   setProgression(() => Math.floor((current / maxQuantity) * 100) / 100);
  // }, [current]);

  let color;
  if (progression < 0.3) {
    color = Colors.red500;
  } else if (progression < 0.7) {
    color = Colors.orange500;
  } else {
    color = Colors.green500;
  }

  const editTask = (quantity) => {
    setProgression(quantity / maxQuantity);
    setCurrent(quantity);
  };

  // const handleAdjust = () => {};

  return (
    <>
      <View style={styles.taskItem}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{taskName}</Text>
          <Text style={styles.unit}>
            {current}/{maxQuantity}
          </Text>
        </View>
        <View style={styles.progressEdit}>
          <View style={styles.barContainer}>
            <ProgressBar
              style={styles.progressBar}
              progress={progression}
              color={color}
            />
          </View>
          <Pressable onPress={() => setTaskModal(true)}>
            <Feather
              style={styles.edit}
              name="edit"
              size={28}
              color={darkBlue}
            />
          </Pressable>
          <CheckBox
            style={styles.checkbox}
            disabled={false}
            value={checked}
            onValueChange={(newValue) => {
              console.log('new Valu', newValue);
              if (newValue) {
                setProgression(1);
                setCurrent(() => maxQuantity);
              } else {
                setProgression(() => curQuantity / maxQuantity);
                setCurrent(() => curQuantity);
              }
              setChecked(newValue);
            }}
          />
        </View>
      </View>

      <Modal
        animationType="none"
        transparent={true}
        visible={taskModal}
        onRequestClose={() => setTaskModal(false)}
      >
        <View style={styles.editModal}>
          <EditTaskModal
            hideModal={() => setTaskModal(false)}
            editTask={editTask}
            task={{ taskName, maxQuantity, current }}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 15,
    borderRadius: 20,
    width: 235,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskItem: {
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 10,
    elevation: 7,
  },
  itemInfo: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 5,
  },
  itemName: {
    color: darkBlue,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 6,
    paddingTop: 3,
  },
  barContainer: {
    paddingBottom: 10,
    paddingLeft: 10,
  },
  progressEdit: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  unit: {
    color: darkBlue,
    paddingVertical: 8,
    paddingHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  edit: {
    marginBottom: 5,
  },
  editModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  checkbox: {
    right: 7,
    bottom: 1,
  },
});

export default TaskItem;
