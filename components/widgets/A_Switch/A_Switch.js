import React, {Component} from 'react';
import * as T from 'prop-types';
import './A_Switch.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Switch')

class A_Switch extends Component {
  state = {
    switched: this.props.switched
  }

  _toggleSwitch = () => {
    const { switched } = this.state
    const { handleSwitch } = this.props

    this.setState({switched: !switched}, function () {
      handleSwitch(switched)
    })
  }

  render() {
    const  { switched } = this.state
    const { mix, disabled } = this.props

    return (
      <label className={cn([mix], {switched})}>
          <input
            type="checkbox"
            className={cn('native-switch')}
            checked={switched}
            disabled={disabled}
            onChange={() => this._toggleSwitch()}
          />
          <div className={cn('fake-switch')} />
          <div className={cn('fake-selector')} />
      </label>
    )
  }
}

A_Switch.propTypes = {
  mix: T.string, //BEM mixin from parent block
  switched: T.bool,
  disabled: T.bool,
  handleSwitch: T.func
};

A_Switch.defaultProps = {
  switched: false,
  disabled: false,
};

export default A_Switch