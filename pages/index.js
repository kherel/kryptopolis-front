import React, { Component } from "react";
import moment from 'moment'
import { setStatus } from "redux-store/ducks/appStatus";
//import Layout from "layout/MainLayout/MainLayout";
import Home from "templates/Home/Home";
//import * as T from "prop-types";
import { loadNews } from "redux-store/ducks/news";
import {loadArticles} from "../redux-store/ducks/articles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Link from "next/link";

class Index extends Component {
  static async getInitialProps({ reduxStore }, ...props) {
    await loadNews(reduxStore);
    await loadArticles(reduxStore);
    return { props };
  }

  render() {
    return (
      <div>
        <Link href={"/admin"}>
          <a>index</a>
        </Link>
        <Home {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { email } = state.auth;
  const news = mapNews(state.news.entities)
  const articles = state.articles.entities

  return { email, news, articles };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ setStatus }, dispatch);
  return { ...actions };
}

function mapNews(rawNews) {

  const
    today = moment(),
    yesterday = moment().subtract(1,'day')

  let result = {
    todayNews: [],
    yesterdayNews: []
  }

  rawNews.forEach(({id, publish, createdAt, title}) => {
    if(publish) {
      const releaseDate = moment(createdAt)

      if(releaseDate.isSame(today, 'day')) {
        result.todayNews.push({id, title})
      }
      else if(releaseDate.isSame(yesterday, 'day')) {
        result.yesterdayNews.push({id, title})
      }
    }
  })

  return result
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
