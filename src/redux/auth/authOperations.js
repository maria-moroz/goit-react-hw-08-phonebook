import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async user => {
  try {
    const { data } = await axios.post('/users/signup', user);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Something went wrong...');
    return error.message;
  }
});

const login = createAsyncThunk('auth/login', async user => {
  try {
    const { data } = await axios.post('/users/login', user);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Something went wrong...');
    return error.message;
  }
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    toast.error('Something went wrong...');
    return error.message;
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      toast.error('Something went wrong...');
      return error.message;
    }
  }
);

const operations = {
  register,
  login,
  logout,
  fetchCurrentUser,
};

export default operations;
