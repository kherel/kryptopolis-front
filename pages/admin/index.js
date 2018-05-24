import { Component } from "react";
import T_AdminNews from "templates/T_AdminNews/T_AdminNews";
import authorizationHOC from "HOC/authorizationHOC";
import {fetchNews, removeNews} from "redux-store/ducks/news";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class AdminIndex extends Component {

  static async getInitialProps({reduxStore}) {
    await reduxStore.dispatch(fetchNews())
    return {};
  }

  render() {
    return <T_AdminNews {...this.props}/>;
  }
}

function mapToState(state) {
  const {loaded, entities} = state.news
  return {loaded, entities}
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ removeNews }, dispatch)
  return { ...actions }
}

export default authorizationHOC(connect(mapToState, mapDispatchToProps)(AdminIndex), ['admin', 'superAdmin']);
