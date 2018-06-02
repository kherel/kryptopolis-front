import React, { Component } from "react";
import Router from "next/router";
import { getDisplayName } from "utils/hoc";
import { setRedirectUrl } from "redux-store/ducks/auth";
import { connect } from "react-redux";
import { equals } from "ramda";

//This HOC is watching for last mounted component in order to provide specific 'back' links urls

function checkRedirect(loggedIn, role, roleNeeded) {
  let
    redirect = false,
    redirectUrl,
    needFutureRedirect;

  if (!loggedIn) {
    redirect = true;
    redirectUrl = "/auth";
    needFutureRedirect = true;
  } else if (
    roleNeeded !== undefined && Array.isArray(roleNeeded)
      ? !roleNeeded.includes(role)
      : roleNeeded !== role
  ) {
    redirect = true;
    needFutureRedirect = false;
    redirectUrl = "/";
  }

  return { redirect, redirectUrl, needFutureRedirect };
}

export default (WrappedComponent, roleNeeded) => {
  class AuthHOC extends Component {
    // static displayName = getDisplayName('AuthHOC', WrappedComponent)

    static async getInitialProps(ctx) {
      const store = ctx.reduxStore.getState();
      const { loggedIn, role } = store.auth;

      const { redirect, redirectUrl, needFutureRedirect } = checkRedirect(
        loggedIn,
        role,
        roleNeeded
      );

      if (redirect) {
        if (ctx.req) {
          const { req, res } = ctx;
          const location =
            redirectUrl +
            (needFutureRedirect ? `?redirectFrom=${req.url}` : "");
          res.writeHead(301, { Location: location });
          res.end();
          return {};
        }

        const redirectObject = { pathname: redirectUrl };

        if (needFutureRedirect) {
          redirectObject.query = { redirectFrom: Router.pathname };
        }

        Router.push(redirectObject);

        return {};
      }

      let initialProps = {};
      if (WrappedComponent.getInitialProps) {
        initialProps = await WrappedComponent.getInitialProps(ctx);
      }

      return initialProps;
    }

    componentWillUpdate({ auth }) {
      if (!equals(auth, this.props.auth)) {
        const { role, loggedIn } = auth;
        const { redirect, redirectUrl, needFutureRedirect } = checkRedirect(
          loggedIn,
          role,
          roleNeeded
        );
        if (redirect) {
          const redirectObject = { pathname: redirectUrl };

          if (needFutureRedirect) {
            redirectObject.query = { redirectFrom: Router.pathname };
          }

          Router.push(redirectObject);
        }
      }
    }

    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }

  function mapStateToStore(store) {
    const { role, loggedIn } = store.auth;
    return { role, loggedIn };
  }
  return connect(store => ({ auth: store.auth }))(AuthHOC);
};
