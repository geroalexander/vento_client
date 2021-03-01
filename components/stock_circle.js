import React, { useState } from 'react';
import ProgressCircle from 'react-native-progress-circle';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const StockCircle = ({ itemName, quantity, onPress }) => {
  const color = (quantity) => {
    if (quantity < 35) {
      return 'red';
    } else if (quantity < 75) {
      return 'orange';
    } else {
      return 'green';
    }
  };

  return (
    <TouchableOpacity
      style={styles.center}
      onPress={onPress}
      activeOpacity={0.95}
    >
      <ProgressCircle
        percent={quantity}
        radius={45}
        borderWidth={10}
        color={color(quantity)}
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text style={{ fontSize: 22 }}>{quantity + '%'}</Text>
      </ProgressCircle>
      <Text style={{ fontSize: 18 }}>{itemName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 20,
  },
});
export default StockCircle;
