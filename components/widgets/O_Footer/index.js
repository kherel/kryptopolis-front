import React, { Component } from 'react'
import * as T from 'prop-types'
import {cssClassName} from 'utils/index'
import './styles.scss'

const cn = cssClassName('O_Footer')

class O_Footer extends Component {

  render() {
    const { mix } = this.props
    return (
      <footer className={cn([mix])}>footer</footer>
    );
  }
}

O_Footer.propTypes = {
  mix: T.string
}

export default O_Footer
