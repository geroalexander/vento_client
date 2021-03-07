import * as React from 'react';
import ApiClient from '../ApiClient';
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
import { useEffect } from 'react/cjs/react.development';

const HomeTasks = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    setData([]);
    ApiClient.getUserData().then((user) => {
      user.sectionID.forEach((section) => {
        ApiClient.getSectionInformation(section).then((newSection) =>
          setData((oldSections) => [...oldSections, newSection]),
        );
      });
    });
  }, []);

  const addSection = (name) => {
    const section = {
      sectionName: name,
      notes: '',
    };
    //
    setData((oldSections) => [...oldSections, section]);
  };

  if (data) {
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
              // console.log('---------'.section);
              return (
                <Tab
                  key={section._id}
                  heading={section.sectionName}
                  tabStyle={styles.tabs}
                  activeTabStyle={styles.tabs}
                >
                  <SectionTasks section={section} />
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
  }
  return null;
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
