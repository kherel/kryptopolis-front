import React, { Component } from "react";
// import * as T from "prop-types";
import "./AdminLayout.scss";
import { cssClassName } from "utils";
import M_NavMenuItem from "widgets/M_NavMenuItem/M_NavMenuItem";
const cn = cssClassName("AdminLayout");
import { adminNavigation } from "data/data";
import A_Link from "widgets/A_Link/A_Link";
import A_Container from "widgets/A_Container/A_Container";
import withRedux from "redux-store/withRedux";
import {initStore} from "redux-store/store";

class AdminLayout extends Component {
  state = {};

  getNavigation() {
    return adminNavigation.map(({ text, href }) => (
      <M_NavMenuItem key={text} href={href}>
        {text}
      </M_NavMenuItem>
    ));
  }

  render() {
    const renderedNavigation = this.getNavigation();
    return (
      <div className={cn()}>
        <header className={cn("header")}>
          <A_Container>Admin panel</A_Container>
        </header>

        <nav className={cn("nav")}>{renderedNavigation}</nav>
        {this.props.children}
        <footer className={cn("footer")}>
          <A_Container>
            if you have any questions or problems contact with{" "}
            <A_Link type="email" href="kherel@gmail.com">
              me
            </A_Link>
          </A_Container>
        </footer>
      </div>
    );
  }
}

export default AdminLayout
