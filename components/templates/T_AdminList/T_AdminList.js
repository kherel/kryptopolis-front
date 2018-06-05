import { Component } from "react";
import A_Container from "widgets/A_Container/A_Container";
import A_H from "widgets/A_H/A_H";
import A_Btn from "widgets/A_Btn/A_Btn";
import A_InputText from "widgets/A_InputText/A_InputText";
import O_AdminListCard from "./O_AdminListCard/O_AdminListCard";
// import * as T from "prop-types";
import "./T_AdminList.scss";
import { cssClassName } from "utils";
import * as T from "prop-types";
const cn = cssClassName("T_AdminList");

class T_Admin_News extends Component {
  state = {};

  render() {
    const { loaded, entities, removeItem, ids, reducerType } = this.props;
    let title, urlPath;

    switch (reducerType){
      case 'articles':
        urlPath = '/admin/article'
        title= 'ARTYKUŁY'
        break;
      case 'news':
        urlPath = '/admin/article'
        title= 'ARTYKUŁY'
        break;
      case 'videos':
        urlPath =  '/admin/video'
        title= 'WIDEO'
    }

    return (
      <A_Container mix={cn()} padding="wide">
        <A_H mix={cn("title")} type="article">
          {title}
        </A_H>

        <div className={cn("controls")}>
          <A_Btn size="md" theme="filled" color="yellow" type='link' href={urlPath}>
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
            <O_AdminListCard
              {...{id, ...entities[id], href:`${urlPath}?id=${id}`, removeItem: () => removeItem(id), mix: "item", key: id }}
            />
          ))}
        </ul>
      </A_Container>
    );
  }
  q;
}

T_Admin_News.propTypes = {
  removeItem: T.func.isRequired

};

T_Admin_News.defaultProps = {};

export default T_Admin_News;
