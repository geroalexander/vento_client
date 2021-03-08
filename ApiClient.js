import { REACT_APP_BASE_URL } from '@env';

const userID = '60439995f7687f4485fef0c0'; //_id of admin
const kitchenID = '604399f6f7687f4485fef0c2';

function getKitchenInventory() {
  return fetch(`${REACT_APP_BASE_URL}/kitchen/${kitchenID}`).then((res) =>
    res.json(),
  );
}

function getSectionInformation(sectionID) {
  return fetch(`${REACT_APP_BASE_URL}/section/${sectionID}`).then((res) =>
    res.json(),
  );
}

function getUserData() {
  return fetch(`${REACT_APP_BASE_URL}/user/${userID}`).then((res) =>
    res.json(),
  );
}

function getSection(sectionID) {
  return fetch(`${REACT_APP_BASE_URL}/section/${sectionID}`).then((res) =>
    res.json(),
  );
}

function updateNotes(sectionID, notes) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sectionID, notes }),
  };
  return fetch(
    `${REACT_APP_BASE_URL}/section/${sectionID}/notes`,
    requestOptions,
  ).then((res) => res.json());
}

function addSection(kitchenID, userID, sectionName) {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ sectionName, kitchenID, userID }),
  };
  return fetch(
    `${REACT_APP_BASE_URL}/section/${kitchenID}/${userID}`,
    requestOptions,
  ).then((res) => res.json());
}

function addTask(sectionID, taskName, maxQuantity) {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify({ taskName, maxQuantity }),
  };
  return fetch(
    `${REACT_APP_BASE_URL}/task/${sectionID}`,
    requestOptions,
  ).then((res) => res.json());
}

export default {
  getKitchenInventory,
  getUserData,
  getSectionInformation,
  updateNotes,
  addSection,
  addTask,
  getSection,
};
