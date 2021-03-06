import * as React from 'react';
import { Component, useState } from 'react';
import { View, Button, Modal, Text, FlatList, StyleSheet } from 'react-native';
import SectionTasks from '../components/sections/section-tasks';
import { Appbar } from 'react-native-paper';
import { darkBlue, midBlue } from '../StyleVars';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  ScrollableTab,
} from 'native-base';
import AddSectionModal from '../components/sections/add_section_modal';

const SECTIONS = [
  {
    sectionName: 'Grill',
    kitchenID: '1234',
    tasks: [
      {
        taskName: 'Prep Gambas',
        maxQuantity: 100,
        curQuantity: 20,
        units: 'KG',
        completed: true,
        _id: '1111',
      },
      {
        taskName: 'Prep Meat',
        maxQuantity: 30,
        curQuantity: 10,
        units: 'KG',
        completed: false,
        _id: '2222',
      },
      {
        taskName: 'Prep Fish',
        maxQuantity: 80,
        curQuantity: 70,
        units: 'Fish',
        completed: false,
        _id: '3333',
      },
      {
        taskName: 'Prep Meat',
        maxQuantity: 100,
        curQuantity: 30,
        units: '',
        completed: false,
        _id: '4444',
      },
      {
        taskName: 'Prep Fish',
        maxQuantity: 90,
        curQuantity: 20,
        units: '',
        completed: false,
        _id: '6666',
      },
      {
        taskName: 'Prep Meat',
        maxQuantity: 40,
        curQuantity: 20,
        units: '',
        completed: false,
        _id: '7777',
      },
      {
        taskName: 'Prep Fish',
        maxQuantity: 50,
        curQuantity: 50,
        units: '',
        completed: false,
        _id: '8888',
      },
      {
        taskName: 'Prep Meat',
        maxQuantity: 30,
        curQuantity: 5,
        units: '',
        completed: false,
        _id: '9999',
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
        curQuantity: 10,
        units: '',
        completed: false,
        _id: '5555',
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
        units: '',
        completed: false,
        _id: '0000',
      },
    ],
    _id: '134121',
    notes: 'I DIDNT FINISH',
  },
];

const HomeTasks = ({ navigation }) => {
  const [addModal, setAddModal] = useState(false);
  const [data, setData] = useState(SECTIONS);

  const addSection = (name) => {
    const section = {
      sectionName: name,
      notes: '',
    };
    setData((oldSections) => [...oldSections, section]);
  };

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
          {data.map((section) => {
            return (
              <Tab
                key={section._id}
                heading={section.sectionName}
                tabStyle={styles.tabs}
                activeTabStyle={styles.tabs}
              >
                <SectionTasks taskInfo={section.tasks} />
              </Tab>
            );
          })}
        </Tabs>
      </Container>

      <Modal
        animationType="none"
        transparent={true}
        visible={addModal}
        onRequestClose={() => setAddModal(false)}
      >
        <View style={styles.addModal}>
          <AddSectionModal
            hideModal={() => setAddModal(false)}
            addSection={addSection}
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
  tabs: {
    backgroundColor: midBlue,
  },
  red: {
    color: 'red',
  },
  addModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default HomeTasks;
