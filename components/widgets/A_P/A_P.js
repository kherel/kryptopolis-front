import React from 'react'
import * as T from "prop-types"
import './A_P.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('A_P')


const A_P = ({ mix, children, type }) => (
  <p className={cn({ type }, [mix])}>{children}</p>
)

A_P.propTypes = {
  mix: T.string,
  //type: T.oneOf([]).isRequired,
  children: T.node
};

A_P.defaultProps = {
}

export default A_P