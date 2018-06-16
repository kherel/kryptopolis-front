import { Component } from "react";
import { isEmail, required } from "utils/validateHelpers";

export default (WrappedComponent, config) =>
  class onePageFormHOC extends Component {
    state = {
      values: config.setValues.bind(this)(),
      validations: config.validations,
      formValid: false,
      errors: {}
    };

    handleChange = (fieldObj) => {
      const fieldName = Object.keys(fieldObj)[0]
      const fieldValue = fieldObj[fieldName]

      const { values, errors } = this.state;

      this.setState({
        values: {
          ...values,
          [fieldName]: fieldValue
        },
        errors: {
          ...errors,
          [fieldName]: undefined
        }
      });
    };


    validateForm = (onFinish) => {
      const { validations, values } = this.state;
      let errors = {};

      Object.keys(values).forEach(fieldName => {
        if (validations[fieldName]) {
          validations[fieldName].forEach(validation => {
            if (errors[fieldName]) return;
            errors[fieldName] = validation(values[fieldName], this.props);
          });
        }
      });

      const hasErrors = Object.values(errors).filter(x => !!x).length > 0;

      this.setState({ errors, formValid: !hasErrors }, () => this.state.formValid && onFinish());
    };

    render() {
      const { errors, values, formValid } = this.state;
      return (
        <WrappedComponent
          {...{
            ...this.props,
            errors,
            values,
            formValid,
            validateForm: this.validateForm,
            handleChange: this.handleChange,

          }}
        />
      );
    }
  };
