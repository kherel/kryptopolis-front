import React from 'react'
import T from 'prop-types'
import './logout.svg'
import './logo.svg'
import './name.svg'
import './burger.svg'
import './close.svg'

const A_Svg = ({ name, ...props }) => (
  <svg {...props}>
    <use xlinkHref={`#${name}`} />
  </svg>
)

A_Svg.propTypes = {
  name: T.string.isRequired,
}

export default A_Svg
