import React from 'react'
import T from 'prop-types'
import './logout.svg'

const A_Svg = ({ name, ...props }) => (
  <svg {...props}>
    <use xlinkHref={`#${name}`} />
  </svg>
)

A_Svg.propTypes = {
  name: T.string.isRequired,
}

export default A_Svg
