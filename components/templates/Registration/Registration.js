import { Component } from 'react'
// import * as T from "prop-types"
import A_InputText from 'widgets/A_InputText/A_InputText'
import A_H from 'widgets/A_H/A_H'
import A_Btn from 'widgets/A_Btn/A_Btn'
import './Registration.scss'
import {cssClassName} from 'utils'
import {isEmail, required, equalToField} from "../../../utils/validateHelpers";
const cn = cssClassName('Registration')

class Registration extends Component {

  state = {
    form: {
      email: '',
      password: '',
      passwordConfirm: ''
    },
    validations: {
      email: [required, isEmail],
      password: [required],
      passwordConfirm: [required, equalToField('password')]
    },
    formValid: false,
    errors: {}
  }

  validateFields = (formValues, onFinish) => {
    const
      {form, validations} = this.state
    let errors = {}

    Object.keys(formValues).forEach(fieldName => {
      if(validations[fieldName]) {
        validations[fieldName].forEach(validation => {
          if(errors[fieldName]) return
          errors[fieldName] = validation(formValues[fieldName], form)
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

    this.validateFields(form, () => {
      this.state.formValid && console.log('submit values', form.email, form.password, form.passwordConfirm)
    })
  }

  render() {


    const { email, password, passwordConfirm, errors } = this.state

    return (
      <div className={cn()}>
        <A_H mix={cn('title')} type='section'>REJESTRACJA</A_H>

        <form className={cn('form')} onSubmit={this.handleSubmit}>
          <A_InputText
            mix={cn('input')}
            value={email}
            placeholder='E-MAIL'
            handleChange={value => this.handleChange(value, 'email')}
            error = {errors.email}
          />
          <A_InputText
            mix={cn('input')}
            value={password}
            type='password'
            placeholder='PASSWORD'
            handleChange={value => this.handleChange(value, 'password')}
            error = {errors.password}
          />
          <A_InputText
            mix={cn('input')}
            value={passwordConfirm}
            type='password'
            placeholder='RE-ENTER PASSWORD'
            handleChange={value => this.handleChange(value, 'passwordConfirm')}
            error = {errors.passwordConfirm}
          />
          <A_Btn
            mix={cn('submit-btn')}
            type='submit'
            theme='filled'
            size='lg'
            color='yellow'
          >
            REJESTRACJA
          </A_Btn>
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