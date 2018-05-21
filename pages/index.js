import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { setStatus } from "redux-store/ducks/appStatus"
import Layout from 'templates/MainLayout/MainLayout'
import Home from 'templates/Home/Home'
import * as T from "prop-types"
import { connect } from 'react-redux'
import Link from "next/link";

class Index extends Component {
  render() {
    return (
      <Layout heroBanner>
        <div>
          <Link href={"/admin"}>
            <a
            >index</a>
          </Link>
          <Home
            {...this.props}
          />
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {

  const {status} = state.appStatus

  return {status}

}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ setStatus }, dispatch)
  return { ...actions }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
