import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal, Pressable } from 'react-native';
import { darkBlue } from '../../StyleVars';
import { ProgressBar, Colors } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import EditTaskModal from './edit_task_modal';
import CheckBox from '@react-native-community/checkbox';

const TaskItem = ({ taskName, maxQuantity, curQuantity }) => {
  const [taskModal, setTaskModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [current, setCurrent] = useState(curQuantity);
  function progress() {
    return Math.floor((current / maxQuantity) * 100) / 100;
  }

  function color() {
    if (progress() < 0.3) {
      return Colors.red500;
    } else if (progress() < 0.7) {
      return Colors.orange500;
    } else {
      return Colors.green500;
    }
  }

  const editTask = () => {
    () => {};
  };

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
              progress={progress()}
              color={color()}
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
            disabled={false}
            value={checked}
            onValueChange={(newValue) => {
              if (newValue) setCurrent(() => maxQuantity);
              else setCurrent(() => curQuantity);
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
            hideModal={() => {
              setTaskModal(false);
            }}
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
    color: darkBlue,
  },
  itemName: {
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
    paddingVertical: 8,
    paddingHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  edit: {
    marginBottom: 5,
    marginRight: 10,
  },
  editModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default TaskItem;
//       <ProgressBar progress={progress} color="red" style={styles.progressBar} />
