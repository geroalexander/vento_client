import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const SectionView = ({ taskInfo }) => {
  console.log('----start-------');
  console.log(typeof taskInfo);
  console.log(taskInfo);
  taskInfo.forEach((task) => {
    console.log(task.taskName);
  });
  console.log('-----end------');
  return <View>{/* <Text>{taskInfo.taskName}</Text> */}</View>;
};

export default SectionView;
