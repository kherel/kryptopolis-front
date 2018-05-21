import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Layout from "templates/MainLayout/MainLayout";
import Authorization from "templates/Authorization/Authorization";
import * as T from "prop-types";
import { handleUserLogin, cleanLoginError } from "redux-store/ducks/auth";
import { connect } from 'react-redux'
import {path} from 'ramda'

class Auth extends Component {

  static getInitialProps (ctx) {
    const { query } = ctx
    const redirectFrom = path(['query', 'redirectFrom'], ctx)
    return {redirectFrom}
  }

  render() {
    return (
      <Layout>
        <Authorization {...this.props} />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  const { loggedIn, loginError } = state.auth;

  return { loggedIn, loginError };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(
    { handleUserLogin, cleanLoginError },
    dispatch
  );
  return { ...actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
