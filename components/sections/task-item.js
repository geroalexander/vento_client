import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { List, ProgressBar, Colors } from 'react-native-paper';
import { darkBlue } from '../../StyleVars';

const TaskItem = ({ taskName, maxQuantity, curQuantity, completed }) => {
  const progress = (maxQuantity, curQuantity) => {
    return curQuantity / maxQuantity;
  };

  const color = (quantity) => {
    if (quantity < 0.35) {
      return Colors.red500;
    } else if (quantity < 0.75) {
      return Colors.orange500;
    } else {
      return Colors.green500;
    }
  };
  return (
    <View style={styles.taskContainer}>
      <Text>{taskName}</Text>
      <Text>{curQuantity}</Text>
      <ProgressBar
        progress={progress(maxQuantity, curQuantity)}
        color={color(progress(maxQuantity, curQuantity))}
        style={{ borderRadius: 20, height: 15, width: '90%' }}
      />
      <Text>{maxQuantity}</Text>
      <Text>{completed.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginTop: 15,
    borderRadius: 25,
    borderColor: 'gray',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TaskItem;
