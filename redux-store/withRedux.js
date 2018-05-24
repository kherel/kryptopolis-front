import App, {Container} from 'next/app'
import {initializeStore} from './store'
import jsHttpCookie from 'cookie';
import {cookiesLogin} from "redux-store/ducks/auth";
import {initApi, setToken} from "api/init";
import {path} from 'ramda'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export default (App) => {
  return class Redux extends React.Component {
    static async getInitialProps(appContext) {

      const reduxStore = getOrCreateStore()

      const { req } = appContext.ctx

      if (req && req.headers) {
        const cookies = req.headers.cookie;
        if (typeof cookies === 'string') {
          const cookiesJSON = jsHttpCookie.parse(cookies);
          if(cookiesJSON.kryptopolis){
            const {token, email, role} = JSON.parse(cookiesJSON.kryptopolis)
            if(token){
              await reduxStore.dispatch(cookiesLogin({token, email, role}))
            }
          }
        }
      }

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor(props) {
      super(props)
      const {initialReduxState} = props
      this.reduxStore = getOrCreateStore(initialReduxState)
      initApi()
      const token = path(['auth', 'token'], initialReduxState)
      if(token){
        setToken(token)
      }
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore}/>
    }
  }
}