import { Component } from "react";
import A_Container from "widgets/A_Container/A_Container";
import A_H from "widgets/A_H/A_H";
import A_InputText from "widgets/A_InputText/A_InputText";
import "./T_Wiki.scss";
import { cssClassName } from "utils";
import { articlesLetter, articlesArr } from "data/wiki";
const cn = cssClassName("T_Wiki");

class T_Wiki extends Component {
  state = {
    active: "all",
    search: ""
  };

  getArticles(active, search) {
    if (active === "all" && search === "") {
      return articlesArr;
    } else if (search) {
      return articlesArr.filter(
        item => item.title.toLowerCase().includes(search.toLowerCase()) || item.content.toLowerCase().includes(search)
      );
    } else {
      return active === "all"
        ? articlesArr
        : articlesArr.filter(({ title }) => title.slice(0, 1) === active);
    }
  }
  render() {
    const { active, search } = this.state;
    const articles = this.getArticles(active, search);

    return (
      <A_Container mix={cn()} padding="wide">
        <A_H mix={cn("title")} type="section">
          Wiki
        </A_H>
        <div className={cn("controls")}>
          <ul className={cn("menu")}>
            {articlesLetter.map(item => {
              const isActive = item === active;
              return (
                <li
                  key={item}
                  className={cn("menu-item", { active: isActive })}
                  onClick={() => {
                    this.setState({ active: item, search: "" });
                    window.scrollTo(0, 0);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <div className={cn("search")}>
            <div className={cn("search-icon")} />
            <A_InputText
              mix={cn("search-input")}
              placeholder="Find by name"
              value={search}
              handleChange={search => {
                this.setState({ active: "all", search });
                window.scrollTo(0, 0);
              }}
            />
          </div>
        </div>

        {articles.length ? (
          articles.map(({ title, content }, i) => (
            <article className={cn("article")} key={i}>
              <A_H mix={cn("article-title")} type="widget">
                {title}
              </A_H>
              <p className={cn("article-text")}>{content}</p>
            </article>
          ))
        ) : (
          <article className={cn("article")}>
            <A_H mix={cn("article-title")} type="widget">
              no results
            </A_H>
          </article>

        )}
      </A_Container>
    );
  }
}

export default T_Wiki;
