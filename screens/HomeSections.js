import * as React from 'react';
import { Component, useState } from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';
import SectionView from '../components/sections/section-view';
import { Appbar } from 'react-native-paper';
import { darkBlue } from '../StyleVars';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  ScrollableTab,
} from 'native-base';

const SECTIONS = [
  {
    sectionName: 'Grill',
    kitchenID: '1234',
    tasks: [
      {
        taskName: 'Prep Fish',
        maxQuantity: 30,
        curQuantity: 20,
        units: null,
        completed: false,
      },
      {
        taskName: 'Prep Meat',
        maxQuantity: 30,
        curQuantity: 20,
        units: null,
        completed: false,
      },
    ],
    _id: '134124',
    notes: 'I DIDNT FINISH',
  },
  {
    sectionName: 'Fryer',
    kitchenID: '1234',
    tasks: [
      {
        taskName: 'Prep Potatoes',
        maxQuantity: 30,
        curQuantity: 20,
        units: null,
        completed: false,
      },
    ],
    _id: '134123',
    notes: 'I DIDNT FINISH',
  },
  {
    sectionName: 'Cold',
    kitchenID: '1234',
    tasks: [
      {
        taskName: 'Prep Onions',
        maxQuantity: 30,
        curQuantity: 20,
        units: null,
        completed: false,
      },
    ],
    _id: '134121',
    notes: 'I DIDNT FINISH',
  },
];

const HomeTasks = ({ navigation }) => {
  const [addModal, setAddModal] = useState(false);

  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Sections" />
        <Appbar.Action
          icon="plus-circle"
          onPress={() => setAddModal(true)}
          size={30}
        />
      </Appbar.Header>
      <Container>
        <Tabs
          style={styles.tabs}
          tabsContainerStyle={styles.tabs}
          renderTabBar={() => (
            <ScrollableTab
              style={styles.tabs}
              tabsContainerStyle={styles.tabs}
            />
          )}
        >
          {SECTIONS.map((section) => {
            return (
              <Tab
                heading={section.sectionName}
                tabStyle={styles.tabs}
                activeTabStyle={styles.tabs}
              >
                <SectionView taskInfo={section.tasks} />
              </Tab>
            );
          })}
        </Tabs>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: darkBlue,
  },
  tabs: {
    backgroundColor: '#004392', //'#00837b',
  },
  red: {
    color: 'red',
  },
});

export default HomeTasks;
