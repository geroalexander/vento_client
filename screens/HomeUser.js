import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import {
  Appbar,
  DefaultTheme,
  FAB,
  Portal,
  Provider,
} from 'react-native-paper';
import { darkBlue } from '../StyleVars';
import UserProfile from '../components/users/user-profile';

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
  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Team" />
        <Appbar.Action
          icon="account-plus"
          onPress={() => console.log('hi')}
          size={30}
        />
      </Appbar.Header>

      <View style={styles.flatlist}>
        <FlatList
          data={team}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <UserProfile
              userName={item.name}
              sections={item.sectionID}
              onPress={() => {}}
            />
          )}
          numColumns={2}
        />
      </View>
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
});

export default HomeUser;
