import { Component } from "react"
import { bindActionCreators } from "redux"
import { initStore } from "redux-store/store"
import withRedux from "redux-store/withRedux"
import AdminLayout from 'templates/AdminLayout/AdminLayout'
import AdminHome from 'templates/AdminHome/AdminHome'
import * as T from "prop-types"
// import { setStatus } from "redux-store/ducks/appStatus"

class AdminIndex extends Component {
  render() {
    return (
      <AdminLayout >
        <AdminHome />
      </AdminLayout>
    );
  }
}

// function mapStateToProps(state) {
//
//   const {} = state
//
//   return {}
//
// }
//
// function mapDispatchToProps(dispatch) {
//   const actions = bindActionCreators({ }, dispatch)
//   return { ...actions }
// }

export default (withRedux(initStore)(AdminIndex))
