import api from "api/api";
import jsCookie from 'js-cookie';
import {setToken} from 'api/init'

import { safeDA } from "utils";
import {SUCCESS, FAIL, CLEAN, ERROR} from './commonConstants'
import {errorHelper} from "./helpers";

const LOGIN = "LOGIN";
const USER_LOGOUT = "USER_LOGOUT";
const COOKIE_NAME = 'kryptopolis'

const initialState = {
  loggedIn: false,
  loginError: false,
  token: undefined,
  textError: '',
  role: '',
  email: ''
};

export default (user = initialState, { type, data }) => {
  switch (type) {
    case LOGIN + SUCCESS:
      return {
        ...user,
        loggedIn: true,
        loginError: false,
        ...data,
      };
    case LOGIN + FAIL:
      return {
        ...user,
        loggedIn: false,
        loginError: true,
        textError: data,
        token: undefined
      };
    case CLEAN + LOGIN + ERROR:
      return { ...user, loggedIn: false, loginError: false, token: undefined };
    case USER_LOGOUT:
      return { ...initialState };
  }

  return user;
};

export const handleUserLogout = () => dispatch => {
  jsCookie.remove(COOKIE_NAME)
  dispatch({ type: USER_LOGOUT });
};

export const handleUserLogin = (email, password) => async dispatch => {
  try {
    const res = await api.auth.getToken(email, password);
    const { value: token, role } = res.data.attributes;
    jsCookie.set(COOKIE_NAME, {token, email, role});
    setToken(token)
    dispatch(userLogin({email, token, role}));
  } catch (error) {
    errorHelper(LOGIN, error, dipatch, )
  }
};

export const cookiesLogin = data => async dispatch => dispatch({ type: LOGIN + SUCCESS, data });



// pure actions

export const userLogin = data => ({ type: LOGIN + SUCCESS, data });
export const cleanLoginError = token => ({ type: CLEAN + LOGIN + ERROR });
