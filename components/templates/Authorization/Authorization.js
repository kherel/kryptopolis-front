import { Component } from 'react'
// import * as T from "prop-types"
import A_InputText from 'widgets/A_InputText/A_InputText'
import A_H from 'widgets/A_H/A_H'
import A_Btn from 'widgets/A_Btn/A_Btn'
import A_Link from 'widgets/A_Link/A_Link'
import './Authorization.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('Authorization')

class Authorization extends Component {

  state = {}

  render() {

    //   const {} = this.props
    //   const {} = this.state

    return (
      <div className={cn()}>
        <A_H mix={cn('title')} type='section'>LOGOWANIE</A_H>

        <form className={cn('form')}>
          <A_InputText
            mix={cn('input')}
            placeholder='USER NAME OR E-MAIL'
            handleChange={value => console.log(value)}
          />
          <A_InputText
            mix={cn('input')}
            type='password'
            placeholder='PASSWORD'
            handleChange={value => console.log(value)}
          />
          <A_Link mix={cn('forgot-password')} href='/forgot-password'>
            ZAPOMNIJ SWOJE HASŁO?
          </A_Link>
          <A_Btn mix={cn('submit-btn')} type='submit' theme='filled'>ZAPISZ SIĘ</A_Btn>
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