import React, { Component } from 'react'
import * as T from 'prop-types'
import {cssClassName} from 'utils/index'
import './MainLayout_HeroBanner.scss'

const cn = cssClassName('MainLayout_HeroBanner')

class MainLayout_HeroBanner extends Component {

  render() {
    const { mix } = this.props
    return (
      <div className={cn([mix])}>
        Hero Banner
      </div>
    );
  }
}

MainLayout_HeroBanner.propTypes = {
  mix: T.string
}

export default MainLayout_HeroBanner
