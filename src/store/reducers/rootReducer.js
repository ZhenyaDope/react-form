// Reducers
import { combineReducers } from "redux";

// Reducers
import user from "./user";
import auth from "./auth";

const rootReducer = combineReducers({ user, auth });

export default rootReducer;
