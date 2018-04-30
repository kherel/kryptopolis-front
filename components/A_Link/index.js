import React from 'react';
import * as T from "prop-types";
import {Link} from 'react-router-dom'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Link')
import Link from 'next/link'

const A_Link = ({mix, children, type, to, disabled}) => {

  const className= cn({disabled}, [mix])

  switch (type) {
    case 'external':
      return (
        <a
          className={className}
          href={to}
          target="_blank"
        >
          {children}
        </a>
      )

    case 'mailto':
      return (
        <a
          className={className}
          href={`mailto:${to}`}
        >
          {children}
        </a>
      )

    default:
      return (
        <Link
          href={to}
        >
          <a className={className}>
            {children}

          </a>
        </Link>
      )
  }
}

A_Link.propTypes = {
  mix: T.string,
  disabled: T.bool,
  children: T.any.isRequired,
  to: T.string.isRequired,
  type: T.oneOf([
    'external', // opens external resource in new tab
    'mailto', // mailto link
  ]),
};

export default A_Link