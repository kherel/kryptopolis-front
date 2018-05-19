import { Component } from "react"
import AdminLayout from 'templates/AdminLayout/AdminLayout'
import AdminHome from 'templates/AdminHome/AdminHome'
import * as T from "prop-types"
// import { setStatus } from "redux-store/ducks/appStatus"
import Link from "next/link";
import authorizationHOC from "HOC/authorizationHOC";

class AdminIndex extends Component {
  render() {
    const href2 = '/admin/test'

    return (
      <AdminLayout >
        <Link href={href2}>
          <a >test</a>
        </Link>
        <AdminHome />
      </AdminLayout>
    );
  }
}


export default withRedux(initStore)(AdminIndex)
