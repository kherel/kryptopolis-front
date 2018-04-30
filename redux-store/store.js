import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducer from './rootReducer';


export const initStore = (initialState = {}) => {
  const store =  createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
  store.subscribe(() => console.log('heelo'))
  return store
}