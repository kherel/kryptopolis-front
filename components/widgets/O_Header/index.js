import React, { Component } from 'react'
import * as T from 'prop-types'
import A_Container from 'A_Container'
import {cssClassName} from 'utils/index'
import './styles.scss'

const cn = cssClassName('O_Header')

class O_Header extends Component {

  render() {
    const { mix } = this.props
    return (
      <A_Container>
        <header className={cn([mix])}>header</header>
      </A_Container>
    );
  }
}

O_Header.propTypes = {
  mix: T.string
}

export default O_Header
