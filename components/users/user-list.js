import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Modal,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { darkBlue } from '../../StyleVars';
import { FontAwesome } from '@expo/vector-icons';
import UserModal from './user-modal';

const UserList = ({ userName, userID, sectionIDs, editUser }) => {
  const [userModal, setUserModal] = useState(false);

  return (
    <>
      <TouchableOpacity activeOpacity={0.7} onPress={() => setUserModal(true)}>
        <SafeAreaView style={styles.container}>
          <View style={styles.userInfoRow}>
            <FontAwesome
              style={styles.icon}
              name="user-circle-o"
              size={24}
              color={darkBlue}
            />
            <Text style={styles.textName}>{userName}</Text>
          </View>
        </SafeAreaView>
      </TouchableOpacity>

      <Modal
        animationType="none"
        transparent={true}
        visible={userModal}
        onRequestClose={() => setUserModal(false)}
      >
        <View style={styles.userModal}>
          <UserModal
            hideModal={() => setUserModal(false)}
            editUserSections={editUser}
            userName={userName}
            userID={userID}
            sectionIDs={sectionIDs}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textName: {
    color: darkBlue,
    fontSize: 26,
    fontWeight: 'bold',
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    padding: 25,
  },
  icon: {
    paddingRight: 25,
  },
  userModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default UserList;
