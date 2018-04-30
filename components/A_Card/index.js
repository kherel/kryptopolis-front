import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Card')

const SE_Card = ({mix, children}) => (
  <div className={cn([mix])}>
    {children}
  </div>
)

SE_Card.propTypes = {
  mix: T.string, //BEM mixin from parent block
  children: T.any.isRequired
}

export default SE_Card