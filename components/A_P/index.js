import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_P')

const A_P = ({mix, children}) =>(
  <p className={cn([mix])}>{children}</p>
)

A_P.propTypes = {
  mix: T.string,
  children: T.any.isRequired
};

export default A_P