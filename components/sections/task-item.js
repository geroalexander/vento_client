import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { darkBlue } from '../../StyleVars';
import { ProgressBar, Colors } from 'react-native-paper';

const TaskItem = ({ taskName, maxQuantity, curQuantity, completed }) => {
  const progress = curQuantity / maxQuantity;

  const color = (progress) => {
    if (progress < 0.35) {
      return Colors.red500;
    } else if (progress < 0.75) {
      return Colors.orange500;
    } else {
      return Colors.green500;
    }
  };
  return (
    <View style={styles.taskItem}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{taskName}</Text>
        <Text>
          {curQuantity}/{maxQuantity}
        </Text>
      </View>
      <View style={styles.barContainer}>
        <ProgressBar
          style={styles.progressBar}
          progress={progress}
          color={color(progress)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 15,
    borderRadius: 20,
    width: 220,
  },
  taskItem: {
    margin: 15,

    backgroundColor: '#fff',
    borderRadius: 7,
    // alignItems: 'center',
    padding: 10,
    // backgroundColor: 'white',
    elevation: 7,
    // marginVertical: 10,
    // marginHorizontal: 30,
    // justifyContent: 'center',
    // paddingHorizontal: 20,
  },
  itemInfo: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  barContainer: {
    paddingBottom: 10,
    paddingLeft: 10,
  },
});

export default TaskItem;
//       <ProgressBar progress={progress} color="red" style={styles.progressBar} />
