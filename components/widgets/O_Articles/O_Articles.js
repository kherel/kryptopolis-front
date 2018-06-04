import React, { Component } from 'react'
import * as T from 'prop-types'
import M_Articles_Item from './M_Articles_Item/M_Articles_Item'
import A_H from 'widgets/A_H/A_H'
import {cssClassName} from 'utils/index'
import './O_Articles.scss'

const cn = cssClassName('O_Articles')

class O_Articles extends Component {

  render() {
    const { mix, articles:{ids, entities} } = this.props
    return (
      <div className={cn([mix])}>
        <A_H type='section'>ARTYKUŁY</A_H>
        <div className={cn('items-grid')}>
          {ids.map(id => <M_Articles_Item key={id} mix={cn('item')} {...entities[id]}/>)}
        </div>
      </div>
    );
  }
}

O_Articles.propTypes = {
  mix: T.string
}

export default O_Articles
