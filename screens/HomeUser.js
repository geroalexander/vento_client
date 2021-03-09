import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Modal,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { darkBlue } from '../StyleVars';
import UserList from '../components/users/user-list';
import AddUserModal from '../components/users/add-user-modal';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import willem from '../assets/will.png';
import ale from '../assets/ale.png';
import jon from '../assets/jon.png';
import erik from '../assets/erik.png';

const team = [
  {
    _id: '2314312341341342',
    name: 'Johnny',
    email: 'george@example.com',
    password: '12341234',
    kitchenID: '604399f6f7687f4485fef0c2',
    sectionID: ['60450bc88bfaf58c227e4f56', '604510c58bfaf58c227e4f57'],
    img: jon,
  },
  {
    _id: '8769876987698768976',
    name: 'Maxi',
    email: 'maxi@example.com',
    password: '12341234',
    kitchenID: '604399f6f7687f4485fef0c2',
    sectionID: ['6045116c8bfaf58c227e4f59', '604510c58bfaf58c227e4f57'],
    img: willem,
  },
  {
    _id: '7865876587658765',
    name: 'Ale',
    email: 'ale@example.com',
    password: '12341234',
    kitchenID: '604399f6f7687f4485fef0c2',
    sectionID: ['604511798bfaf58c227e4f5a'],
    img: ale,
  },
  {
    _id: '786587afaf7658765',
    name: 'Otto',
    email: 'otto@example.com',
    password: '12341234',
    kitchenID: '604399f6f7687f4485fef0c2',
    sectionID: ['604511798bfaf58c227e4f5a'],
    img: erik,
  },
  // {
  //   _id: '121212142435',
  //   name: 'Justus',
  //   email: 'ale@example.com',
  //   password: '12341234',
  //   kitchenID: '604399f6f7687f4485fef0c2',
  //   sectionID: ['604511798bfaf58c227e4f5a'],
  // },
  // {
  //   _id: '523526262323',
  //   name: 'Freddie',
  //   email: 'ale@example.com',
  //   password: '12341234',
  //   kitchenID: '604399f6f7687f4485fef0c2',
  //   sectionID: ['604511798bfaf58c227e4f5a'],
  // },
];

const HomeUser = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const editUser = () => {
    console.log('editing');
  };

  const addUser = (name, email) => {
    team.push({ _id: '123431', name: name, email: email });
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
      <View style={styles.user}>
        <TouchableOpacity onPress={pickImage}>
          {!image ? (
            <View style={styles.img}>
              <FontAwesome name="camera" size={24} color="black" />
            </View>
          ) : (
            <Image source={{ uri: image }} style={styles.img} />
          )}
        </TouchableOpacity>
        <Text style={styles.text}>Gero</Text>
      </View>

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
              userImg={item.img}
            />
          )}
          numColumns={2}
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
            addUser={addUser}
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
    marginTop: 20,
    margin: 10,
  },
  userModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  user: {
    margin: 10,
    marginTop: 25,
    height: 150,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  img: {
    height: 90,
    width: 90,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  text: {
    fontSize: 24,
    color: darkBlue,
    fontWeight: 'bold',
  },
});

export default HomeUser;
