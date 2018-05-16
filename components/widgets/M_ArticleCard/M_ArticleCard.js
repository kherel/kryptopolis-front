import React from 'react'
import * as T from "prop-types"
import A_H from 'widgets/A_H/A_H'
import A_Btn from 'widgets/A_Btn/A_Btn'
import {cssClassName} from 'utils'
import './M_ArticleCard.scss'
const cn = cssClassName('M_ArticleCard')

const M_ArticleCard = ({mix}) =>(
  <div className={cn([mix])}>
    <img className={cn('image')} src="/static/img/hot.jpg" />
    <div className={cn('content')}>
      <A_H mix={cn('title')} type='widget'>BOSCH INWESTUJE W IOTA</A_H>
      <p className={cn('text')}>Bosch, globalny koncern produkujący m.in. części samochodowe i elektronarzędzia, zainwestował w kryptowalutę IOTA, dostrzegając potencjał w tworzącym się rynku handlu danymi. "This investment represents Bosch’s transition from a hardware company…</p>
      <A_Btn mix={cn('show-all')} theme='filled' size='md' color='gray'>PRZECZYTAJ WIĘCEJ</A_Btn>
      <span className={cn('credentials')}>13 godz. ago | Krzysztof Gonciarz</span>
    </div>
  </div>
)

M_ArticleCard.propTypes = {
  mix: T.string,
};

export default M_ArticleCard