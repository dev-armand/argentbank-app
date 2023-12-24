import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './components/login-form/userReducer';

// Create reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
