import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://61e892337ced4a00172ff620.mockapi.io/contacts/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",

  async () => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",

  async (name) => {
    const contact = {
      name: name.name,
      phone: name.number,
    };
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return error;
    }
  }
);
