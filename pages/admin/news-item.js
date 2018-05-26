import { Component } from "react";
import T_AdminNewsItem from "templates/T_AdminNewsItem/T_AdminNewsItem";
import authorizationHOC from "HOC/authorizationHOC";
import { loadNews, createNews, updateNews } from "redux-store/ducks/news";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "next/router";

class AdminNewsItem extends Component {
  static async getInitialProps({ reduxStore }, ...props) {
    await loadNews(reduxStore);
    return { props };
  }

  render() {
    return <T_AdminNewsItem {...this.props} />;
  }
}

function mapToState(state, { router }) {
  const { id } = router.query;
  let type
  if (!id) return {type: "create"};
  const { entities } = state.news;
  const entity = entities.find(el => el.id === id);
  type = "update";
  return { ...entity, type };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ createNews, updateNews }, dispatch);
  return { ...actions };
}

function mergeProps(stateProps, { createNews, updateNews }) {
  const { id, type } = stateProps;
  let handleSubmit;
  if (type === "update") {
    handleSubmit = (...attributes) => updateNews(id, ...attributes);
  } else {
    handleSubmit = createNews;
  }
  return { ...stateProps, handleSubmit };
}
export default authorizationHOC(
  withRouter(
    connect(mapToState, mapDispatchToProps, mergeProps)(AdminNewsItem)
  ),
  ["admin", "superAdmin"]
);
