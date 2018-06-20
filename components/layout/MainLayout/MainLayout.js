import React, { Component } from "react";
import * as T from "prop-types";
import MainLayout_Header from "./MainLayout_Header/MainLayout_Header";
import MainLayout_HeroBanner from "./MainLayout_HeroBanner/MainLayout_HeroBanner";
import MainLayout_Menu from "./MainLayout_Menu/MainLayout_Menu";
import MainLayout_Footer from "./MainLayout_Footer/MainLayout_Footer";
import { cssClassName } from "utils/index";
import "./MainLayout.scss";
import { handleUserLogout } from "redux-store/ducks/auth";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "next/router";
import {loadVideos} from "redux-store/ducks/videos";
import {loadArticles} from "redux-store/ducks/articles";
import {loadNews} from "redux-store/ducks/news";

const cn = cssClassName("MainLayout");
import { loadHeaderTickers } from "redux-store/ducks/tickers";

class MainLayout extends Component {
  static contextTypes = {
    pathname: T.string
  };

  render() {
    const { children, router, email, role, loggedIn, handleUserLogout, tickers } = this.props;

    return (
      <main>
        <MainLayout_Header {...{tickers}}/>
        {router.pathname === "/" && <MainLayout_HeroBanner />}
        <MainLayout_Menu {...{ email, role, loggedIn, handleUserLogout }} />
        <div>{children}</div>
        <MainLayout_Footer />
      </main>
    );
  }
}

MainLayout.propTypes = {
  heroBanner: T.bool, //if true shows hero banner
  children: T.element //page content
};

function mapStateToProps(state) {
  const { auth:{email, role, loggedIn}, tickers } = state;

  return { email, role, loggedIn, tickers };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ handleUserLogout }, dispatch);
  return { ...actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(MainLayout)
);
