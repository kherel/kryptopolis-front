import api from "api/api";
import {safeDA} from "utils";

const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAIL = "LOGIN_FAIL"
const CLEAN_LOGIN_ERROR = "CLEAN_LOGIN_ERROR"
const USER_LOGOUT = "USER_LOGOUT"

const initialState = {
  loggedIn: false,
  loginError: false,
  token: undefined,
  role: '',
  redirect: ''
}

export default (user = initialState, {type, data}) => {

  switch (type) {
    case LOGIN_SUCCESS:
      return {...user, loggedIn: true, loginError: false, ...data}
    case LOGIN_FAIL:
      return {...user, loggedIn: false, loginError: true, textError: data, token: undefined}
    case CLEAN_LOGIN_ERROR:
      return {...user, loggedIn: false, loginError: false, token: undefined}
    case USER_LOGOUT:
      return {...initialState}
  }

  return user;
};


export const handleUserLogout = () => dispatch => {
  // storage.removeToken()
  dispatch({type: USER_LOGOUT})
}

export function clearLoginFailError() {
  return ({
    type: CLEAN_LOGIN_ERROR
  })
}

export const handleUserLogin =  ({ email, password }) => async dispatch =>{
  try{
    const res = await api.auth.getToken(email, password)
    const {token} = res.body

    dispatch(userLogin(token))

  } catch (error) {
    const dataError = safeDA(error, ["response", "data"], {})
    dispatch({type: LOGIN_FAIL, data: dataError.error || dataError.message})
  }

}


// pure actions

export const userLogin = (token) => ({type: LOGIN_SUCCESS, data: {token}})
export const cleanLoginError = (token) => ({type: CLEAN_LOGIN_ERROR})
