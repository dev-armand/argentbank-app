// firstName.js
export const changeFirstName = (firstName) => ({
    type: "CHANGE_FIRST_NAME", // 
    payload: firstName
});

export const firstNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_FIRST_NAME":
            return { ...state, firstName: action.payload };
        default:
            return state;
    }
};

// Initial State
const initialState = {
    firstName: ''
};
