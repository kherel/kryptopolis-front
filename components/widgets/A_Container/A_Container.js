import React from 'react'
import * as T from "prop-types"
import {cssClassName} from 'utils'
import './A_Container.scss'
const cn = cssClassName('A_Container')

const A_Container = ({children, mix, padding}) =>(
  <div className={cn([mix],{padding})}>{children}</div>
)

A_Container.propTypes = {
  mix: T.string,
  padding: T.oneOf(['wide', 'thin']),
  children: T.node.isRequired
};

export default A_Container