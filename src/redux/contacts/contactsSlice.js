import { createSlice } from '@reduxjs/toolkit';
import operations from './contactsOperations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [operations.getContacts.fulfilled](state, action) {
      state.contacts = action.payload.data;
      state.isLoading = false;
      state.error = null;
    },
    [operations.getContacts.pending](state, action) {
      state.isLoading = true;
    },
    [operations.getContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload.status;
    },
    [operations.addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = false;
    },
    [operations.addContact.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [operations.deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = false;
    },
    [operations.deleteContact.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
  },
});

export const getContacts = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;
// export const getIsLoggedIn = state => state.auth.isLoggedIn;
// export const getisFetchingCurrentUser = state =>
//   state.auth.isFetchingCurrentUser;
