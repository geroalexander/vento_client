import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, FlatList, Modal } from 'react-native';
import { Appbar } from 'react-native-paper';
import { darkBlue } from '../StyleVars';
import UserList from '../components/users/user-list';
import AddUserModal from '../components/users/add-user-modal';

const team = [
  {
    _id: '2314312341341342',
    name: 'George',
    email: 'george@example.com',
    password: '12341234',
    kitchenID: '604399f6f7687f4485fef0c2',
    sectionID: ['60450bc88bfaf58c227e4f56', '604510c58bfaf58c227e4f57'],
  },
  {
    _id: '8769876987698768976',
    name: 'Maxi',
    email: 'maxi@example.com',
    password: '12341234',
    kitchenID: '604399f6f7687f4485fef0c2',
    sectionID: ['6045116c8bfaf58c227e4f59', '604510c58bfaf58c227e4f57'],
  },
  {
    _id: '7865876587658765',
    name: 'Ale',
    email: 'ale@example.com',
    password: '12341234',
    kitchenID: '604399f6f7687f4485fef0c2',
    sectionID: ['604511798bfaf58c227e4f5a'],
  },
];

const HomeUser = () => {
  const editUser = () => {
    console.log('editing');
  };

  const addUser = () => {
    console.log('adduser');
  };

  const [addUserModal, setAddUserModal] = useState(false);

  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Team" />
        <Appbar.Action
          icon="account-plus"
          onPress={() => setAddUserModal(true)}
          size={30}
        />
      </Appbar.Header>

      <View style={styles.flatlist}>
        <FlatList
          data={team}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <UserList
              userID={item._id}
              sectionIDs={[item.sectionID]}
              userName={item.name}
              editUser={editUser}
            />
          )}
          // numColumns={2}
        />
      </View>
      <Modal
        animationType="none"
        transparent={true}
        visible={addUserModal}
        onRequestClose={() => setAddUserModal(false)}
      >
        <View style={styles.userModal}>
          <AddUserModal
            hideModal={() => setAddUserModal(false)}
            editUserSections={addUser}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: darkBlue,
  },
  flatlist: {
    flex: 1,
    margin: 10,
  },
  userModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default HomeUser;
