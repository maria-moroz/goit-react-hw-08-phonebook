// import axios from 'axios';
// import axiosBaseQuery from 'config/axiosBaseQuery';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const authApi = createApi({
//   reducerPath: 'auth',

//   baseQuery: axiosBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),

//   tagTypes: ['Auth'],
//   refetchOnFocus: true,
//   endpoints: builder => ({
//     register: builder.mutation({
//       query: user => ({
//         url: '/users/signup',
//         method: 'POST',
//         body: user,
//       }),
//       invalidatesTags: ['Auth'],
//     }),

//     login: builder.mutation({
//       query: user => ({
//         url: '/users/login',
//         method: 'POST',
//         body: user,
//       }),
//       invalidatesTags: ['Auth'],
//     }),

//     logout: builder.mutation({
//       query: token => ({
//         url: '/users/logout',
//         method: 'POST',
//         body: token,
//       }),
//       invalidatesTags: ['Auth'],
//     }),
//   }),
// });

// export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
//   authApi;

// export const getUserName = state => state.auth.name;
