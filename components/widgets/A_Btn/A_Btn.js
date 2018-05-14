import React from 'react'
import * as T from "prop-types"
import './A_Btn.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('A_Btn');

const A_Btn = ({mix, children, type, onClick, theme}) => {

  const className = cn([mix],{theme})

  switch(type) {

    case 'submit':
      return (
        <button
          className={className}
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
  mix: T.string,
  theme: T.oneOf([
    'filled',
    'rounded'
  ]),
  type: T.oneOf([
    'submit',
  ]),
  onClick: T.func,
}