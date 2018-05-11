import React, { Component } from 'react'
import * as T from 'prop-types'
import A_Container from 'widgets/A_Container/A_Container'
import {cssClassName} from 'utils/index'
import './MainLayout_Menu.scss'
import {mainNavigation} from "data/data";
import M_NavMenuItem from "widgets/M_NavMenuItem/M_NavMenuItem";

const cn = cssClassName('MainLayout_Menu')

class MainLayout_Menu extends Component {

  getNavigation() {
    return mainNavigation.map(({ text, href }) => (
      <M_NavMenuItem key={text} href={href}>
        {text}
      </M_NavMenuItem>
    ));
  }

  render() {
    const renderedNavigation = this.getNavigation();
    const {mix} = this.props
    return (
      <nav className={cn([mix])}>
        {renderedNavigation}
      </nav>
    );
  }
}

MainLayout_Menu.propTypes = {
  mix: T.string
}

export default MainLayout_Menu
