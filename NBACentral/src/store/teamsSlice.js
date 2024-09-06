// src/store/teamsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTeams } from '../services/nbaApi';

export const loadTeams = createAsyncThunk('teams/loadTeams', async () => {
  const response = await fetchTeams();
  return response;
});

const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    teams: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTeams.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadTeams.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.teams = action.payload;
      })
      .addCase(loadTeams.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default teamsSlice.reducer;
