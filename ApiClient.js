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
    body: JSON.stringify(kitchenID, userID, sectionName),
  };
  return fetch(
    `${REACT_APP_BASE_URL}/section/${kitchenID}/${userID}`,
    requestOptions,
  ).then((res) => res.json());
}

// function fetchRequest(path, obj) {
//   return fetch(BASE_URL + path, obj)
//     .then((res) => (res.status < 400 ? res : Promise.reject()))
//     .then((res) => (res.status === 204 ? res : res.json())) //~~~ Stop infinite loop!
//     .catch((err) => {
//       console.log(`err fetching ${path}:`, err);
//     });
// }

export default {
  getKitchenInventory,
  getUserData,
  getSectionInformation,
  updateNotes,
  addSection,
};
