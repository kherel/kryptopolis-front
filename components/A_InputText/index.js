import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_InputText')

class A_InputText extends Component {

  state = {
    focused: false,
  }

  _handleFocus = () => {
    !this.props.loading && this.setState({focused: !this.state.focused})
  }

  render() {
    const { focused } = this.state
    const { mix, value, type, handleChange, placeholder, error, loading } = this.props
    const hasError = !!error

    return (
      <fieldset className={cn([mix],{error: hasError, focused})}>

        <input
          className={cn('input')}
          placeholder={placeholder}
          readOnly={loading}
          type={type}
          value={value}
          onChange={e => handleChange(e.target.value)}
          onFocus={() => this._handleFocus()}
          onBlur={() => this._handleFocus()}
        />
        {loading && <p className={cn('fake-placeholder')}>zeit.co/</p>}
        {loading && <div className={cn('loader')} />}
      </fieldset>
    )
  }
}

A_InputText.propTypes = {
  mix: T.string, //BEM mixin from parent block
  handleChange: T.func.isRequired,
  value: T.string.isRequired,
  placeHolder: T.string,
  loading: T.bool,
};

A_InputText.defaultProps = {
};

export default A_InputText