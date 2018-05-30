import { Component } from 'react'
// import * as T from "prop-types"
import A_LabelTitle from 'widgets/A_LabelTitle/A_LabelTitle'
import A_Container from 'widgets/A_Container/A_Container'
import M_ArticleCard from 'widgets/M_ArticleCard/M_ArticleCard'
import './T_News.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('T_News')

class T_News extends Component {

  _renderNewsItems = (news) => (
    news.map((newsItem, index) => {
      const link = `/news-item?id=${newsItem.id}`
      if(index !== news.length - 1) {
        return <M_ArticleCard key={newsItem.id} article={newsItem} articleLink={link} hasBorder/>
      } else {
        return <M_ArticleCard key={newsItem.id} article={newsItem} articleLink={link} />
      }
    })
  )

  render() {
    const { news:{todayNews, yesterdayNews} } = this.props
    return (
      <A_Container mix={cn()} padding='wide'>
        <section className={cn('content')}>
          <A_LabelTitle size='lg' hasBorder>WIADOMOŚCI DZISIAJ</A_LabelTitle>
          {this._renderNewsItems(todayNews)}
          <A_LabelTitle size='lg' hasBorder>WCZORAJ</A_LabelTitle>
          {this._renderNewsItems(yesterdayNews)}
          <A_LabelTitle size='lg' hasBorder>WCZESNE</A_LabelTitle>
        </section>
        <aside className={cn('sidebar')}>

        </aside>
      </A_Container>
    )
  }
}

T_News.propTypes = {
}

T_News.defaultProps = {
}

export default T_News