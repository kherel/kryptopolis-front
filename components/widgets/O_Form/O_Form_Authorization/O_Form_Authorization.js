import { Component } from 'react'
// import * as T from "prop-types"
import A_InputText from 'widgets/A_InputText/A_InputText'
import A_H from 'widgets/A_H/A_H'
import A_Link from 'widgets/A_Link/A_Link'
import A_Btn from 'widgets/A_Btn/A_Btn'
import './O_Form_Authorization.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('O_Form_Authorization')

class O_Form_Authorization extends Component {

  state = {}

  render() {

    const {mix} = this.props
    //   const {} = this.state

    return (
      <form className={cn([mix])}>
        <A_H mix={cn('title')} type='section'>LOGOWANIE</A_H>
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
        <A_Btn type='submit' mix={cn('submit-btn')}>ZAPISZ SIĘ</A_Btn>
        <A_Link mix={cn('register-link')} href='register'>
          REJESTRACJA
        </A_Link>
      </form>
    )
  }
}

/*
O_Form_Authorization.propTypes = {
}

O_Form_Authorization.defaultProps = {
}
*/

export default O_Form_Authorization