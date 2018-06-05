import { Component } from 'react'
// import * as T from "prop-types"
import A_H from 'widgets/A_H/A_H'
import A_LabelTitle from 'widgets/A_LabelTitle/A_LabelTitle'
import A_Container from 'widgets/A_Container/A_Container'
import './T_Article.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('T_Article')
import moment from 'moment'
class T_Article extends Component {

  render() {

    const {title, text, image, user, showDate} = this.props

    return (
      <A_Container mix={cn()} padding='wide'>
        <section className={cn('content')}>
          <A_H mix={cn('title')} type='article'>{title}</A_H>
          <div className={cn('head')}>
            <A_LabelTitle size='lg' mix={cn('label')}>WIADOMOŚCI</A_LabelTitle>
            <div className={cn('credentials')}>
              <span className={cn('author')}>{user.name}</span>
              <span className={cn('date')}>{showDate}</span>
            </div>
          </div>
          <img className={cn('image')} src={image} />
          <div className={cn('article')} dangerouslySetInnerHTML={{__html: text}} />
          <div className={cn('share')}>Share:</div>
          <A_LabelTitle size='md' mix={cn('label')} hasBorder>WIĘCEJ</A_LabelTitle>
        </section>
        <aside className={cn('sidebar')}>

        </aside>
      </A_Container>
    )
  }
}

T_Article.propTypes = {
}

T_Article.defaultProps = {
}

export default T_Article