import * as React from 'react';
import ApiClient from '../ApiClient';
import { Component, useState } from 'react';
import { View, Button, Modal, Text, FlatList, StyleSheet } from 'react-native';
import SectionTasks from '../components/sections/section-tasks';
import {
  Appbar,
  DefaultTheme,
  FAB,
  Portal,
  Provider,
} from 'react-native-paper';
import { darkBlue, midBlue } from '../StyleVars';
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import AddSectionModal from '../components/sections/add_section_modal';
import AddTaskModal from '../components/sections/add-task-modal';
import { useEffect } from 'react/cjs/react.development';

const HomeTasks = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [sectionModal, setSectionModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);
  const [user, setUser] = useState([]);
  const [secID, setSecID] = useState(null);

  useEffect(() => {
    // setUserID([]);
    ApiClient.getUserData().then((user) => {
      setUser(user);
    });
  }, []);

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

  const handleSection = (newSection) => {
    ApiClient.addSection(user.kitchenID, user._id, newSection).then((data) => {
      setData((oldSections) => [...oldSections, data.newSection]);
    });
  };

  const handleTask = (newTask, maxQuant) => {
    ApiClient.addTask(secID, newTask, maxQuant).then((res) => {
      setData((oldSections) => [...oldSections, res]);
    });
  };

  if (data) {
    return (
      <>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Sections" />
          <Appbar.Action
            icon="format-list-bulleted"
            onPress={() => setTaskModal(true)}
            size={30}
          />
          <Appbar.Action
            icon="text-box"
            onPress={() => setSectionModal(true)}
            size={30}
          />
        </Appbar.Header>
        <Container>
          <Tabs
            onChangeTab={(tab) => {
              setSecID(tab.ref.props.children.props.section._id);
            }}
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
                  <SectionTasks section={section} />
                </Tab>
              );
            })}
          </Tabs>
        </Container>

        <Modal
          animationType="none"
          transparent={true}
          visible={sectionModal}
          onRequestClose={() => setSectionModal(false)}
        >
          <View style={styles.sectionModal}>
            <AddSectionModal
              handleSection={handleSection}
              hideModal={() => setSectionModal(false)}
            />
          </View>
        </Modal>
        <Modal
          animationType="none"
          transparent={true}
          visible={taskModal}
          onRequestClose={() => setTaskModal(false)}
        >
          <View style={styles.sectionModal}>
            <AddTaskModal
              handleTask={handleTask}
              hideModal={() => setTaskModal(false)}
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
  sectionModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  fab: {
    margin: 10,
    color: 'white',
  },
});

export default HomeTasks;
