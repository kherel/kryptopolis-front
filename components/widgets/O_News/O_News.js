import React, { Component, Fragment } from "react";
import * as T from "prop-types";
import A_H from "widgets/A_H/A_H";
import A_Link from "widgets/A_Link/A_Link";
import A_LabelTitle from "widgets/A_LabelTitle/A_LabelTitle";
import { cssClassName } from "utils/index";
import "./O_News.scss";

const cn = cssClassName("O_News");

class O_News extends Component {

  _renderNewsItems = (ids, labelTitle) => {
    const label = (
      <A_LabelTitle mix={cn("label")} size="sm">
        {labelTitle}
      </A_LabelTitle>
    );
    const getItem = (id, text, key) => (
      <div key={key}>
        <A_Link mix={cn("item")} href={`/news-item?id=${id}`}>
          {text}
        </A_Link>
      </div>
    );

    return ids.map((id, i) => {
      const {title} = this.props.news.entities[id]
      if (i) {
        return (
          getItem(id, title, id)
        );
      } else {
        return (
          <div key={id}>
            {label}
            {getItem(id, title)}
          </div>
        );
      }
    });
  };

  render() {
    const { mix, news: { todayIds, yesterdayIds, othersIds } } = this.props;
    return (
      <div className={cn([mix])}>
        <A_H mix={cn("title")} type="section">
          WIADOMOŚCI
        </A_H>
        {this._renderNewsItems(todayIds, "DZISIAJ")}
        {this._renderNewsItems(yesterdayIds, "WCZORAJ")}
        {this._renderNewsItems(othersIds, 'WCZESNE')}
      </div>
    );
  }
}

O_News.propTypes = {
  mix: T.string
};

export default O_News;
