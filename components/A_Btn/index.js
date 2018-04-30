import React from 'react'
import * as T from "prop-types"
import './styles.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('A_Btn');

const A_Btn = ({mix, children, type, onClick, theme, disabled}) => {

  const className = cn([mix],{theme, disabled})

  switch(type) {

    case 'submit':
      return (
        <button
          className={className}
          disabled={disabled}
          type='submit'
        >
          {children}
        </button>
      )

    default:
      return (
        <div
          className={className}
          onClick={onClick}
        >
          {children}
        </div>
      )
  }

}

export default A_Btn

A_Btn.propTypes = {
  mix: T.string, //BEM mixin from parent block
  type: T.oneOf([
    'submit', // form submit btn
  ]),
  theme: T.oneOf([
    'dark', // dark theme
  ]),
  onClick: T.func,
  disabled: T.bool, // disabled
}