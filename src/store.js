import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './components/login-form/userReducer';
import {firstNameReducer} from './pages/user/firstName';
import {lastNameReducer} from './pages/user/lastName';

// Create reducers
const rootReducer = combineReducers({
  // Add your reducers here
  user: userReducer,
  lastName: lastNameReducer,
  firstName: firstNameReducer,
});

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  devTools: true, // Enable Redux DevTools
});

export default store;
