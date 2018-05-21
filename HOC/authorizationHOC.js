import React, { Component } from "react";
import Router from 'next/router'
import {getDisplayName} from "utils/hoc";
import {setRedirectUrl} from "redux-store/ducks/auth";

//This HOC is watching for last mounted component in order to provide specific 'back' links urls

export default (WrappedComponent, roleNeeded) => {
  class AuthHOC extends Component {

    // static displayName = getDisplayName('AuthHOC', WrappedComponent)

    static async getInitialProps (ctx) {
      const store = ctx.reduxStore.getState()
      const {loggedIn, role} = store.auth

      const redirect = !(loggedIn && (!roleNeeded || roleNeeded === role))
      const redirectUrl = '/auth'

      if(redirect){
        if(ctx.req) {
          const { req, res} = ctx
          res.writeHead(301, {
            Location: `${redirectUrl}?redirectFrom=${req.url}`
          })
          res.end()
          return {}
        }

        Router.push({
          pathname: redirectUrl,
          query: { redirectFrom: Router.pathname }
        })

        return {}
      }

      let initialProps = {}
      if(WrappedComponent.getInitialProps) {
        initialProps = await WrappedComponent.getInitialProps(ctx)
      }

      return initialProps
    }

    render() {
      const {loggedIn, role, ...props} = this.props
      return <WrappedComponent {...props} />
    }
  }

  function mapStateToProps(state) {

    const {loggedIn, role} = state.auth
    return {loggedIn, role}
  }

  return AuthHOC
}
