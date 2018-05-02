import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { initStore } from "redux-store/store"
import withRedux from "redux-store/withRedux"
import { setStatus } from "redux-store/ducks/appStatus"
import Layout from 'templates/Layout/Layout'
import Home from 'templates/Home/Home'
import * as T from "prop-types"

class Index extends Component {

  static contextTypes = {
    pathname: T.string,
  }

  static async getInitialProps({ store, isServer }){
    await store.dispatch(setStatus('cool'))
  }

  render() {
    return (
      <Layout heroBanner>
        <Home
          {...this.props}
          {...this.context}
        />
      </Layout>
    );
  }
}

function mapStateToProps(state) {

  const {status} = state.appStatus

  return {status}

}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ setStatus }, dispatch)
  return { ...actions }
}

export default (withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index))
