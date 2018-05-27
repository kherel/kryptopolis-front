import React, {Component} from 'react'
import * as T from 'prop-types'
import A_Btn from "widgets/A_Btn/A_Btn";
import {cssClassName} from 'utils'
import './M_AdminNewsItem_Datepicker.scss'
const cn = cssClassName('M_AdminNewsItem_Datepicker')

class M_AdminNewsItem_Datepicker extends Component {

  render(){
    const {value, onClick} = this.props

    return (
      <div className={cn()}>
        <p className={cn('value')}>{value ? value : 'time in UTC time zone'}</p>
        <A_Btn
          onClick={onClick}
          theme={"filled"}
          color={"gray"}
          size={"sm"}
        >
          Edite
        </A_Btn>
      </div>
    )
  }
}

M_AdminNewsItem_Datepicker.propTypes = {
  onClick: T.func,
  value: T.string
}

M_AdminNewsItem_Datepicker.defaultProps = {

}

export default M_AdminNewsItem_Datepicker