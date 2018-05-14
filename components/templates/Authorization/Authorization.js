import { Component } from 'react'
// import * as T from "prop-types"
import O_Form from 'widgets/O_Form/O_Form'
import {cssClassName} from 'utils'
import './Authorization.scss'
const cn = cssClassName('Authorization')

class Authorization extends Component {

  state = {}

  render() {

 //   const {} = this.props
 //   const {} = this.state

    return (
      <O_Form formType='authorization' mix={cn()} />
    )
  }
}

/*
Authorization.propTypes = {
}

Authorization.defaultProps = {
}
*/

export default Authorization