import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { initStore } from "redux-store/store";
import withRedux from "redux-store/withRedux";
import { setStatus } from "redux-store/ducks/appStatus";
import T_News from "templates/T_News/T_News";
import * as T from "prop-types";

class News extends Component {
  render() {
    return <T_News />;
  }
}

export default News;
/*function mapStateToProps(state) {

  const {status} = state.appStatus

  return {status}

}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ setStatus }, dispatch)
  return { ...actions }
}

export default (withRedux(initStore, mapStateToProps, mapDispatchToProps)(Authorization))*/
