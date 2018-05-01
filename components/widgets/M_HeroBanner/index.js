import React, { Component } from 'react'
import * as T from 'prop-types'
import {cssClassName} from 'utils/index'
import './styles.scss'

const cn = cssClassName('M_HeroBanner')

class M_HeroBanner extends Component {

  render() {
    const { mix } = this.props
    return (
      <div className={cn([mix])}>
        Hero Banner
      </div>
    );
  }
}

M_HeroBanner.propTypes = {
  mix: T.string
}

export default M_HeroBanner
