import { Component } from 'react'
// import * as T from "prop-types"
import A_LabelTitle from 'widgets/A_LabelTitle/A_LabelTitle'
import A_Container from 'widgets/A_Container/A_Container'
import M_ArticleCard from 'widgets/M_ArticleCard/M_ArticleCard'
import './News.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('News')

class News extends Component {

  render() {

    return (
      <A_Container mix={cn()} padding='wide'>
        <section className={cn('content')}>
          <A_LabelTitle size='lg' hasBorder>WIADOMOŚCI DZISIAJ</A_LabelTitle>
          <M_ArticleCard />
          <M_ArticleCard />
          <M_ArticleCard />
        </section>
        <aside className={cn('sidebar')}>

        </aside>
      </A_Container>
    )
  }
}

News.propTypes = {
}

News.defaultProps = {
}

export default News