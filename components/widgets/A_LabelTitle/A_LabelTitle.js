import React from 'react'
import * as T from 'prop-types'
import './A_LabelTitle.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('A_LabelTitle');

const A_LabelTitle = ({mix, size, hasBorder, children}) => (
  <p className={cn([mix], {size, hasBorder})}>
    <span className={cn('text')}>{children}</span>
  </p>
)



export default A_LabelTitle

A_LabelTitle.propTypes = {
  mix: T.string,
  size: T.oneOf(['lg', 'md', 'sm']),
  hasBorder: T.bool,
  children: T.node.isRequired
}