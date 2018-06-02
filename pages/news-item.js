import React, { Component } from "react";
import { withRouter } from "next/router";
import {loadNews} from "../redux-store/ducks/news";
import {connect} from "react-redux";
import T_NewsItem from "templates/T_NewsItem/T_NewsItem";
import * as T from "prop-types";

class NewsItem extends Component {
  static async getInitialProps({ reduxStore }, ...props) {
    await loadNews(reduxStore);
    return { props };
  }

  render() {
    return <T_NewsItem {...this.props} />;
  }
}

function mapToState(state, { router }) {
  const { id } = router.query;
  const { entities } = state.news;
  const entity = entities.find(el => el.id === id);
  return { newsItem: {...entity} };
}

export default  withRouter(
  connect(mapToState)(NewsItem)
);