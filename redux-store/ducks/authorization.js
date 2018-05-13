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


const request = require('superagent')
import {CLEAN, USER, LOGIN, LOGOUT, SUCCESS, FAIL, ERROR} from 'store/constants'
import { AUTH_ENDPOINT } from 'store/constants/api'
import storage from 'utils/localStorage'

export const handleUserLogout = () => dispatch => {
  storage.removeToken()
  dispatch({type: USER_LOGOUT})
}

export function clearLoginFailError() {
  return ({
    type: CLEAN_LOGIN_ERROR
  })
}

export const handleUserLogin =  ({ name, password }) => async dispatch =>{
  try{
    const res = await request.put(AUTH_ENDPOINT).send({name, password})
    const {token} = res.body
    storage.saveToken(token)

    dispatch(userLogin(token))

  } catch (error) {
    dispatch({type: LOGIN_FAIL, data: JSON.parse(error.response.text).error})
  }

}


// pure actions

export const userLogin = (token) => ({type: LOGIN_SUCCESS, data: {token}})
