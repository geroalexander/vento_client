import * as React from 'react';
import { useState } from 'react';
import { darkBlue } from '../StyleVars';
import { Appbar } from 'react-native-paper';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import InvnetoryCircle from '../components/inventory_circle';
import InventoryCircleEmpty from '../components/inventory_circle_empty';
import EditInventoryModal from '../components/edit_inventory_modal';
import AddInventoryModal from '../components/add_inventory_modal';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

const INVENTORY = [
  //   { itemName: 'Beets', quantity: 10 },
  //   { itemName: 'Oranges', quantity: 10 },
  //   { itemName: 'Pinapples', quantity: 10 },
  //   { itemName: 'MushRooms', quantity: 100 },
  //   { itemName: 'Beef', quantity: 100 },
  //   { itemName: 'Apples', quantity: 20 },
  //   { itemName: 'Carrots', quantity: 20 },
  //   { itemName: 'Leek', quantity: 20 },
  //   { itemName: 'Onions', quantity: 20 },
  //   { itemName: 'Garlic', quantity: 20 },
  //   { itemName: 'Peas', quantity: 20 },
  //   { itemName: 'Gambas', quantity: 20 },
  //   { itemName: 'Tomatoes', quantity: 20 },
  //   { itemName: 'Curry', quantity: 20 },
  //   { itemName: 'Rice', quantity: 20 },
  //   { itemName: 'Noodles', quantity: 20 },
  //   { itemName: 'Cauliflower', quantity: 20 },
  //   { itemName: 'Chickpeas', quantity: 20 },
  //   { itemName: 'Something', quantity: 20 },
  //   { itemName: 'Else', quantity: 20 },
  //   { itemName: 'Aswell', quantity: 20 },
  //   { itemName: 'OMG', quantity: 20 },
  // { itemName: 'Running', quantity: 20 },
];

const HomeInventory = ({ navigation }) => {
  const numCols = 3;

  const [data, setData] = useState(INVENTORY);

  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(data.length === 0 ? true : false);
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
    setData(
      data.filter(
        (item) => item.itemName !== name && item.itemName !== 'blank',
      ),
    );
    data.length === 0 ? setAddModal(true) : setAddModal(false);
  };

  const addItem = (name, val) => {
    setData(data.filter((item) => item.itemName !== 'blank'));
    const item = {
      itemName: name,
      quantity: val,
    };
    setData((data) => [...data, item]);
  };

  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Inventory" />
        <Appbar.Action
          icon="plus-circle"
          onPress={() => setAddModal(true)}
          size={30}
        />
      </Appbar.Header>
      <View style={styles.flatListContainer}>
        <FlatList
          data={formatData(data, numCols)}
          keyExtractor={(item) => item.itemName}
          renderItem={({ item }) => {
            if (!item.quantity) {
              return <InventoryCircleEmpty />;
            } else {
              return (
                <InvnetoryCircle
                  itemName={item.itemName}
                  quantity={item.quantity}
                  onPress={() => {
                    setCurrentItem(item);
                    setEditModal(true);
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
        visible={editModal}
        onRequestClose={() => setEditModal(false)}
      >
        <View style={styles.editModal}>
          <EditInventoryModal
            item={currentItem}
            hideModal={() => setEditModal(false)}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        </View>
      </Modal>

      <Modal
        animationType="none"
        transparent={true}
        visible={addModal}
        onRequestClose={() => setAddModal(false)}
      >
        <View style={styles.addModal}>
          <AddInventoryModal
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
    data.push({ itemName: 'blank' });
    numOfElLastRow = numOfElLastRow + 1;
  }

  data.sort((a, b) => b.quantity - a.quantity);
  return data;
};

const styles = StyleSheet.create({
  flatListContainer: {
    marginTop: 20,
    margin: 10,
  },
  editModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  addModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  header: {
    backgroundColor: darkBlue,
  },
});

export default HomeInventory;
