// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './teamsSlice';
// Import other reducers as needed

const store = configureStore({
  reducer: {
    teams: teamsReducer,
    // Add other reducers here
  },
});

export default store;
