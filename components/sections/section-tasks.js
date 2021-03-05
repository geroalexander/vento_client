import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TaskItem from './task-item';

const SectionTasks = ({ taskInfo }) => {
  return (
    <View style={styles.taskList}>
      <FlatList
        data={formatData(taskInfo)}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TaskItem
            taskName={item.taskName}
            maxQuantity={item.maxQuantity}
            curQuantity={item.curQuantity}
            completed={item.completed}
            units={item.units}
          />
        )}
      />
    </View>
  );
};

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
});

export default SectionTasks;
