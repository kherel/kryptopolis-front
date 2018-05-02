import React, { Component } from 'react'
import A_Container from 'A_Container/A_Container'
import O_Articles from 'O_Articles/O_Articles'
import O_Video from 'O_Video/O_Video'
import O_HotIco from 'O_HotIco/O_HotIco'
import O_News from 'O_News/O_News'
import O_Signals from 'O_Signals/O_Signals'
import O_Tweets from 'O_Tweets/O_Tweets'
import {cssClassName} from 'utils'
import './Home.scss'

const cn = cssClassName('Home')

class Home extends Component {

  render() {
    const { status, setStatus, pathname} = this.props

    return (
      <A_Container mix={cn()}>
        <O_Articles mix={cn('articles')} />
        <O_Video mix={cn('video')} />
        <O_HotIco mix={cn('hot-ico')} />
        <O_News mix={cn('news')} />
        <O_Signals mix={cn('signals')} />
        <O_Tweets mix={cn('tweets')} />
      </A_Container>
    );
  }
}

export default Home
