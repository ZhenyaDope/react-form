// Constants
import { AUTH, SET_USER } from "../constants";

export const setUser = (data) => {
  return {
    type: SET_USER,
    payload: data,
  };
};

export const changeAuth = (data) => {
  return {
    type: AUTH,
    payload: data,
  };
};
