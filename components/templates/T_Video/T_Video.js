import { Component } from 'react'
// import * as T from "prop-types"
import A_H from 'widgets/A_H/A_H'
import A_LabelTitle from 'widgets/A_LabelTitle/A_LabelTitle'
import A_Container from 'widgets/A_Container/A_Container'
import './T_Video.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('T_Video')
import YouTubePlayer from 'react-player/lib/players/YouTube'

class T_Video extends Component {

  render() {

    const {title, text, video, user, showDate} = this.props

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
          <div className={cn('video')}>
            <YouTubePlayer
              className={cn('video-player')}
              height='100%'
              width='100%'
              playing
              url={`https://www.youtube.com/watch?v=${this.props.video}`}
            />
          </div>
          <p>{text}</p>
          {/*<img className={cn('image')} src={image} />*/}
          <div className={cn('share')}>Share:</div>
          <A_LabelTitle size='md' mix={cn('label')} hasBorder>WIĘCEJ</A_LabelTitle>
        </section>
        <aside className={cn('sidebar')}>

        </aside>
      </A_Container>
    )
  }
}

T_Video.propTypes = {
}

T_Video.defaultProps = {
}

export default T_Video