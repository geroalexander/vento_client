import React from 'react';
import ProgressCircle from 'react-native-progress-circle';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const StockCircleEmpty = () => {
  return (
    <View style={styles.center}>
      <ProgressCircle
        percent={0}
        radius={50}
        borderWidth={12}
        color="transparent"
        shadowColor="transparent"
        bgColor="transparent"
      />
      <Text style={{ fontSize: 18, color: 'transparent' }}>text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 14,
  },
});
export default StockCircleEmpty;
