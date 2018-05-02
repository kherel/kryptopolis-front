import React, { Component } from 'react'
import * as T from 'prop-types'
import A_H from 'A_H/A_H'
import {cssClassName} from 'utils/index'
import './O_Video.scss'

const cn = cssClassName('O_Video')

class O_Video extends Component {

  render() {
    const { mix } = this.props
    return (
      <div className={cn([mix])}>
        <A_H mix={cn('title')} type='section'>Video</A_H>
      </div>
    );
  }
}

O_Video.propTypes = {
  mix: T.string
}

export default O_Video
