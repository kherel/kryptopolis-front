import React, {Component} from 'react'
import * as T from 'prop-types'
import './A_InputText.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('A_InputText')

class A_InputText extends Component {

  render(){
    const {mix, theme, type, value, handleChange, placeholder, onFocus, error} = this.props

    const hasError = !!error
    return (
      <fieldset className={cn({hasError, theme}, [mix])}>
        <input
          className={cn('input')}
          placeholder={placeholder}
          type={type}
          value={value}
          onFocus={onFocus}
          onChange={e => handleChange(e.target.value)}
        />
        {hasError && <span className={cn('error')}>{error}</span>}
      </fieldset>
    )
  }
}

A_InputText.propTypes = {
  mix: T.string,
  type: T.oneOf(['text', 'password']),
  theme: T.oneOf(['admin', 'user']),
  handleChange: T.func.isRequired,
  value: T.string,
  placeholder: T.string
}

A_InputText.defaultProps = {
  type: 'text',
  theme: 'user'
}

export default A_InputText