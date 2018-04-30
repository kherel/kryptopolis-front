import React from 'react';
import * as T from "prop-types";
import A_SvgSprite from 'A_SvgSprite'
import {Link} from 'react-router-dom'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_LinkBtn')

const A_LinkBtn = ({mix, type, to, children, icon}) => {

  const className= cn([mix], {icon})

  switch (type) {
    case 'external':
      return (
        <a
          className={className}
          href={to}
          target="_blank"
        >
          {children}
          {icon && <A_SvgSprite use='external-link' mix={cn('icon')} />}
        </a>
      )
    default:
      return (
        <Link
          className={className}
          to={to}
        >
          {children}
          {icon && <A_SvgSprite use='external-link' mix={cn('icon')} />}
        </Link>
      )
  }
}

A_LinkBtn.propTypes = {
  mix: T.string,
  type: T.oneOf([
    'external', // opens external resource in new tab
  ]),
  to: T.string.isRequired,
  children: T.any.isRequired,
  icon: T.bool,
};

export default A_LinkBtn