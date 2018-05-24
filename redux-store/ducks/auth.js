import api from "api/api";
import jsCookie from 'js-cookie';
import {setToken} from 'api/init'

import { safeDA } from "utils";
import * as axios from "axios";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const CLEAN_LOGIN_ERROR = "CLEAN_LOGIN_ERROR";
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
    case LOGIN_SUCCESS:
      return {
        ...user,
        loggedIn: true,
        loginError: false,
        ...data,
      };
    case LOGIN_FAIL:
      return {
        ...user,
        loggedIn: false,
        loginError: true,
        textError: data,
        token: undefined
      };
    case CLEAN_LOGIN_ERROR:
      return { ...user, loggedIn: false, loginError: false, token: undefined };
    case USER_LOGOUT:
      return { ...initialState };
  }

  return user;
};

export const handleUserLogout = () => dispatch => {
  //todo: remove data from cookies, din't check how it works
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
    const dataError = safeDA(error, ["response", "data"], {});
    dispatch({ type: LOGIN_FAIL, data: dataError.error || dataError.message });
  }
};

export const cookiesLogin = data => async dispatch => dispatch({ type: LOGIN_SUCCESS, data });



// pure actions

export const userLogin = data => ({ type: LOGIN_SUCCESS, data });
export const cleanLoginError = token => ({ type: CLEAN_LOGIN_ERROR });
