import { Component } from "react";
import A_Btn from "widgets/A_Btn/A_Btn";
import * as T from "prop-types";
import "./O_AdminNewsItem.scss";
import { cssClassName } from "utils";
const cn = cssClassName("O_AdminNewsItem");

const O_AdminNewsItem = ({ mix, date, title, id, removeNews }) => (
  <li className={cn([mix])}>
    <div className={cn("date")}>{date}</div>
    <p className={cn("title")}>{title}</p>
    <A_Btn
      mix={cn("edit-btn")}
      size="sm"
      theme="filled"
      color="gray"
      type={'link'}
      href={`/admin/news-item?id=${id}`}
    >
      Edite
    </A_Btn>
    <A_Btn size="sm" theme="filled" color="red" onClick={removeNews}>
      Delelte
    </A_Btn>
  </li>
);

O_AdminNewsItem.propTypes = {
  removeNews: T.func.isRequired
};

O_AdminNewsItem.defaultProps = {};

export default O_AdminNewsItem;
