
// lastName.js
export const changeLastName = (lastName) => ({
    type: "CHANGE_LAST_NAME",
    payload: lastName
});

export const lastNameReducer = (state = initialState, action) => {
switch (action.type) {
    case "CHANGE_LAST_NAME":
    return { ...state, lastName: action.payload };
    default:
    return state;
}
};

// Initial State
const initialState = {
lastName: ''
};
