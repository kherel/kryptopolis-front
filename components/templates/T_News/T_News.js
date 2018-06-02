import { Component } from 'react'
// import * as T from "prop-types"
import A_LabelTitle from 'widgets/A_LabelTitle/A_LabelTitle'
import A_Container from 'widgets/A_Container/A_Container'
import M_ArticleCard from 'widgets/M_ArticleCard/M_ArticleCard'
import './T_News.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('T_News')

class T_News extends Component {

  renderNewsItems = (news) => (
    news.map((newsItem, index) => {
      const link = `/news-item?id=${newsItem.id}`
      if(index !== news.length - 1) {
        return <M_ArticleCard key={newsItem.id} article={newsItem} articleLink={link} hasBorder/>
      } else {
        return <M_ArticleCard key={newsItem.id} article={newsItem} articleLink={link} />
      }
    })
  )

  _renderNewsItems = (ids, labelTitle) => {
    const label = (
      <A_LabelTitle size='lg' hasBorder>{labelTitle}</A_LabelTitle>
    );

    const getItem = (id, article, key, last) => <M_ArticleCard key={id} article={article} articleLink={`/news-item?id=${id}`} hasBorder={!last}/>

    return ids.map((id, i) => {
      const article = this.props.news.entities[id]
      if (i === 0) {
        return (
          <div key={id}>
            {label}
            {getItem(id, article)}
          </div>
        );

      } else {
        const last = i === ids.length - 1
        return (
          getItem(id, article, id, last)
        );
      }
    });
  };


  render() {
    const { news: { todayIds, yesterdayIds, othersIds } } = this.props
    return (
      <A_Container mix={cn()} padding='wide'>
        <section className={cn('content')}>
          {this._renderNewsItems(todayIds, "WIADOMOŚCI DZISIAJ")}
          {this._renderNewsItems(yesterdayIds, "WCZORAJ")}
          {this._renderNewsItems(othersIds, 'WCZESNE')}
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