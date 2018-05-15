import { Component } from 'react'
// import * as T from "prop-types"
import A_InputText from 'widgets/A_InputText/A_InputText'
import A_H from 'widgets/A_H/A_H'
import A_Btn from 'widgets/A_Btn/A_Btn'
import './Registration.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('Registration')

class Registration extends Component {

  state = {
    user: '',
    password: '',
    passwordConfirm: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {user, password, passwordConfirm} = this.state
    console.log('submit', user, password, passwordConfirm)
  }

  render() {


    const {} = this.state

    return (
      <div className={cn()}>
        <A_H mix={cn('title')} type='section'>REJESTRACJA</A_H>

        <form className={cn('form')} onSubmit={this.handleSubmit}>
          <A_InputText
            mix={cn('input')}
            placeholder='E-MAIL'
            handleChange={user => this.setState({user})}
          />
          <A_InputText
            mix={cn('input')}
            type='password'
            placeholder='PASSWORD'
            handleChange={password => this.setState({password})}
          />
          <A_InputText
            mix={cn('input')}
            type='password'
            placeholder='RE-ENTER PASSWORD'
            handleChange={passwordConfirm => this.setState({passwordConfirm})}
          />
          <A_Btn mix={cn('submit-btn')} type='submit' theme='filled'>REJESTRACJA</A_Btn>
        </form>
      </div>
    )
  }
}

Registration.propTypes = {
}

Registration.defaultProps = {
}

export default Registration