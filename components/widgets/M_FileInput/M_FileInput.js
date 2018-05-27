import React, { Component } from 'react'
import T from 'prop-types'

import {cssClassName} from 'utils'
import './M_FileInput.scss'
import A_Btn from "widgets/A_Btn/A_Btn";
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
    const { input, url, mix, error } = this.props
    const { preview } = this.state

    return (
      <div className={cn([mix])}>
        <label className={cn('input')}>
          {url ? (
            preview ? ([
              <img key='img' src={preview} className={cn('preview')} />,
              <A_Btn key='btn' theme='filled' color={"gray"} size='sm'>Change photo</A_Btn>
            ]) : ([
              <img key='img' src={url} className={cn('preview')} />,
              <A_Btn key='btn' theme='filled' color={"gray"} size='sm'>Change photo</A_Btn>
            ])
          ) : (preview ? ([
              <img key='img' src={preview} className={cn('preview')} />,
              <A_Btn key='btn' theme='filled' color={"gray"} size='sm'>Change photo</A_Btn>
            ]) : (
              <A_Btn theme='filled' color={"gray"} size='md'>Add photo</A_Btn>
            )
          )}
          <input className={cn('native-input')} type="file" onChange={this.onChange} />
        </label>

        {!!error && <span className={cn('error')}>{error}</span>}
      </div>
    )
  }
}

export default FileInput
