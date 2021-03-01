import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import StockCircle from '../components/stock_circle';
import StockCircleEmpty from '../components/stock_circle_empty';
import StockModal from '../components/stock_modal';
import StockAddModal from '../components/stock_add_modal';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

const INVENTORY = [
  { itemName: 'Beets', quantity: 10 },
  { itemName: 'Oranges', quantity: 10 },
  { itemName: 'Pinapples', quantity: 10 },
  { itemName: 'MushRooms', quantity: 100 },
  { itemName: 'Beef', quantity: 100 },
  { itemName: 'Apples', quantity: 20 },
  { itemName: 'Carrots', quantity: 20 },
  { itemName: 'Leek', quantity: 20 },
  { itemName: 'Onions', quantity: 20 },
  { itemName: 'Garlic', quantity: 20 },
  { itemName: 'Peas', quantity: 20 },
  { itemName: 'Gambas', quantity: 20 },
  { itemName: 'Tomatoes', quantity: 20 },
  { itemName: 'Curry', quantity: 20 },
  { itemName: 'Rice', quantity: 20 },
  { itemName: 'Noodles', quantity: 20 },
  { itemName: 'Cauliflower', quantity: 20 },
  { itemName: 'Chickpeas', quantity: 20 },
  { itemName: 'Something', quantity: 20 },
  { itemName: 'Else', quantity: 20 },
  { itemName: 'Aswell', quantity: 20 },
  { itemName: 'OMG', quantity: 20 },
  { itemName: 'Running', quantity: 20 },
];

const HomeInventory = ({ navigation }) => {
  const numCols = 3;

  const [data, setData] = useState(INVENTORY);
  const [stockModal, setStockModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const updateItem = (name, val) => {
    const copy = [...data];

    copy.forEach((obj) => {
      if (obj.itemName === name) {
        obj.quantity = val;
      }
    });
  };

  const deleteItem = (name) => {
    setData(data.filter((item) => item.itemName !== name));
  };

  const addItem = () => {
    setData();
  };

  return (
    <>
      <View style={styles.flatListContainer}>
        <View style={[styles.featContainer, styles.center]}>
          <TouchableOpacity style={styles.addBtn}>
            <Icon name="add" size={50} color="#fff" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={formatData(data, numCols)}
          keyExtractor={(item) => item.itemName}
          renderItem={({ item }) => {
            if (item.quantity === false) {
              return <StockCircleEmpty />;
            } else {
              return (
                <StockCircle
                  itemName={item.itemName}
                  quantity={item.quantity}
                  onPress={() => {
                    setCurrentItem(item);
                    setStockModal(true);
                  }}
                />
              );
            }
          }}
          numColumns={numCols}
          horizontal={false}
        />
      </View>

      <Modal
        animationType="none"
        transparent={true}
        visible={stockModal}
        onRequestClose={() => setStockModal(false)}
      >
        <View style={[styles.stockModal, styles.center]}>
          <StockModal
            item={currentItem}
            hideModal={() => setStockModal(false)}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={addModal}
        onRequestClose={() => setAddModal(false)}
      >
        <View style={[styles.stockModal, styles.center]}>
          <StockAddModal
            hideModal={() => setAddModal(false)}
            addItem={addItem}
          />
        </View>
      </Modal>
    </>
  );
};

const formatData = (data, numCols) => {
  const numOfFullRows = Math.floor(data.length / numCols);

  let numOfElLastRow = data.length - numOfFullRows * numCols;
  while (numOfElLastRow !== numCols && numOfElLastRow !== 0) {
    data.push({ itemName: `blank-${numOfElLastRow}`, quantity: false });
    numOfElLastRow = numOfElLastRow + 1;
  }

  data.sort((a, b) => b.quantity - a.quantity);
  return data;
};

const styles = StyleSheet.create({
  flatListContainer: {
    marginTop: 20,
    margin: 10,
    // paddingTop: 10,
  },
  addBtn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#f4511e',
    borderRadius: 100,
    elevation: 10,
  },
  stockModal: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  featContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: '18%',
    width: '33.4%',
    zIndex: 1,
  },
});

export default HomeInventory;
