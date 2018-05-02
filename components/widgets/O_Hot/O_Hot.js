import React, { Component } from 'react'
import * as T from 'prop-types'
import {cssClassName} from 'utils/index'
import './O_Hot.scss'

const cn = cssClassName('O_Hot')

class O_Hot extends Component {

  render() {
    const { mix } = this.props
    return (
      <div className={cn([mix])}>
        <img className={cn('image')} src='/static/img/hot.jpg' />
        <div className={cn('label')}>
          label
        </div>
      </div>
    );
  }
}

O_Hot.propTypes = {
  mix: T.string
}

export default O_Hot
