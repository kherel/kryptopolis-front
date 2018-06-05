import React, { Component } from "react";
import T_Video from "templates/T_Video/T_Video";
import {loadVideo} from "redux-store/ducks/videos";

class Video extends Component {
  static async getInitialProps({ reduxStore, query }) {
    const video = await loadVideo(reduxStore, query);
    return {...video}
  }

  render() {
    return <T_Video {...this.props} />;
  }
}

export default Video