import React, { Component } from "react";
import * as T from "prop-types";
import { cssClassName } from "utils/index";
import { adminNavigation, mainNavigation } from "data/data";
import M_NavMenuItem from "widgets/M_NavMenuItem/M_NavMenuItem";
import A_NavBtn from "widgets/A_NavBtn/A_NavBtn";
import A_Svg from "widgets/A_Svg/Svg";
import A_Link from "widgets/A_Link/A_Link";
import A_Btn from "widgets/A_Btn/A_Btn";

import "./MainLayout_Menu.scss";
const cn = cssClassName("MainLayout_Menu");

class MainLayout_Menu extends Component {
  getMainNavigation = () =>
    mainNavigation.map(({ text, href }) => (
      <M_NavMenuItem key={text} href={href} type="normal">
        {text}
      </M_NavMenuItem>
    ));

  getAdminNavigation = () =>
    adminNavigation.map(({ text, href }) => (
      <M_NavMenuItem key={text} href={href} type="admin">
        {text}
      </M_NavMenuItem>
    ));

  getLoginBlock = (loggedIn, email) => {
    if (loggedIn) {
      return (
        <div className={cn("login", { loggedIn })}>
          <A_Link href={'/'} mix={cn('login-profile')}>{email}</A_Link>
          <A_Btn mix={cn('login-logout-btn')}>
            <A_Svg name={"logout"} className={cn("login-logout-icon")} onClick={this.props.handleUserLogout}/>
          </A_Btn>
        </div>
      );
    } else {
      return (
        <div className={cn("login", { loggedIn })}>
          <A_NavBtn mix={cn("register-btn")} theme="rounded" href="/register">
            Rejestracja
          </A_NavBtn>
          <A_NavBtn href="/auth">LOGOWANIE</A_NavBtn>
        </div>
      );
    }
  };

  render() {
    const { loggedIn, role, email } = this.props,
      renderedNavigation = this.getMainNavigation(),
      renderedAdminNavigation = this.getAdminNavigation(),
      renderedLoginBlock = this.getLoginBlock(loggedIn, email);

    return (
      <div>
        <nav className={cn("nav", { theme: "main" })}>
          {renderedNavigation}
          {renderedLoginBlock}
        </nav>
        {role === "admin" && (
          <nav className={cn("nav", { theme: "admin" })}>
            {renderedAdminNavigation}
          </nav>
        )}
      </div>
    );
  }
}

MainLayout_Menu.propTypes = {
  mix: T.string
};

export default MainLayout_Menu;
