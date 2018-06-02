import { Component } from "react";
import A_Container from "widgets/A_Container/A_Container";
import A_H from "widgets/A_H/A_H";
import A_Btn from "widgets/A_Btn/A_Btn";
import A_InputText from "widgets/A_InputText/A_InputText";
import O_AdminNewsItem from "./O_AdminNewsItem/O_AdminNewsItem";
// import * as T from "prop-types";
import "./T_AdminNews.scss";
import { cssClassName } from "utils";
import { removeNews } from "redux-store/ducks/news";
import * as T from "prop-types";
const cn = cssClassName("T_AdminNews");

class T_Admin_News extends Component {
  state = {};

  render() {
    const { loaded, entities, removeNews, ids } = this.props;

    return (
      <A_Container mix={cn()} padding="wide">
        <A_H mix={cn("title")} type="article">
          WIADOMOŚCI
        </A_H>

        <div className={cn("controls")}>
          <A_Btn size="md" theme="filled" color="yellow" type='link' href={'/admin/news-item'}>
            CREAT NEW
          </A_Btn>
          <div className={cn("search")}>
            <div className={cn("search-icon")} />
            <A_InputText
              mix={cn("search-input")}
              value=""
              placeholder="Find by name"
              handleChange={() => null}
            />
          </div>
        </div>

        <ul className={cn("items-list")}>
          {ids.map(id => (
            <O_AdminNewsItem
              {...{id, ...entities[id], removeNews: () => removeNews(id), mix: "item", key: id }}
            />
          ))}
        </ul>
      </A_Container>
    );
  }
  q;
}

T_Admin_News.propTypes = {
  removeNews: T.func.isRequired

};

T_Admin_News.defaultProps = {};

export default T_Admin_News;
