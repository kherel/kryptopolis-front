import React, {Component} from 'react'
/*import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'*/
import * as T from "prop-types";
import O_Form_Authorization from './O_Form_Authorization/O_Form_Authorization'
/*import O_Form_Registration from './O_Form_Registration/O_Form_Registration'*/
/*import {submit} from 'store/entities/simpleForms/actions'*/

class O_Form extends Component {

  getForm(formType, {submit, ...props}) {
    switch(formType){
      case 'authorization':
        return <O_Form_Authorization {...props} />
/*        return <O_Form_Authorization {...props} handleSubmit={data => submit('subscribe', data)} />;*/
    }
  }

  render() {
    const { formType } = this.props;

    return (
      formType ? (
        this.getForm(formType, this.props)
      ):(null)
    )
  }

}

O_Form.propTypes = {
  formType: T.oneOf([
    'authorization',
    'registration',
  ])
}

export default O_Form

/*
function mapStateToProps(){
  return {}
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ submit}, dispatch)
  return {...actions};
}

export default connect(mapStateToProps, mapDispatchToProps)(O_SimpleForm_H);*/
