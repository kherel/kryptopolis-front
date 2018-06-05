import { Component } from "react";
import authorizationHOC from "HOC/authorizationHOC";
import { createVideo, updateVideo, loadVideo } from "redux-store/ducks/videos";
import { isEmpty } from "ramda";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import T_AdminVideo from 'templates/T_AdminVideo/T_AdminVideo'

class AdminVideoItem extends Component {
  static async getInitialProps({ reduxStore, query }) {
    const { id } = query;
    let type = "create";

    if (!id) {
      return { type };
    }

    const video = await loadVideo(reduxStore, query);
    if (!isEmpty(video)) {
      type = "update";
    }

    return { ...video, type, id };
  }

  render() {
    const {createVideo, updateVideo, type, id, ...props} = this.props
    const handleSubmit = type === 'update' ? (...arg) => updateVideo(id, ...arg) : createVideo

    return <T_AdminVideo {...{...props, handleSubmit, type}} />;
  }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ createVideo, updateVideo }, dispatch);
  return { ...actions };
}

export default authorizationHOC(
  connect(null, mapDispatchToProps)(AdminVideoItem),
  ["admin", "superAdmin"]
);
