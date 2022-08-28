import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    toast.error('Something went wrong...');
    return error.message;
  }
});

const addContact = createAsyncThunk('contacts/addContact', async contact => {
  try {
    await axios.post('/contacts', contact);
  } catch (error) {
    toast.error('Something went wrong...');
    return error.message;
  }
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
  } catch (error) {
    toast.error('Something went wrong...');
    return error.message;
  }
});

const operations = {
  getContacts,
  addContact,
  deleteContact,
};

export default operations;
