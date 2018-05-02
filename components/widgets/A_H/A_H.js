import React from 'react'
import * as T from "prop-types"
import './A_H.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('A_H')

const A_H = ({mix, type, children}) => {

  let titleLevel

  switch(type){
    case 'section':
      titleLevel = 'h3'
      break;
  }

  return (
    React.createElement(
      titleLevel,
      {className: cn({type}, [mix])},
      children
    )
  )
}

A_H.propTypes = {
  mix: T.string,
  type: T.oneOf([
    'section',
  ]),
  children: T.node.isRequired
};

export default A_H