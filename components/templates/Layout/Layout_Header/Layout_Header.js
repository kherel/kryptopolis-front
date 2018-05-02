import React, { Component } from 'react'
import * as T from 'prop-types'
import A_Container from 'A_Container/A_Container'
import {cssClassName} from 'utils/index'
import './Layout_Header.scss'

const cn = cssClassName('Layout_Header')

class Layout_Header extends Component {

  render() {
    const { mix } = this.props
    return (
      <header className={cn([mix])}>
        <A_Container mix={'content'}>Header</A_Container>
      </header>
    );
  }
}

Layout_Header.propTypes = {
  mix: T.string
}

export default Layout_Header
