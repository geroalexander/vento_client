import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import TaskItem from './task-item';

const SectionTasks = ({ taskInfo }) => {
  console.log('----start-------');
  console.log(typeof taskInfo);
  console.log(taskInfo);
  taskInfo.forEach((task) => {
    console.log(task.taskName);
  });
  console.log('-----end------');

  // TODO: Implement rendering of tasks.

  return (
    <View style={styles.list}>
      <FlatList
        data={taskInfo}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TaskItem
            taskName={item.taskName}
            maxQuantity={item.maxQuantity}
            curQuantity={item.curQuantity}
            completed={item.completed}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'blue',
  },
});

export default SectionTasks;
