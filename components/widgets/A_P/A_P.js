import React from 'react'
import * as T from "prop-types"
import './A_P.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('A_P')


const A_P = ({ mix, children, type }) => (
  <p className={cn({ type }, [mix])}>{children}</p>
)

A_P.propTypes = {
  type: T.oneOf([
    'small', // blue 11px, 1.27
    'slogan', // blue Upper 300 32/22/14
  ]).isRequired,
};

A_P.defaultProps = {
}

export default A_P