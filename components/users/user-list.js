import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Modal,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { darkBlue } from '../../StyleVars';
import { FontAwesome } from '@expo/vector-icons';
import UserModal from './user-modal';

const UserList = ({ userName, userID, sectionIDs, editUser, userImg }) => {
  const [userModal, setUserModal] = useState(false);

  return (
    <>
      <TouchableOpacity activeOpacity={0.7} onPress={() => setUserModal(true)}>
        <SafeAreaView style={styles.container}>
          <View style={styles.user}>
            {userImg ? (
              <Image source={userImg} style={styles.img} />
            ) : (
              <FontAwesome
                style={styles.icon}
                name="user-circle-o"
                size={24}
                color={darkBlue}
              />
            )}

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
    alignContent: 'center',
    paddingHorizontal: 39,
  },
  textName: {
    color: darkBlue,
    fontSize: 24,
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
  img: {
    height: 90,
    width: 90,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  user: {
    margin: 10,
    marginTop: 25,
    height: 150,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default UserList;
