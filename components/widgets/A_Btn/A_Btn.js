import React from 'react'
import * as T from "prop-types"
import './A_Btn.scss'
import Link from 'next/link'
import {cssClassName} from 'utils'
const cn = cssClassName('A_Btn');

const A_Btn = ({mix, children, type, onClick, theme, href}) => {

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

    case 'link':
      return(
        <Link href={href}>
          <a className={className}>{children}</a>
        </Link>
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
    'link'
  ]),
  onClick: T.func,
}