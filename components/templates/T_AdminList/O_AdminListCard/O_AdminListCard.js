import { Component } from "react";
import A_Btn from "widgets/A_Btn/A_Btn";
import * as T from "prop-types";
import "./O_AdminNewsItem.scss";
import { cssClassName } from "utils";
const cn = cssClassName("O_AdminListCard");

const O_AdminListCard = ({ mix, date, title, id, href, removeItem }) => (
  <li className={cn([mix])}>
    <div className={cn("date")}>{date}</div>
    <p className={cn("title")}>{title}</p>
    <A_Btn
      mix={cn("edit-btn")}
      size="sm"
      theme="filled"
      color="gray"
      type={'link'}
      href={href}
    >
      Edite
    </A_Btn>
    <A_Btn size="sm" theme="filled" color="red" onClick={removeItem}>
      Delelte
    </A_Btn>
  </li>
);

O_AdminListCard.propTypes = {
  removeItem: T.func.isRequired
};

O_AdminListCard.defaultProps = {};

export default O_AdminListCard;
