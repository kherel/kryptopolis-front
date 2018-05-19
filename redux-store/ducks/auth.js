import api from "api/api";
import {safeDA} from "utils";

const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAIL = "LOGIN_FAIL"
const CLEAN_LOGIN_ERROR = "CLEAN_LOGIN_ERROR"
const USER_LOGOUT = "USER_LOGOUT"
const CLEAN_LOGIN_REDIRECT = "CLEAN_LOGIN_REDIRECT"

const initialState = {
  loggedIn: false,
  loginError: false,
  token: undefined,
  role: '',
  redirectUrl: '/'
}

export default (user = initialState, {type, data}) => {

  switch (type) {
    case LOGIN_SUCCESS:
      return {...user, loggedIn: true, loginError: false, ...data, role: 'admin'}
    case LOGIN_FAIL:
      return {...user, loggedIn: false, loginError: true, textError: data, token: undefined}
    case CLEAN_LOGIN_ERROR:
      return {...user, loggedIn: false, loginError: false, token: undefined}
    case CLEAN_LOGIN_REDIRECT:
      return {...user, redirectUrl: '/'}
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
    const {value} = res.data.attributes

    dispatch(userLogin({token: value, email}))

  } catch (error) {
    const dataError = safeDA(error, ["response", "data"], {})
    dispatch({type: LOGIN_FAIL, data: dataError.error || dataError.message})
  }

}


// pure actions

export const userLogin = (data) => ({type: LOGIN_SUCCESS, data})
export const cleanLoginError = (token) => ({type: CLEAN_LOGIN_ERROR})
