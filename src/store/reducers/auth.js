// Constants
import { AUTH } from "../constants";

// Initial state
const initialState = {
  isAuth: false,
};

// Reducer
const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};

export default auth;
