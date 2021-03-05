import * as React from 'react';
import { useState } from 'react';
import { darkBlue } from '../StyleVars';
import { Appbar } from 'react-native-paper';
import { View, StyleSheet, FlatList, Modal } from 'react-native';
import InvnetoryCircle from '../components/inventory/inventory_circle';
import InventoryCircleEmpty from '../components/inventory/inventory_circle_empty';
import EditInventoryModal from '../components/inventory/edit_inventory_modal';
import AddInventoryModal from '../components/inventory/add_inventory_modal';

const INVENTORY = [
  //   { _id: 01, itemName: 'Oranges', quantity: 10 },
  //   { _id: 02, itemName: 'Pinapples', quantity: 10 },
  //   { _id: 03, itemName: 'MushRooms', quantity: 100 },
  //   { _id: 04, itemName: 'Beef', quantity: 100 },
  //   { _id: 05, itemName: 'Apples', quantity: 20 },
  //   { _id: 07, itemName: 'Carrots', quantity: 20 },
  //   { _id: 08, itemName: 'Leek', quantity: 20 },
  //   { _id: 09, itemName: 'Onions', quantity: 20 },
  //   { _id: 10, itemName: 'Garlic', quantity: 20 },
  //   { _id: 11, itemName: 'Peas', quantity: 20 },
  //   { _id: 12, itemName: 'Gambas', quantity: 20 },
  //   { _id: 13, itemName: 'Tomatoes', quantity: 20 },
  //   { _id: 14, itemName: 'Curry', quantity: 20 },
  //   { _id: 15, itemName: 'Rice', quantity: 20 },
  //   { _id: 16, itemName: 'Noodles', quantity: 20 },
  //   { _id: 17, itemName: 'Beets', quantity: 10 },
  //   { _id: 18, itemName: 'Cauliflower', quantity: 20 },
  //   { _id: 19, itemName: 'Chickpeas', quantity: 20 },
  //   { _id: 21, itemName: 'Something', quantity: 20 },
  //   { _id: 22, itemName: 'Else', quantity: 20 },
  //   { _id: 23, itemName: 'Aswell', quantity: 20 },
  //   { _id: 24, itemName: 'OMG', quantity: 20 },
  //   { _id: 25, itemName: 'Running', quantity: 20 },
];

const HomeInventory = ({ navigation }) => {
  const numCols = 3;

  const [data, setData] = useState(INVENTORY);

  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  // adjust to work with _id
  const updateItem = (name, val) => {
    const copy = [...data];
    copy.forEach((obj) => {
      if (obj.itemName === name) {
        obj.quantity = val;
      }
    });
  };

  // adjust to work with _id
  const deleteItem = (name) => {
    setData((oldInventory) =>
      oldInventory.filter(
        (item) => item.itemName !== name && item.itemName !== 'blank',
      ),
    );
  };

  // adjust to work with _id
  const addItem = (name, val) => {
    setData(data.filter((item) => item.itemName !== 'blank'));
    const item = {
      itemName: name,
      quantity: val,
    };
    setData((oldInventory) => [...oldInventory, item]);
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
          // adjust to work with _id
          keyExtractor={(item) => item.itemName}
          renderItem={({ item }) => {
            if (!item.quantity && item.itemName === 'blank') {
              return <InventoryCircleEmpty />;
            } else {
              return (
                <InvnetoryCircle
                  // adjust to work with _id
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
  // adjust to work with _id

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
