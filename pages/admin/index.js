import { Component } from "react";
import T_AdminNews from "templates/T_AdminNews/T_AdminNews";
import Link from "next/link";
import authorizationHOC from "HOC/authorizationHOC";
import {path} from "ramda";
import {fetchNews} from "redux-store/ducks/news";

class AdminIndex extends Component {

  static async getInitialProps(ctx) {
    await ctx.reduxStore.dispatch(fetchNews())
    return {};
  }

  render() {
    return <T_AdminNews />;
  }
}

export default authorizationHOC(AdminIndex, ['admin', 'superAdmin']);
