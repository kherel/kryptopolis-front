import React, { Component } from "react";
import { setStatus } from "redux-store/ducks/appStatus";
import Home from "templates/Home/Home";
//import * as T from "prop-types";
import { loadNews, selectorNews } from "redux-store/ducks/news";
import { loadArticles, selectorArticles } from "redux-store/ducks/articles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadVideos } from "redux-store/ducks/videos";

class Index extends Component {
  static async getInitialProps({ reduxStore }) {
    await Promise.all([
      loadNews(reduxStore),
      loadArticles(reduxStore),
      loadVideos(reduxStore)
    ]);

    return {};
  }

  render() {
    return <Home {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { email } = state.auth;
  const news = selectorNews(state);
  const {articles, videos} = state

  return { email, news, articles, videos };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ setStatus }, dispatch);
  return { ...actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
