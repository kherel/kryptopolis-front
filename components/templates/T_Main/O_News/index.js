import React, { Component } from 'react'
import * as T from 'prop-types'
import A_H from 'A_H'
import {cssClassName} from 'utils/index'
import './styles.scss'

const cn = cssClassName('O_News')

class O_News extends Component {

  render() {
    const { mix } = this.props
    return (
      <div className={cn([mix])}>
        <A_H mix={cn('title')} type='section'>WIADOMOŚCI</A_H>
      </div>
    );
  }
}

O_News.propTypes = {
  mix: T.string
}

export default O_News
