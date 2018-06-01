import React, { Component } from 'react'
import * as T from 'prop-types'
import M_Articles_Item from './M_Articles_Item/M_Articles_Item'
import A_H from 'widgets/A_H/A_H'
import {cssClassName} from 'utils/index'
import './O_Articles.scss'

const cn = cssClassName('O_Articles')

class O_Articles extends Component {

  render() {
    const { mix } = this.props
    return (
      <div className={cn([mix])}>
        <A_H type='section'>ARTYKUŁY</A_H>
        <div className={cn('items-grid')}>
          {articleTitles.map((title, index) => <M_Articles_Item key={index} mix={cn('item')} title={title}/>)}
        </div>
      </div>
    );
  }
}

O_Articles.propTypes = {
  mix: T.string
}

const articleTitles = [
  'BITCOIN POD ROSNĄCĄ KONTROLĄ NA WYSPIE BALI',
  'PRANIE BITCOINÓW MNIEJ NIŻ JEDEN PROCENT WSZYSTKICH TRANSAKCJI',
  'ANALIZA CEN, 16 STYCZNIA:BITCOIN, ETHEREUM, BITCOIN CASH, RIPPLE',
  'RYNEK CRYPTO CIERPI Z POWODU NIEPEWNOŚCI W AZJI, STRATY DO 40%',
  'BITCOIN POD ROSNĄCĄ KONTROLĄ NA WYSPIE BALI',
  'PRANIE BITCOINÓW MNIEJ NIŻ JEDEN PROCENT WSZYSTKICH TRANSAKCJI',
]

export default O_Articles
