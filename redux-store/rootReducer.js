import { combineReducers } from 'redux'
import appStatus from './ducks/appStatus'
import auth from './ducks/auth'
import news from './ducks/news'
import articles from './ducks/articles'
import videos from './ducks/videos'
import tickers from './ducks/tickers'

export default combineReducers({
  appStatus,
  auth,
  news,
  articles,
  videos,
  tickers
})
