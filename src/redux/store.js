import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/slices/authslice'; // Adjust the path as necessary
import rolesReducer from '../redux/slices/rolesslice'; // Import the roles reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    roles: rolesReducer, // Add the roles reducer here
  },
});

export default store;
