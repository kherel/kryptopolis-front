import React from 'react'
import * as T from "prop-types"
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_SvgSprite')

const SPRITE_PATH = `/svg-sprite.svg`

const A_SvgSprite = ({mix, use, onClick}) => (
  <svg
    className={cn([mix])}
    onClick={onClick}
  >
    <use
      xlinkHref={`${SPRITE_PATH}#${use}`}
    />
  </svg>
)

A_SvgSprite.propTypes = {
  use: T.oneOf([
    'external-link',
  ]).isRequired,
  mix: T.string, //BEM mixin from parent block, parent should control all styling (size, fill, anim)
  onClick: T.func
};

export default A_SvgSprite