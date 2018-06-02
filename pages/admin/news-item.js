import { Component } from "react";
import T_AdminNewsItem from "templates/T_AdminNewsItem/T_AdminNewsItem";
import authorizationHOC from "HOC/authorizationHOC";
import { createNews, updateNews, loadNewsItem } from "redux-store/ducks/news";
import { isEmpty } from "ramda";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";

class AdminNewsItem extends Component {
  static async getInitialProps({ reduxStore, query }) {
    const { id } = query;
    let type = "create";

    if (!id) {
      return { type };
    }

    const newsItem = await loadNewsItem(reduxStore, query);
    if (!isEmpty(newsItem)) {
      type = "update";
    }

    return { ...newsItem, type, id };
  }

  render() {
    const {createNews, updateNews, type, id, ...props} = this.props
    const handleSubmit = type === 'update' ? (...arg) => updateNews(id, ...arg) : createNews

    return <T_AdminNewsItem {...{...props, handleSubmit, type}} />;
  }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ createNews, updateNews }, dispatch);
  return { ...actions };
}

export default authorizationHOC(
  connect(null, mapDispatchToProps)(AdminNewsItem),
  ["admin", "superAdmin"]
);
