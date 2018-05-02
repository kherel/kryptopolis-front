import React, { Component } from 'react'
import * as T from 'prop-types'
import {cssClassName} from 'utils/index'
import './Layout_Footer.scss'

const cn = cssClassName('Layout_Footer')

class Layout_Footer extends Component {

  render() {
    const { mix } = this.props
    return (
      <footer className={cn([mix])}>footer</footer>
    );
  }
}

Layout_Footer.propTypes = {
  mix: T.string
}

export default Layout_Footer
