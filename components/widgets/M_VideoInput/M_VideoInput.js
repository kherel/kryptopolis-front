import React, { Component } from 'react'
import T from 'prop-types'

import {cssClassName} from 'utils'
import './M_VideoInput.scss'
import A_Btn from "widgets/A_Btn/A_Btn";
import A_InputText from "widgets/A_InputText/A_InputText";
const cn = cssClassName('M_VideoInput')
import YouTubePlayer from 'react-player/lib/players/YouTube'

class VideoInput extends Component {
  static propTypes = {
    input: T.object,
    meta: T.object,
    url: T.string,
    className: T.string,
  }

  state = {
    id: this.props.video || '',
  }

  handleSubmit(){
    this.props.handleSubmit(this.state.id)
  }

  render() {
    const { input, url, mix, error } = this.props

    return (
      <div className={cn([mix])}>
        <label className={cn('input')}>
          <A_InputText
            theme="admin"
            value={this.state.id}
            handleChange={id => this.setState({id})}
            placeholder="Enter youtube id here"
            error={this.props.error}
            mix={'input-text'}
          />
          <A_Btn theme='filled' color={"gray"} size='md' onClick={() => this.handleSubmit()} mix={cn('btn')} >Check id</A_Btn>
        </label>

        <div className={cn('video')}>
          <YouTubePlayer
            height='100%'
            width='100%'
            url={`https://www.youtube.com/watch?v=${this.props.video}`}
          />
        </div>
      </div>
    )
  }
}

export default VideoInput
