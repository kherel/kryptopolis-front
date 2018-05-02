import React from 'react'
import * as T from "prop-types"
import {cssClassName} from 'utils'
import './A_Container.scss'
const cn = cssClassName('A_Container')

const A_Container = ({children, mix}) =>(
  <div className={cn([mix])}>{children}</div>
)

A_Container.propTypes = {
  mix: T.string,
  children: T.node.isRequired
};

export default A_Container