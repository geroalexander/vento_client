import ApiClient from '../ApiClient';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { darkBlue } from '../StyleVars';
import { Appbar } from 'react-native-paper';
import { View, StyleSheet, FlatList, Modal } from 'react-native';
import InvnetoryCircle from '../components/inventory/inventory_circle';
import InventoryCircleEmpty from '../components/inventory/inventory_circle_empty';
import EditInventoryModal from '../components/inventory/edit_inventory_modal';
import AddInventoryModal from '../components/inventory/add_inventory_modal';

const HomeInventory = ({ navigation }) => {
  const [inventory, setInventory] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  //SHOULD COME FROM USER>KITCHENID
  const kitchenID = '6046baec82b506db2b891c04';
  useEffect(() => {
    ApiClient.getKitchenInventory(kitchenID).then((data) =>
      setInventory(data.inventory),
    );
    if (inventory.length === 0) setAddModal(true);
  }, []);

  const numCols = 3;

  // adjust to work with _id
  const updateItem = (name, val) => {
    const copy = [...inventory];
    copy.forEach((obj) => {
      if (obj.itemName === name) {
        obj.itemQuantity = val;
      }
    });
    // ApiClient.addInventoryItem(name, val, kitchenID).then((data) =>
    //   setInventory(data.inventory),
    // );
  };

  // adjust to work with _id
  const deleteItem = (name) => {
    setInventory((oldInventory) =>
      oldInventory.filter(
        (item) => item.itemName !== name && item.itemName !== 'blank',
      ),
    );
  };

  // adjust to work with _id
  const addItem = (name, val) => {
    setInventory(inventory.filter((item) => item.itemName !== 'blank'));
    const item = {
      itemName: name,
      itemQuantity: val,
    };
    setInventory((oldInventory) => [...oldInventory, item]);
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
          data={formatData(inventory, numCols)}
          // adjust to work with _id
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            if (!item.quantity && item.itemName === 'blank') {
              return <InventoryCircleEmpty />;
            } else {
              return (
                <InvnetoryCircle
                  // adjust to work with _id
                  itemName={item.itemName}
                  quantity={item.itemQuantity}
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

  data.sort((a, b) => b.itemQuantity - a.itemQuantity);
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
