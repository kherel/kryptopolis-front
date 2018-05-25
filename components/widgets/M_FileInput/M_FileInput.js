import React, { Component } from 'react'
import T from 'prop-types'

import {cssClassName} from 'utils'
import './M_FileInput.scss'
import A_Svg from "widgets/A_Svg/Svg";
const cn = cssClassName('M_FileInput')

class FileInput extends Component {
  static propTypes = {
    input: T.object,
    meta: T.object,
    url: T.string,
    className: T.string,
  }

  state = {
    preview: null,
  }

  onChange = e => {
    const file = e.target.files[0]
    this.props.handleChange(file)

    if (!file) return
    let reader = new FileReader()

    reader.onloadend = () => {
      this.setState({
        preview: reader.result,
      })
    }
    reader.readAsDataURL(file)
  }

  render() {
    const { input, url, children } = this.props
    const { preview } = this.state

    return (
      <label className={cn()}>
        {url ? (
          preview ? (
            <img src={preview} className={cn('preview')}/>
          ) : (
            <div>
              <img src={url} className={cn('preview')} />
            </div>
          )
        ) : (preview ? (
          <img src={preview} className={cn('preview')} />
          ) : (
            <span className={cn('button')}>Upload</span>
          )
        )}
        <input className={cn('input')} type="file" onChange={this.onChange} />
        <span className={cn('text')}>
          {children}
        </span>
      </label>
    )
  }
}

export default FileInput
