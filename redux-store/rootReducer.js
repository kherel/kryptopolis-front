import { combineReducers } from 'redux'
import appStatus from './ducks/appStatus'
import auth from './ducks/auth'

export default combineReducers({
  appStatus,
  auth
})
