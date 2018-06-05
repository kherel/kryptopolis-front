import React, { Component } from "react";
import { withRouter } from "next/router";
import {loadNewsItem} from "../redux-store/ducks/news";
import {connect} from "react-redux";
import T_NewsItem from "templates/T_NewsItem/T_NewsItem";
import * as T from "prop-types";

class NewsItem extends Component {
  static async getInitialProps({ reduxStore, query }) {
    const newsItem = await loadNewsItem(reduxStore, query);
    return {...newsItem}
  }

  render() {
    return <T_NewsItem {...this.props} />;
  }
}

export default NewsItem
