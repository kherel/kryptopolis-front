import React, { Component } from 'react'
import * as T from 'prop-types'
import A_Container from 'A_Container'
import {cssClassName} from 'utils/index'
import './styles.scss'

const cn = cssClassName('O_Menu')

class O_Menu extends Component {

  render() {
    const { mix } = this.props
    return (
      <nav className={cn([mix])}>
        <A_Container mix={'content'}>Menu</A_Container>
      </nav>
    );
  }
}

O_Menu.propTypes = {
  mix: T.string
}

export default O_Menu
