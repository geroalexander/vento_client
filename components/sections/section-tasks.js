import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import TaskItem from './task-item';

const SectionTasks = ({ taskInfo }) => {
  return (
    <View style={styles.listContainer}>
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
  listContainer: {},
});

export default SectionTasks;
