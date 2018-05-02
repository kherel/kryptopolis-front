import React, { Component } from 'react'
import * as T from 'prop-types'
import A_Container from 'widgets/A_Container/A_Container'
import {cssClassName} from 'utils/index'
import './Layout_Menu.scss'

const cn = cssClassName('Layout_Menu')

class Layout_Menu extends Component {

  render() {
    const { mix } = this.props
    return (
      <nav className={cn([mix])}>
        <A_Container mix={'content'}>Menu</A_Container>
      </nav>
    );
  }
}

Layout_Menu.propTypes = {
  mix: T.string
}

export default Layout_Menu
