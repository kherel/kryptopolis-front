import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_LoadingDots')

const A_LoadingDots = ({mix, children}) => (
  <p className={cn([mix])}>
    {children}
    <span className={cn('dot')}>.</span>
    <span className={cn('dot')}>.</span>
    <span className={cn('dot')}>.</span>
  </p>
)

A_LoadingDots.propTypes = {
  mix: T.string, //BEM mixin from parent block
  children: T.any.isRequired
}

export default A_LoadingDots