import React, { Component } from 'react'
import * as T from 'prop-types'
import A_Container from 'widgets/A_Container/A_Container'
import {cssClassName} from 'utils/index'
import './MainLayout_Header.scss'

const cn = cssClassName('MainLayout_Header')

class MainLayout_Header extends Component {

  render() {
    const { mix } = this.props
    return (
      <header className={cn([mix])}>
        <A_Container mix={'content'}>Header</A_Container>
      </header>
    );
  }
}

MainLayout_Header.propTypes = {
  mix: T.string
}

export default MainLayout_Header
