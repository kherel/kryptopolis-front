import React, { Component } from "react";
import {loadNews, selectorNews} from "redux-store/ducks/news";
import { connect } from "react-redux";
import T_News from "templates/T_News/T_News";
import * as T from "prop-types";

class News extends Component {
  static async getInitialProps({ reduxStore }, ...props) {
    await loadNews(reduxStore);
    return { props };
  }

  render() {
    return <T_News {...this.props} />;
  }
}

function mapStateToProps(state) {
  const news = selectorNews(state)
  return { news };
}

export default connect(mapStateToProps)(News);