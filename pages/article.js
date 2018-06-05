import React, { Component } from "react";
import T_Article from "templates/T_Article/T_Article";
import {loadArticle} from "../redux-store/ducks/articles";

class Article extends Component {
  static async getInitialProps({ reduxStore, query }) {
    const article = await loadArticle(reduxStore, query);
    return {...article}
  }

  render() {
    return <T_Article {...this.props} />;
  }
}

export default Article