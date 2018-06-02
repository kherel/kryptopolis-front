import React, { Component } from "react";
import { withRouter } from "next/router";
import {connect} from "react-redux";
import T_Article from "templates/T_Article/T_Article";
import {loadArticles} from "../redux-store/ducks/articles";

class Article extends Component {
  static async getInitialProps({ reduxStore }, ...props) {
    await loadArticles(reduxStore);
    return { props };
  }

  render() {
    return <T_Article {...this.props} />;
  }
}

function mapToState(state, { router }) {
  const { id } = router.query;
  const { entities } = state.articles;
  const entity = entities.find(el => el.id === id);
  return { article: {...entity} };
}

export default  withRouter(
  connect(mapToState)(Article)
);
