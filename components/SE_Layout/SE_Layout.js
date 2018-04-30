import React, { Component } from 'react';
import * as T from "prop-types";
import './SE_Layout.scss';
import {cssClassName} from '../../utils'
// const cn = cssClassName('SE_Layout')

class SE_Layout extends Component {

  state = {}

  static contextTypes = {
    pathname: T.string,
  }

  render() {

 //   const {} = this.props
 //   const {} = this.state
 //    console.log(this.context.pathname)
    return (
      <div>
        layout: SE_Layout
        {this.props.children}
      </div>
    )
  }
}

SE_Layout.propTypes = {
};

SE_Layout.defaultProps = {
}

export default SE_Layout