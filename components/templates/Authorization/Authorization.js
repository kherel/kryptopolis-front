import { Component } from 'react'
// import * as T from "prop-types"
import A_InputText from 'widgets/A_InputText/A_InputText'
import A_H from 'widgets/A_H/A_H'
import A_Btn from 'widgets/A_Btn/A_Btn'
import A_Link from 'widgets/A_Link/A_Link'
import './Authorization.scss'
import {cssClassName} from 'utils'
import {userErrorClear} from "redux-store/ducks/auth";
const cn = cssClassName('Authorization')
import Router from 'next/router'

class Authorization extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    this.props.handleUserLogin({email, password})
  }

  componentDidUpdate(prevProps){
    if(!prevProps.loggedIn && this.props.loggedIn){
      Router.push(this.props.redirectUrl)
    }
  }


  render() {

    const {email, password} = this.state

    return (
      <div className={cn()}>
        <A_H mix={cn('title')} type='section'>LOGOWANIE</A_H>

        <form className={cn('form')} onSubmit={this.handleSubmit}>
          <A_InputText
            mix={cn('input')}
            value={email}
            placeholder='USER NAME OR E-MAIL'
            handleChange={email => this.setState({email})}
          />
          <A_InputText
            mix={cn('input')}
            type='password'
            value={password}
            placeholder='PASSWORD'
            handleChange={password => this.setState({password})}
          />
          <A_Link mix={cn('forgot-password')} href='/forgot-password'>
            ZAPOMNIJ SWOJE HASŁO?
          </A_Link>
          <A_Btn
            mix={cn('submit-btn')}
            type='submit'
            theme='filled'
            size='lg'
            color='yellow'
          >
            ZAPISZ SIĘ
          </A_Btn>
        </form>

        <A_Link mix={cn('register-link')} href='register'>
          REJESTRACJA
        </A_Link>
      </div>
    )
  }
}

Authorization.propTypes = {
}

Authorization.defaultProps = {
}

export default Authorization