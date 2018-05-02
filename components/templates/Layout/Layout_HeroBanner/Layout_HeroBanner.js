import React, { Component } from 'react'
import * as T from 'prop-types'
import {cssClassName} from 'utils/index'
import './Layout_HeroBanner.scss'

const cn = cssClassName('Layout_HeroBanner')

class Layout_HeroBanner extends Component {

  render() {
    const { mix } = this.props
    return (
      <div className={cn([mix])}>
        Hero Banner
      </div>
    );
  }
}

Layout_HeroBanner.propTypes = {
  mix: T.string
}

export default Layout_HeroBanner
