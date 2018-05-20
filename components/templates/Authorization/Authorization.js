import { Component } from 'react'
// import * as T from "prop-types"
import A_InputText from 'widgets/A_InputText/A_InputText'
import A_H from 'widgets/A_H/A_H'
import A_Btn from 'widgets/A_Btn/A_Btn'
import A_Link from 'widgets/A_Link/A_Link'
import './Authorization.scss'
import {cssClassName} from 'utils'
import {required, isEmail} from 'utils/validateHelpers'
//import {userErrorClear} from "redux-store/ducks/auth";
const cn = cssClassName('Authorization')
import Router from 'next/router'

class Authorization extends Component {

  state = {
    form: {
      email: '',
      password: ''
    },
    validations: {
      email: [required, isEmail],
      password: [required]
    },
    formValid: false,
    errors: {}
  }


  validateFields = (formValues, onFinish) => {
    const {validations} = this.state
    let errors = {}

    Object.keys(formValues).forEach(fieldName => {
      if(validations[fieldName]) {
        validations[fieldName].forEach(validation => {
          if(errors[fieldName]) return
          errors[fieldName] = validation(formValues[fieldName])
        })
      }
    })

    const hasErrors = Object.values(errors).filter(x => !!x).length > 0

    this.setState({errors, formValid: !hasErrors}, () => onFinish())
  }

  handleChange = (fieldValue, fieldName) => {
    const { form, errors } = this.state

    this.setState({
      form: {
        ...form,
        [fieldName]: fieldValue
      },
      errors: {
        ...errors,
        [fieldName]: undefined
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {form} = this.state

    this.props.cleanLoginError()

    this.validateFields(form, () => {
      this.state.formValid && this.props.handleUserLogin(form.email, form.password)
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.loginError) {
      return {
        errors:{...prevState.errors, email: 'User not found'}
      }
    }
    return null;
  }

  componentDidUpdate(prevProps){
    if(!prevProps.loggedIn && this.props.loggedIn){
      Router.push(this.props.redirectUrl)
    }
  }



  render() {

    const {email, password, errors} = this.state

    return (
      <div className={cn()}>
        <A_H mix={cn('title')} type='section'>LOGOWANIE</A_H>

        <form className={cn('form')} onSubmit={this.handleSubmit}>
          <A_InputText
            mix={cn('input')}
            value={email}
            placeholder='USER NAME OR E-MAIL'
            handleChange={value => this.handleChange(value, 'email')}
            error = {errors.email}
          />
          <A_InputText
            mix={cn('input')}
            type='password'
            value={password}
            placeholder='PASSWORD'
            handleChange={value => this.handleChange(value, 'password')}
            error = {errors.password}
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