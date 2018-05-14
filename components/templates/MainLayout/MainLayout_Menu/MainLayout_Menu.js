import React, { Component, Fragment } from 'react'
import * as T from 'prop-types'
//import A_Container from 'widgets/A_Container/A_Container'
import A_Btn from 'widgets/A_Btn/A_Btn'
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
      <Fragment>
        <nav className={cn([mix])}>
          {renderedNavigation}
          <A_Btn
            mix={cn('register-btn')}
            theme='rounded'
            type='link'
            href='/register'
            onClick={this.toggleRegisterModal}
          >
            Rejestracja
          </A_Btn>
        </nav>
{/*        <M_Modal
          handleClose={this.toggleRegisterModal}
        >
          <O_Form formType='authorization'/>
        </M_Modal>*/}
      </Fragment>
    );
  }
}

MainLayout_Menu.propTypes = {
  mix: T.string
}

export default MainLayout_Menu
