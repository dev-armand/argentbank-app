import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './userActions';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false, // Include isAuthenticated in the initial state
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuthenticated: true, // Update isAuthenticated to true upon successful login
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        isAuthenticated: false, // Set isAuthenticated to false on login failure
      };
    default:
      return state;
  }
};

export default userReducer;
