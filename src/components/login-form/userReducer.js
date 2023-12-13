import {
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  SET_USER_PROFILE,
} from "./userActions";

// Initial State declaration
const initialState = {
  userProfile: {},
  error: null,
};

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        error: null,
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        userProfile: "",
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        userProfile: "",
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        userProfile: "",
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;