import React from 'react'
import * as T from "prop-types"
import A_H from 'widgets/A_H/A_H'
import A_Btn from 'widgets/A_Btn/A_Btn'
import {cssClassName} from 'utils'
import './M_ArticleCard.scss'
const cn = cssClassName('M_ArticleCard')

const M_ArticleCard = (
  {
    mix,
    article:{title, summary, image, user:{name}, showDate},
    articleLink,
    hasBorder
  }) =>(
  <div className={cn({hasBorder}, [mix])}>
    <img className={cn('image')} src={image} />
    <div className={cn('content')}>
      <A_H mix={cn('title')} type='widget'>{title}</A_H>
      <p className={cn('text')}>{summary}</p>
      <A_Btn
        mix={cn('show-all')}
        type='link'
        href={articleLink}
        theme='filled'
        size='md'
        color='gray'
      >
        PRZECZYTAJ WIĘCEJ
      </A_Btn>
      <span className={cn('credentials')}>{showDate} | {name}</span>
    </div>
  </div>
)

M_ArticleCard.propTypes = {
  mix: T.string,
  hasBorder: T.bool
};

export default M_ArticleCard