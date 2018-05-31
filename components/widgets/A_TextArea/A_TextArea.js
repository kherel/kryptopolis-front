import React, {Component} from 'react'
import * as T from 'prop-types'
import './A_TextArea.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('A_TextArea')

class A_TextArea extends Component {

  handleChange = (e) => {
    const {max} = this.props
    let text = e.target.value
    if(max){
      text = text.substring(0, max)
    }
    this.props.handleChange(text)
  }

  render(){
    const {mix, theme, value, handleChange, placeholder, onFocus, error, max} = this.props

    const hasError = !!error
    return (
      <fieldset className={cn({hasError, theme}, [mix])}>
        <textarea
          className={cn('textarea')}
          placeholder={placeholder}
          rows="4"
          value={value}
          onFocus={onFocus}
          onChange={this.handleChange}
        />
        {hasError && <span className={cn('error')}>{error}</span>}
        {max && <span className={cn('counter')}>{value.length} / {max}</span> }

      </fieldset>
    )
  }
}

A_TextArea.propTypes = {
  mix: T.string,
  theme: T.oneOf(['admin', 'user']),
  handleChange: T.func.isRequired,
  value: T.string,
  placeholder: T.string
}

A_TextArea.defaultProps = {
  theme: 'user'
}

export default A_TextArea