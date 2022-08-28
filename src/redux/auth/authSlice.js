import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
  name: '',
  email: '',
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //login
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.name = payload.user.name;
        state.email = payload.user.email;
      }
    );
    //register
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.name = payload.user.name;
        state.email = payload.user.email;
      }
    );
    //logout
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
      state.token = initialState.token;
      state.name = initialState.name;
      state.email = initialState.email;
    });
    //current
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.email;
        state.name = payload.name;
      }
    );
    //error
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchRejected,
      (state, { payload }) => {
        if (payload?.status === 401) {
          state.token = initialState.token;
        }
      }
    );
  },
});

export const getUserName = state => state.auth.name;
export const getUserToken = state => state.auth.token;

export default authSlice.reducer;
