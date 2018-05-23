import { Component } from "react";
import T_AdminNews from "templates/T_AdminNews/T_AdminNews";
import Link from "next/link";
import authorizationHOC from "HOC/authorizationHOC";

class AdminIndex extends Component {
  render() {
    return <T_AdminNews />;
  }
}

export default authorizationHOC(AdminIndex, ['admin', 'superAdmin']);
