// Constants
import { SET_USER } from "../constants";

// Initial state
const initialState = {
  name: "",
};

// Reducer
const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default user;
