import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { initStore } from "redux-store/store";
import withRedux from "redux-store/withRedux";
import { setStatus } from "redux-store/ducks/appStatus";
import Layout from "templates/MainLayout/MainLayout";
import Authorization from "templates/Authorization/Authorization";
import * as T from "prop-types";
import {handleUserLogin, userErrorClear} from "redux-store/ducks/auth";

class Auth extends Component {
  render() {
    return (
      <Layout>
        <Authorization {...this.props} />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  const { loggedIn, loginError, redirect } = state.auth;

  return { loggedIn, loginError, redirect };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(
    { handleUserLogin, userErrorClear },
    dispatch
  );
  return { ...actions };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Auth);
