import React, { Component } from "react";
import { setStatus } from "redux-store/ducks/appStatus";
import Home from "templates/Home/Home";
//import * as T from "prop-types";
import {loadNews, selectorNews} from "redux-store/ducks/news";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Index extends Component {
  static async getInitialProps({ reduxStore }) {
    await loadNews(reduxStore);
    return {};
  }

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { email } = state.auth;
  const news = selectorNews(state)

  return { email, news };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ setStatus }, dispatch);
  return { ...actions };
}



export default connect(mapStateToProps, mapDispatchToProps)(Index);
