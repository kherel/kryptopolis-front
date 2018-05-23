import { Component } from 'react';
import A_Btn from "widgets/A_Btn/A_Btn";
// import * as T from "prop-types";
import './O_AdminNewsItem.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_AdminNewsItem')

const O_AdminNewsItem = ({mix, date, title}) => (
  <li className={cn([mix])}>
    <div className={cn('date')}>{date}</div>
    <p className={cn('title')}>{title}</p>
    <A_Btn mix={cn('edit-btn')} size='sm' theme='filled' color='gray'>Edite</A_Btn>
    <A_Btn size='sm' theme='filled' color='red'>Delelte</A_Btn>
  </li>
)

O_AdminNewsItem.propTypes = {
};

O_AdminNewsItem.defaultProps = {
}

export default O_AdminNewsItem