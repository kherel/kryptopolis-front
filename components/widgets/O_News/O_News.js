import React, { Component, Fragment } from 'react'
import * as T from 'prop-types'
import A_H from 'widgets/A_H/A_H'
import A_Link from 'widgets/A_Link/A_Link'
import A_LabelTitle from 'widgets/A_LabelTitle/A_LabelTitle'
import {cssClassName} from 'utils/index'
import './O_News.scss'

const cn = cssClassName('O_News')

class O_News extends Component {

  _renderNewsItems = (news, type) => (
    news.map((text, index) => <A_Link key={`${type}-${index}`} mix={cn('item')} href='/news'>{text}</A_Link>)
  )

  render() {
    const { mix } = this.props
    return (
      <div className={cn([mix])}>
        <A_H mix={cn('title')} type='section'>WIADOMOŚCI</A_H>
        <A_LabelTitle mix={cn('label')} size='sm'>DZISIAJ</A_LabelTitle>
        {this._renderNewsItems(news.today, 'today')}
        <A_LabelTitle mix={cn('label')} size='sm'>WCZORAJ</A_LabelTitle>
        {this._renderNewsItems(news.old, 'old')}
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
