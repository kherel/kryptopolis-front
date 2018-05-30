import { Component } from 'react'
// import * as T from "prop-types"
import A_H from 'widgets/A_H/A_H'
import A_P from 'widgets/A_P/A_P'
import A_LabelTitle from 'widgets/A_LabelTitle/A_LabelTitle'
import A_Container from 'widgets/A_Container/A_Container'
import './T_NewsItem.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('T_NewsItem')

class T_NewsItem extends Component {

  render() {

    const {title, text, image} = this.props.newsItem

    return (
      <A_Container mix={cn()} padding='wide'>
        <section className={cn('content')}>
          <A_H type='article' mix={cn('title')}>{title}</A_H>
          <div className={cn('head')}>
            <A_LabelTitle size='lg' mix={cn('label')}>WIADOMOŚCI</A_LabelTitle>
            <div className={cn('credentials')}>
              <span className={cn('author')}>Marek Marecki</span>
              <span className={cn('date')}>13 godz. ago</span>
            </div>
          </div>
          <img className={cn('image')} src={image} />
          <p className={cn('article')} dangerouslySetInnerHTML={{__html: text}} />
          <div className={cn('share')}>Share:</div>
          <A_LabelTitle size='md' mix={cn('label')} hasBorder>WIĘCEJ</A_LabelTitle>
        </section>
        <aside className={cn('sidebar')}>

        </aside>
      </A_Container>
    )
  }
}

T_NewsItem.propTypes = {
}

T_NewsItem.defaultProps = {
}

export default T_NewsItem