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
      <header className={cn([mix])}>
        <A_Container mix={'content'}>Header</A_Container>
      </header>
    );
  }
}

O_Header.propTypes = {
  mix: T.string
}

export default O_Header
