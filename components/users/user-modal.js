import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Switch,
  Pressable,
} from 'react-native';
import { darkBlue } from '../../StyleVars';
import { Ionicons } from '@expo/vector-icons';

const UserModal = ({
  userName,
  sectionIDs,
  userID,
  hideModal,
  editUserSections,
}) => {
  const section = [
    { _id: '6045ef40bbabddad9f882ebe', sectionName: 'Rotisseur' },
    { _id: '6045ef5bbbabddad9f882ebf', sectionName: 'Patissier' },
    { _id: '6045ef5bbbabddad9f882efe', sectionName: 'Entremetier' },
    { _id: '6045ef5bbbabddad9f872efe', sectionName: 'Salad' },
  ];

  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [select, setSelect] = useState([
    {
      _id: '6045ef5bbbabddad9f882ebf',
      sectionName: 'Patissier',
    },
    {
      _id: '6045ef5bbbabddad9f882efe',
      sectionName: 'Entremetier',
    },
  ]);

  const handleUpdate = useCallback(
    (sec, newValue) => {
      if (newValue === true) {
        setSelect((current) => [...current, sec]);
      } else {
        setSelect((current) =>
          current.filter((s) => s.sectionName !== sec.sectionName),
        );
      }
    },
    [select],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.text}>Select {userName}'s sections</Text>
        <View style={styles.flatlist}>
          <FlatList
            data={section}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.sectionCheck}>
                <Switch
                  value={
                    !!select.find((el) => el.sectionName === item.sectionName)
                  }
                  onValueChange={(newValue) => handleUpdate(item, newValue)}
                />
                <Text>{item.sectionName}</Text>
              </View>
            )}
          />
          <Pressable
            style={[styles.center, styles.button]}
            onPress={() => {
              hideModal(true);
              editUserSections(select);
            }}
          >
            <View style={[styles.center]}>
              <Ionicons
                name="checkmark-circle-sharp"
                size={36}
                color={darkBlue}
              />
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    opacity: 1,
    borderRadius: 7,
    padding: 20,
    width: '90%',
    height: 350,
    justifyContent: 'space-between',
    paddingVertical: 45,
    elevation: 20,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: darkBlue,
  },
  sectionCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  flatlist: {
    flexDirection: 'row',
    marginTop: 30,
    width: '90%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default UserModal;
