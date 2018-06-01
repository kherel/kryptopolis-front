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
        <div className={cn('content')}>
            <div className={cn('item')}>
              <div className={cn('item-img')}>
                <img src="/static/img/hot.jpg" className={cn('item-img')} />
              </div>
              <div className={cn('item-content')}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, repellat!
              </div>
            </div>
            <div className={cn('item')}>
              <div className={cn('item-img')}>
                <img src="/static/img/hot.jpg" className={cn('item-img')} />
              </div>
              <div className={cn('item-content')}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, repellat!
              </div>
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
