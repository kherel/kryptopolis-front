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
import './Home.scss'
import A_Btn from "widgets/A_Btn/A_Btn";

const cn = cssClassName('Home')

class Home extends Component {

  render() {
    const { news, articles:{ids: aIds, entities:aEntities}, videos: {ids: vIds, entities: vEntities}} = this.props

    return (
      <A_Container mix={cn()} padding='thin'>
        <O_Hot mix={cn('hot')} />
        <O_Articles mix={cn('articles')} articles={{ids: aIds.slice(0, 6), entities:aEntities}} />
        <O_Video mix={cn('video')} {...{ids: vIds.slice(0, 2), entities: vEntities}} />
        <O_HotIco mix={cn('hot-ico')} />
        <div className={cn('news')}>
          <O_News  news={news} mix={cn('news-inner')}/>
          <A_Btn
            {...{
              type: "link",
              href: "/news",
              theme: "filled",
              color: "yellow",
              size: 'md',
              mix: cn('news-btn')
            }}
          >
            WCZESNE
          </A_Btn>
        </div>
        <O_Signals mix={cn('signals')} />
        <O_Tweets mix={cn('tweets')} />
      </A_Container>
    );
  }
}

export default Home
