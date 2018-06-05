import { Component } from "react";
import T_AdminList from "templates/T_AdminList/T_AdminList";
import authorizationHOC from "HOC/authorizationHOC";
import {loadNews, removeNews} from "redux-store/ducks/news";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loadVideos, removeVideo} from "redux-store/ducks/videos";

class AdminVideos extends Component {

  static async getInitialProps({reduxStore}) {
    await loadVideos(reduxStore)
    return {};
  }

  render() {
    return <T_AdminList {...this.props} reducerType = 'videos'/>;
  }
}

function mapToState(state) {
  const {loaded, entities, ids} = state.videos
  return {loaded, entities, ids}
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ removeItem: removeVideo }, dispatch)
  return { ...actions }
}

export default authorizationHOC(connect(mapToState, mapDispatchToProps)(AdminVideos), ['admin', 'superAdmin']);
