import React, { Component } from "react";
import { setStatus } from "redux-store/ducks/appStatus";
import Home from "templates/Home/Home";
//import * as T from "prop-types";
import {loadNews, selectorNews} from "redux-store/ducks/news";
import {loadArticles, selectorArticles} from "redux-store/ducks/articles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Index extends Component {
  static async getInitialProps({ reduxStore }) {
    await loadNews(reduxStore);
    await loadArticles(reduxStore);
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
  const {todayIds, yesterdayIds, othersIds, entities} = selectorArticles(state)
  const [first, hot, ...others] = [...todayIds, ...yesterdayIds, ...othersIds].slice(0, 7)
  return { email, news, hot, articles:{ids:[first, ...others], entities} };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ setStatus }, dispatch);
  return { ...actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
