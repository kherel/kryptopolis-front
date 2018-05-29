import React, { Component } from 'react'
import A_Container from 'widgets/A_Container/A_Container'
import O_Hot from 'widgets/O_Hot/O_Hot'
import O_Articles from 'widgets/O_Articles/O_Articles'
import O_Video from 'widgets/O_Video/O_Video'
import O_HotIco from 'widgets/O_HotIco/O_HotIco'
import O_News from 'widgets/O_News/O_News'
import O_Signals from 'widgets/O_Signals/O_Signals'
import O_Tweets from 'widgets/O_Tweets/O_Tweets'
import {cssClassName} from 'utils'
import './customScroll.scss'
import './Home.scss'

const cn = cssClassName('Home')

class Home extends Component {

  render() {
    const { status, setStatus, pathname, news} = this.props

    return (
      <A_Container mix={cn()} padding='thin'>
        <O_Hot mix={cn('hot')} />
        <O_Articles mix={cn('articles')} />
        <O_Video mix={cn('video')} />
        <O_HotIco mix={cn('hot-ico')} />
        <O_News mix={cn('news')} news={news}/>
        <O_Signals mix={cn('signals')} />
        <O_Tweets mix={cn('tweets')} />
      </A_Container>
    );
  }
}

export default Home
