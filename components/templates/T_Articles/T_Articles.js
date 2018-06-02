import { Component } from 'react'
// import * as T from "prop-types"
import A_LabelTitle from 'widgets/A_LabelTitle/A_LabelTitle'
import A_Container from 'widgets/A_Container/A_Container'
import M_ArticleCard from 'widgets/M_ArticleCard/M_ArticleCard'
import './T_Articles.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('T_Articles')

class T_Articles extends Component {

  _renderArticles = (articles) => (
    articles.map((article, index) => {
      const link = `/article?id=${article.id}`
      if(index !== articles.length - 1) {
        return <M_ArticleCard key={article.id} article={article} articleLink={link} hasBorder/>
      } else {
        return <M_ArticleCard key={article.id} article={article} articleLink={link} />
      }
    })
  )

  render() {
    const { articles } = this.props
    return (
      <A_Container mix={cn()} padding='wide'>
        <section className={cn('content')}>
          <A_LabelTitle size='lg' hasBorder>ARTYKUŁY</A_LabelTitle>
          {this._renderArticles(articles)}
          <A_LabelTitle size='lg' hasBorder>WCZESNE</A_LabelTitle>
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