import React, { Component } from "react";
import "./index.scss";
import { bindActionCreators } from "redux";
import { initStore } from "redux-store/store";
import withRedux from "redux-store/withRedux";
import { addGoal } from "redux-store/ducks/goals";
import * as T from "prop-types";
import Layout from 'HOC/Layout.js'

class Index extends Component {

  static contextTypes = {
    pathname: T.string,
  }

  static async getInitialProps({ store, isServer }){
    await store.dispatch(addGoal({id: 0, data: 100}))
  }
  render() {
    return (
        <div onClick={() => this.props.addGoal({ id: 1, data: "aa" })}>
          path: {this.context.pathname}
          <br/>
          hello: {this.props.hello}

        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ addGoal }, dispatch);
  return { ...actions };
}

export default Layout(withRedux(initStore, null, mapDispatchToProps)(Index));
