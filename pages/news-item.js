import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { initStore } from "redux-store/store"
import withRedux from "redux-store/withRedux"
import { setStatus } from "redux-store/ducks/appStatus"
import Layout from 'templates/MainLayout/MainLayout'
import NewsItem from 'templates/NewsItem/NewsItem'
import * as T from "prop-types"

class Register extends Component {
  render() {
    return (
      <Layout>
        <NewsItem />
      </Layout>
    );
  }
}

export default Register
/*function mapStateToProps(state) {

  const {status} = state.appStatus

  return {status}

}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ setStatus }, dispatch)
  return { ...actions }
}

export default (withRedux(initStore, mapStateToProps, mapDispatchToProps)(Authorization))*/
