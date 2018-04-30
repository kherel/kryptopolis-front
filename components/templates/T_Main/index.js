import React, { Component } from 'react'
import {cssClassName} from 'utils'
import './styles.scss'

const cn = cssClassName('T_Main')

class T_Main extends Component {

  render() {
    const { status, setStatus, pathname} = this.props

    return (
      <div className={cn()}>
        <p>path: {pathname}</p>
        <br/>
        <p>status: {status}</p>
        <button onClick={() => setStatus('button push')}>push me</button>
      </div>
    );
  }
}

export default T_Main
