import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { List } from 'react-native-paper';

const TaskItem = ({ taskName, maxQuantity, curQuantity, completed }) => (
  <View style={styles.task}>
    <Text>{taskName}</Text>
    <Text>{maxQuantity}</Text>
    <Text>{curQuantity}</Text>
    <Text>{completed.toString()}</Text>
  </View>
);

const styles = StyleSheet.create({
  task: {
    backgroundColor: 'red',
    margin: 10,
  },
});

export default TaskItem;
