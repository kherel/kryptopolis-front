import React, { Component, Fragment } from 'react'
import * as T from 'prop-types'
import A_H from 'A_H'
import {cssClassName} from 'utils/index'
import './styles.scss'

const cn = cssClassName('O_News')

class O_News extends Component {

  _renderNewsItems = (news) => (
    news.map(text => <div className={cn('item')}>{text}</div>)
  )

  render() {
    const { mix } = this.props
    return (
      <div className={cn([mix])}>
        <A_H mix={cn('title')} type='section'>WIADOMOŚCI</A_H>
        <div className={cn('label')}>DZISIAJ</div>
        {this._renderNewsItems(news.today)}
        <div className={cn('label')}>WCZORAJ</div>
        {this._renderNewsItems(news.old)}
      </div>
    );
  }
}

O_News.propTypes = {
  mix: T.string
}

export default O_News

const news = {
  today :
  [
  'Tajemniczy okręt podwodny na Bałtyku? Z powodu działań Rosji w Szwedach budzi się duch Wikingów',
  'Niebezpieczna pogoda nad Polską. IMiGW ostrzega',
  'Tajemniczy okręt podwodny na Bałtyku? Z powodu działań Rosji w Szwedach budzi się duch Wikingów',
  'Niebezpieczna pogoda nad Polską. IMiGW ostrzega',
  'Tajemniczy okręt podwodny na Bałtyku? Z powodu działań Rosji w Szwedach budzi się duch Wikingów',
  'Niebezpieczna pogoda nad Polską. IMiGW ostrzega',
  'Tajemniczy okręt podwodny na Bałtyku? Z powodu działań Rosji w Szwedach budzi się duch Wikingów'
  ],
  old:
  [
    'Niebezpieczna pogoda nad Polską. IMiGW ostrzega',
    'Tajemniczy okręt podwodny na Bałtyku? Z powodu działań Rosji w Szwedach budzi się duch Wikingów',
    'Niebezpieczna pogoda nad Polską. IMiGW ostrzega',
    'Tajemniczy okręt podwodny na Bałtyku? Z powodu działań Rosji w Szwedach budzi się duch Wikingów',
    'Niebezpieczna pogoda nad Polską. IMiGW ostrzega',
    'Tajemniczy okręt podwodny na Bałtyku? Z powodu działań Rosji w Szwedach budzi się duch Wikingów',
    'Niebezpieczna pogoda nad Polską. IMiGW ostrzega',
    'Tajemniczy okręt podwodny na Bałtyku? Z powodu działań Rosji w Szwedach budzi się duch Wikingów',
    'Niebezpieczna pogoda nad Polską. IMiGW ostrzega'
  ]
}
