import React from 'react'
import withRedux from "redux-store/withRedux";
import { initStore } from "redux-store/store"

//This HOC is watching for last mounted component in order to provide specific 'back' links urls

const AuthHOC = WrappedComponent => {
  class WithOriginUrl extends React.Component {

    static displayName = `withOriginUrlSaving(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`

    componentWillUnmount() {
      this.props.saveOriginUrl(this.props.location.pathname)
    }


    render() {
      console.log(loggedIn)
      return <WrappedComponent {...this.props} />
    }
  }

  return WithOriginUrl
}

function mapStateToProps(state) {

  const {loggedIn} = state.auth

  return {loggedIn}

}

export default withRedux(initStore, mapStateToProps)(AuthHOC)