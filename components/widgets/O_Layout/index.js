import React, { Component } from 'react'
import * as T from 'prop-types'
import O_Header from 'O_Header'
import O_Footer from 'O_Footer'
import {cssClassName} from 'utils/index'
import './styles.scss'

const cn = cssClassName('O_Layout')

class O_Layout extends Component {

  static contextTypes = {
    pathname: T.string,
  }

  render() {
    const { children, heroBanner } = this.props

    return (
      <main className={cn()}>
        <O_Header mix={cn('header')} />
        {heroBanner && <div>BANNER</div>}
        <div className={cn('content')}>
          {children}
        </div>
        <O_Footer mix={cn('footer')}/>
      </main>
    )
  }
}

O_Layout.propTypes = {
  heroBanner: T.bool, //if true shows hero banner
  children: T.element //page content
}

export default O_Layout