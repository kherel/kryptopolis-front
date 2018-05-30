import React, { Component } from "react";
import moment from "moment/moment";
import { loadNews } from "redux-store/ducks/news";
import { connect } from "react-redux";
import T_News from "templates/T_News/T_News";
import * as T from "prop-types";

class News extends Component {
  static async getInitialProps({ reduxStore }, ...props) {
    await loadNews(reduxStore);
    return { props };
  }

  render() {
    return <T_News {...this.props} />;
  }
}

function mapStateToProps(state) {
  const news = mapNews(state.news.entities)
  return { news };
}

function mapNews(rawNews) {

  const
    today = moment(),
    yesterday = moment().subtract(1,'day')

  let result = {
    todayNews: [],
    yesterdayNews: []
  }

  rawNews.forEach(({id, publish, createdAt, title, text, image}) => {
    if(publish) {
      const releaseDate = moment(createdAt)

      if(releaseDate.isSame(today, 'day')) {
        result.todayNews.push({id, title, text, image})
      }
      else if(releaseDate.isSame(yesterday, 'day')) {
        result.yesterdayNews.push({id, title, text, image})
      }
    }
  })

  return result
}

export default connect(mapStateToProps)(News);