import { Component } from "react"
import AdminLayout from 'templates/AdminLayout/AdminLayout'
import AdminHome from 'templates/AdminHome/AdminHome'
import * as T from "prop-types"
import Link from "next/link";
import authorizationHOC from "HOC/authorizationHOC";

class AdminIndex extends Component {


  render() {
    return (
      <AdminLayout >
        <AdminHome />
      </AdminLayout>
    );
  }
}


export default authorizationHOC(AdminIndex)
