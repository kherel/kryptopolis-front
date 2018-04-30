import React, { Component } from "react";

import Layout from "components/SE_Layout/SE_Layout.js";
import PropTypes from "prop-types";

export default Page =>
  class LayoutHoc extends Component {

    static childContextTypes = {
      pathname: PropTypes.string
    };

    getChildContext() {
      return { pathname: this.props.pathname };
    }

    render() {
      const {pathname, ...props} = this.props
      console.log(props)
      return (
        <Layout>
          <Page {...props} />
        </Layout>
      );
    }

    static async getInitialProps(ctx) {
      var pageInitialProps = {};
      Page.getInitialProps &&
        (pageInitialProps = await Page.getInitialProps(ctx));

      return {
        ...pageInitialProps,
        pathname: (ctx.req && ctx.req.url) || ctx.pathname
      };
    }
    };
