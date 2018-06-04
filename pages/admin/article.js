import { Component } from "react";
import T_AdminArticleNews from "templates/T_AdminArticleNews/T_AdminArticleNews";
import authorizationHOC from "HOC/authorizationHOC";
import { createArticle, updateArticle, loadArticle } from "redux-store/ducks/articles";
import { isEmpty } from "ramda";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";

class AdminArticleItem extends Component {
  static async getInitialProps({ reduxStore, query }) {
    const { id } = query;
    let type = "create";

    if (!id) {
      return { type };
    }

    const newsItem = await loadArticle(reduxStore, query);
    if (!isEmpty(newsItem)) {
      type = "update";
    }

    return { ...newsItem, type, id };
  }

  render() {
    const {createArticle, updateArticle, type, id, ...props} = this.props
    const handleSubmit = type === 'update' ? (...arg) => updateArticle(id, ...arg) : createArticle

    return <T_AdminArticleNews {...{...props, handleSubmit, type, reducerType: 'article'}} />;
  }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ createArticle, updateArticle }, dispatch);
  return { ...actions };
}

export default authorizationHOC(
  connect(null, mapDispatchToProps)(AdminArticleItem),
  ["admin", "superAdmin"]
);
