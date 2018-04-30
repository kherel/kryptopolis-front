import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_H')

const A_H = ({mix, type, children}) => {

  let titleLevel

  switch(type){
    case 'level1':
      titleLevel = 'h1'
      break;
    case 'level2':
      titleLevel = 'h2'
      break;
    case 'level3':
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
    'level1',
    'level2',
    'level3',
  ]),
  children: T.any.isRequired
};

export default A_H