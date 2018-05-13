import React, {Component} from 'react'
import * as T from 'prop-types'
import './A_InputText.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('A_InputText')

class A_InputText extends Component {

  render(){
    const {mix, type, value, handleChange, placeholder, onFocus, error} = this.props

    const hasError = !!error
    return (
      <fieldset className={cn({hasError}, [mix])}>
        <input
          className={cn('input')}
          placeholder={placeholder}
          type={type}
          value={value}
          onFocus={onFocus}
          onChange={e => handleChange(e.target.value)}
        />
      </fieldset>
    )
  }
}

A_InputText.propTypes = {
  type: T.oneOf(['text', 'password']),
  handleChange: T.func.isRequired,
  value: T.string,
  placeholder: T.string
}

A_InputText.defaultProps = {
  type: 'text'
}

export default A_InputText