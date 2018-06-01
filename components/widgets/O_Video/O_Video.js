import React, { Component } from 'react'
import * as T from 'prop-types'
import A_H from 'widgets/A_H/A_H'
import {cssClassName} from 'utils/index'
import './O_Video.scss'

const cn = cssClassName('O_Video')

class O_Video extends Component {

  render() {
    const { mix } = this.props
    return (
      <div className={cn([mix])}>
        <A_H mix={cn('title')} type='section'>Video</A_H>

        <div className={cn('items-grid')}>
          <div className={cn('item')}>
            <div className={cn('item-img')}>
              <img src="/static/img/hot.jpg" />
            </div>
            <A_H mix={cn('item-title')} type='widget-sm'>
              PRANIE BITCOINÓW MNIEJ NIŻ JEDEN PROCENT WSZYSTKICH TRANSAKCJI
            </A_H>
          </div>

          <div className={cn('item')}>
            <div className={cn('item-img')}>
              <img src="/static/img/hot.jpg" />
            </div>
            <A_H mix={cn('item-title')} type='widget-sm'>
              MEDIA KONTYNUUJE SZYBKĄ BITCOINĘ, W JAKI SPOSÓB RYNEK OTWARTYCH RYNKÓW
            </A_H>
          </div>
        </div>

      </div>
    );
  }
}

O_Video.propTypes = {
  mix: T.string
}

export default O_Video
