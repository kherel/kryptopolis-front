import React, { Component } from "react";
import { loadArticles } from "redux-store/ducks/articles";
import { connect } from "react-redux";
import T_Articles from "templates/T_Articles/T_Articles";

class Articles extends Component {
  static async getInitialProps({ reduxStore }, ...props) {
    await loadArticles(reduxStore);
    return { props };
  }

  render() {
    return <T_Articles {...this.props} />;
  }
}

function mapStateToProps(state) {
  const {entities:articles} = state.articles
  return { articles };
}

export default connect(mapStateToProps)(Articles);