import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Container')

const A_Container = ({children, mix}) =>(
  <div className={cn([mix])}>{children}</div>
)

A_Container.propTypes = {
  mix: T.string,
  children: T.element.isRequired
};

export default A_Container