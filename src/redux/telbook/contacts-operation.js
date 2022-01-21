import axios, { Axios } from "axios";

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./action";
axios.defaults.baseURL =
  "https://61e892337ced4a00172ff620.mockapi.io/contacts/contacts";

export const addContact = (name) => (dispatch) => {
  const contact = {
    name: name.name,
    phone: name.number,
    completed: false,
  };
  console.log("first");

  dispatch(addContactRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest);
  axios
    .delete("/contacts", id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());
  console.log("first");
  axios
    .get("/contacts")
    .then((data) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactsError("error")));
  console.log(axios.data);
};
