// userActions.js
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid credentials');
        } else {
          throw new Error('Server error');
        }
      }

      const { token, user } = await response.json(); // Assuming the API response contains user information

      localStorage.setItem('token', token);

      dispatch({ type: LOGIN_SUCCESS, payload: user }); // Dispatch LOGIN_SUCCESS with user data
      return true; // Indicate successful login
    } catch (error) {
      console.error('Login failed:', error);
      dispatch({ type: LOGIN_FAILURE, error: error.message });
      return false; // Indicate login failure
    }
  };
};
