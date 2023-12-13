import { useNavigate } from "react-router-dom";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

// Action to manage the success user login
export const userLoginSuccess = (userData) => ({
  type: USER_LOGIN_SUCCESS,
  payload: userData,
});

// Action to manage the user login failed
export const userLoginFailed = (error) => ({
  type: USER_LOGIN_FAILED,
  payload: error,
});

// Action to manage user disconnection
export const userLogout = () => {
  sessionStorage.removeItem("token");
  return {
    type: USER_LOGOUT,
  };
};

export const setUserProfile = (userData) => ({
  type: SET_USER_PROFILE,
  payload: userData,
});


// Action to manage the user connection
export const userLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const userData = { email, password };

      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      
      if (response.status === 200) {
        const token = data.body.token;
        sessionStorage.setItem("token", token);
        dispatch(userLoginSuccess(userData));
        dispatch(getUserProfile());
      } else if (response.status === 400 || response.status === 401) {
        sessionStorage.removeItem("token");
        dispatch(
          userLoginFailed("Invalide Email or Password. Please Try again")
        );
      }
    } catch (error) {
      dispatch(userLoginFailed("Invalid Email or Password. Please retry"));
    }
  };
};

// Action to get the profil user
export const getUserProfile = () => {
  return async (dispatch) => {
    try {
      const token = sessionStorage.getItem("token");

      // Manage if token is not available
      if (!token) {
        return;
      }

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(setUserProfile(data.body));
        // Dispatch actions with data fetched
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: data.body });
      } else {
        // Manage if response is not ok
        console.error(
          "Server response not OK:",
          response.status,
          response.statusText
        );
        // Dispatch actions to process errors
        dispatch({ type: "USER_LOGIN_FAILED", payload: response.statusText });
      }
    } catch (error) {
      // Manage errors linlked to request
      console.error("An error occurred while fetching user profile:", error);
      // Dispatch actions to process errors
      dispatch({ type: "USER_LOGIN_ERROR", payload: error.message });
    }
  };
};

export const editUserName = (newUserName) => {
  return async (dispatch) => {
    try {
      const token = sessionStorage.getItem("token");

      // Manage if token is not available
      if (!token) {
        return;
      }

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName: newUserName }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Dispatch actions with data fetched
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: data.body });
      } else {
        // Manage if response is not ok
        console.error(
          "Server response not OK:",
          response.status,
          response.statusText
        );
        // Dispatch actions to process errors
        dispatch({ type: "SET_USER_PROFILE", payload: response.statusText });
      }
    } catch (error) {
      // Manage errors linlked to request
      console.error("An error occurred while fetching user profile:", error);
      // Dispatch actions to process errors
      dispatch({ type: "USER_LOGIN_ERROR", payload: error.message });
    }
  };
};