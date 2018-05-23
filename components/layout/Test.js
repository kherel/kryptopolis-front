import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { setStatus } from "redux-store/ducks/appStatus"
import Layout from 'layout/MainLayout/MainLayout'
import Home from 'templates/Home/Home'
import * as T from "prop-types"
import { connect } from 'react-redux'
import Link from "next/link";

class Test extends Component {
  render() {
    return (
      <div>
        {this.props.email} <br/>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {

  const {email} = state.auth

  return {email}

}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ setStatus }, dispatch)
  return { ...actions }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
