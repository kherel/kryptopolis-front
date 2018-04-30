import React, { Component } from "react";
import "./index.scss";
import { bindActionCreators } from "redux";
import { initStore } from "redux-store/store";
import withRedux from "redux-store/withRedux";
import { setStatus } from "redux-store/ducks/appStatus";
import * as T from "prop-types";
import Layout from 'HOC/Layout.js'

class Index extends Component {

  static contextTypes = {
    pathname: T.string,
  }

  static async getInitialProps({ store, isServer }){
    await store.dispatch(setStatus('cool'))
  }
  render() {
    console.log(this.props.status)
    return (
        <div >
          <p>path: {this.context.pathname}</p>
          <br/>
          <p>status: {this.props.status}</p>
          <button onClick={() => this.props.setStatus('button push')}>push me</button>
        </div>
    );
  }
}

function mapStateToProps(state) {

  const {status} = state.appStatus

  return {status}

}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ setStatus }, dispatch);
  return { ...actions };
}

export default Layout(withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index));
