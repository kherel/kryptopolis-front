import React, { Component } from 'react'
import * as T from 'prop-types'
import A_H from 'widgets/A_H/A_H'
import {cssClassName} from 'utils/index'
import './O_Hot.scss'

const cn = cssClassName('O_Hot')

class O_Hot extends Component {

  render() {
    const { mix } = this.props
    return (
      <div className={cn([mix])}>
        <img className={cn('image')} src='/static/img/hot.jpg' />
        <A_H mix={cn('title')} type='widget'>
          ZACHOWAJ SPOKÓJ I HODL? CNBC GUEST MÓWI KRYTYKOWI BITCOINOWI O «PISS OFF»
        </A_H>
      </div>
    );
  }
}

O_Hot.propTypes = {
  mix: T.string
}

export default O_Hot
