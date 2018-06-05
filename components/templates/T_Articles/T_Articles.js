import { Component } from 'react'
// import * as T from "prop-types"
import A_LabelTitle from 'widgets/A_LabelTitle/A_LabelTitle'
import A_Container from 'widgets/A_Container/A_Container'
import M_ArticleCard from 'widgets/M_ArticleCard/M_ArticleCard'
import './T_Articles.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('T_Articles')

class T_Articles extends Component {

  renderNewsItems = (articles) => (
    articles.map((articlesItem, index) => {
      const link = `/article?id=${articlesItem.id}`
      if(index !== articles.length - 1) {
        return <M_ArticleCard key={articlesItem.id} article={articlesItem} articleLink={link} hasBorder/>
      } else {
        return <M_ArticleCard key={articlesItem.id} article={articlesItem} articleLink={link} />
      }
    })
  )

  _renderNewsItems = (ids, labelTitle) => {
    const label = (
      <A_LabelTitle size='lg' hasBorder>{labelTitle}</A_LabelTitle>
    );

    const getItem = (id, article, key, last) => <M_ArticleCard key={id} article={article} articleLink={`/article?id=${id}`} hasBorder={!last}/>

    return ids.map((id, i) => {
      const article = this.props.articles.entities[id]
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
    const { articles: { todayIds, yesterdayIds, othersIds } } = this.props
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

T_Articles.propTypes = {
}

T_Articles.defaultProps = {
}

export default T_Articles