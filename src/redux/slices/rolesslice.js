// src/redux/slices/rolesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define API endpoints
const API_URL = 'http://localhost:3000/roles';

// Thunks for CRUD operations

// Create a role
export const createrole = createAsyncThunk('roles/createrole', async (roleData) => {
  try {
    const response = await axios.post(`${API_URL}`, roleData);
   // console.log('createrole',response);
    return response.data;
  } catch (error) {
    throw error; // Re-throwing the error to be caught in the rejected case
  }
});

// Read roles (fetch all)
export const fetchroles = createAsyncThunk('roles/fetchroles', async () => {
  const response = await axios.get(API_URL);
  console.log('fetchroles',response);
  return response.data;
});

// Update a role
export const updaterole = createAsyncThunk('roles/updaterole', async ({ id, roleData }) => {
  const response = await axios.put(`${API_URL}/${id}`, roleData);
  return response.data;
});

// Delete a role
export const deleterole = createAsyncThunk('roles/deleterole', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id; // Return the id to remove it from the state
});

const rolesSlice = createSlice({
  name: 'roles',
  initialState: {
    roles: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch roles
      .addCase(fetchroles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchroles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.roles = action.payload;
      })
      .addCase(fetchroles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      // Create a role
      .addCase(createrole.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createrole.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.roles = action.payload;
      })
      .addCase(createrole.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      // Update a role
      .addCase(updaterole.fulfilled, (state, action) => {
        const index = state.roles.findIndex((role) => role.id === action.payload.id);
        if (index !== -1) {
          state.roles[index] = action.payload;
        }
      })
      
      // Delete a role
      .addCase(deleterole.fulfilled, (state, action) => {
        state.roles = state.roles.filter((role) => role.id !== action.payload);
      });
  },
});

export default rolesSlice.reducer;
