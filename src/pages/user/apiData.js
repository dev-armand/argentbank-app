export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

export const fetchUserData = () => {
return async (dispatch) => {
try {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:3001/api/v1/user/data', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
    });

    if (!response.ok) {
    throw new Error('Failed to fetch user data');
    }

    const userData = await response.json();
    dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: userData });
} catch (error) {
    console.error('Fetching user data failed:', error);
    dispatch({ type: FETCH_USER_DATA_FAILURE, error: error.message });
}
};
};