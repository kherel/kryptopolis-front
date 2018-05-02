import React, { Component } from 'react'
import * as T from 'prop-types'
import Layout_Header from './Layout_Header/Layout_Header'
import Layout_HeroBanner from './Layout_HeroBanner/Layout_HeroBanner'
import Layout_Menu from './Layout_Menu/Layout_Menu'
import Layout_Footer from './Layout_Footer/Layout_Footer'
import {cssClassName} from 'utils/index'
import './Layout.scss'

const cn = cssClassName('Layout')

class Layout extends Component {

  static contextTypes = {
    pathname: T.string,
  }

  render() {
    const { children, heroBanner } = this.props

    return (
      <main className={cn()}>
        <Layout_Header mix={cn('header')} />
        {heroBanner && <Layout_HeroBanner />}
        <Layout_Menu mix={cn('menu')} />
        <div className={cn('content')}>
          {children}
        </div>
        <Layout_Footer mix={cn('footer')} />
      </main>
    )
  }
}

Layout.propTypes = {
  heroBanner: T.bool, //if true shows hero banner
  children: T.element //page content
}

export default Layout