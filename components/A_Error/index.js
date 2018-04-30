import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Error')

const A_Error = ({mix, children}) => <p className={cn([mix])}>{children}</p>

A_Error.propTypes = {
  mix: T.string,
  children: T.any.isRequired,
};

export default A_Error