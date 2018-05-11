import React, { Component } from 'react'
import * as T from 'prop-types'
import MainLayout_Header from './MainLayout_Header/MainLayout_Header'
import MainLayout_HeroBanner from './MainLayout_HeroBanner/MainLayout_HeroBanner'
import MainLayout_Menu from './MainLayout_Menu/MainLayout_Menu'
import MainLayout_Footer from './MainLayout_Footer/MainLayout_Footer'
import {cssClassName} from 'utils/index'
import './MainLayout.scss'

const cn = cssClassName('MainLayout')

class MainLayout extends Component {

  static contextTypes = {
    pathname: T.string,
  }

  render() {
    const { children, heroBanner } = this.props

    return (
      <main className={cn()}>
        <MainLayout_Header mix={cn('header')} />
        {heroBanner && <MainLayout_HeroBanner />}
        <MainLayout_Menu mix={cn('menu')} />
        <div className={cn('content')}>
          {children}
        </div>
        <MainLayout_Footer mix={cn('footer')} />
      </main>
    )
  }
}

MainLayout.propTypes = {
  heroBanner: T.bool, //if true shows hero banner
  children: T.element //page content
}

export default MainLayout