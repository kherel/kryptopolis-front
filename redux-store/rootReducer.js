import { combineReducers } from 'redux'
import appStatus from './ducks/appStatus'
import auth from './ducks/auth'
import news from './ducks/news'
import articles from './ducks/articles'

export default combineReducers({
  appStatus,
  auth,
  news,
  articles
})
