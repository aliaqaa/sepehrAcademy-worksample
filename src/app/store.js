import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/userSlice'; // Adjust the path as necessary

// Create the Redux store
const store = configureStore({
  reducer: {
    profile: profileReducer, // Add the profile reducer to the store
  },
});

// Export the store
export default store;