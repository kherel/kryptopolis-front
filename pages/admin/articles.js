import { Component } from "react";
import T_AdminList from "templates/T_AdminList/T_AdminList";
import authorizationHOC from "HOC/authorizationHOC";
import {loadNews, removeNews} from "redux-store/ducks/news";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loadArticles, removeArticle} from "redux-store/ducks/articles";

class AdminArticles extends Component {

  static async getInitialProps({reduxStore}) {
    await loadArticles(reduxStore)
    return {};
  }

  render() {
    return <T_AdminList {...this.props} reducerType = 'articles'/>;
  }
}

function mapToState(state) {
  const {loaded, entities, ids} = state.articles
  return {loaded, entities, ids}
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ removeItem: removeArticle }, dispatch)
  return { ...actions }
}

export default authorizationHOC(connect(mapToState, mapDispatchToProps)(AdminArticles), ['admin', 'superAdmin']);
