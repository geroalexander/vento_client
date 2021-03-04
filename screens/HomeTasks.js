import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { darkBlue } from '../StyleVars';

const HomeTasks = ({ navigation }) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.header}>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="Tasks" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: darkBlue,
  },
});

export default HomeTasks;
