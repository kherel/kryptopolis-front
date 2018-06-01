import React from 'react'
import * as T from 'prop-types'
import Link from 'next/link'
import A_H from 'widgets/A_H/A_H'
import {cssClassName} from 'utils/index'
import './M_Articles_Item.scss'

const cn = cssClassName('M_Articles_Item')

const M_Articles_Item = ({mix, image, title, author, date, views, href}) => (
  <div className={cn([mix])}>
    <img className={cn('image')} src='/static/img/hot.jpg'/>
    <Link href={href}>
      <div className={cn('card')}>
        <A_H type='widget-sm'>{title}</A_H>
        <p className={cn('info')}>
          Konstantin Kinstantinov<br />
          13 godz. ago | 18005
        </p>
      </div>
    </Link>
  </div>
)

M_Articles_Item.propTypes = {
  mix: T.string,
  image: T.string,
  title: T.string,
  author: T.string,
  date: T.string,
  views: T.number,
  href: T.string
}

export default M_Articles_Item