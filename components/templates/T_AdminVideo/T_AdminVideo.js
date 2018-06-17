import { Component } from "react";
import Router from "next/router";
import * as T from "prop-types";
import DatePicker from "react-datepicker";
import moment from "moment";
import M_AdminDatepicker from "widgets/M_AdminDatepicker/M_AdminDatepicker";

import A_Container from "widgets/A_Container/A_Container";
import A_H from "widgets/A_H/A_H";
import A_Btn from "widgets/A_Btn/A_Btn";
import A_InputText from "widgets/A_InputText/A_InputText";
import A_Switch from "widgets/A_Switch/A_Switch";

import { cssClassName } from "utils";
import "./T_AdminVideo.scss";
import { required } from "utils/validateHelpers";
import M_VideoInput from "widgets/M_VideoInput/M_VideoInput";
import onePageFormHOC from "HOC/onePageFormHOC";
const cn = cssClassName("T_AdminVideo");

const formConfig = {
  setValues: function(){
    return{
      title: this.props.title || "",
      text: this.props.text || "",
      video: this.props.video || "",
    }

  },
  validations: {
    title: [required],
    text: [required],
    video: [required],
  },
};

class T_AdminVideo extends Component {

  state = {
    publishAt: this.props.publishAt ? moment(this.props.publishAt) : undefined,
    publish: this.props.publish === undefined || this.props.publish,
  }

  onSubmit = () => {
    const {values} = this.props
    const {publishAt, publish} = this.state

    this.props.validateForm(() => (
      this.props
        .handleSubmit(publish, publishAt, values.title, values.text, values.video)
        .then(Router.push('/admin/videos'))
    ))

  };

  render() {
    const { publish, publishAt} = this.state,
      { type, values: { title, text, video }, errors, handleChange } = this.props;
    return (
      <A_Container mix={cn()} padding="wide">
        <A_H mix={cn("title")} type="section">
          WIDEO
        </A_H>
        <p className={cn("subtitle")}>
          {type === "create" ? "create" : "update"}
        </p>

        <div className={cn("row")}>
          <p className={cn("row-label")}>Publish:</p>
          <A_Switch
            mix={cn("publish-switch")}
            handleSwitch={() =>
              this.setState(prev => ({ publish: !prev.publish }))
            }
            switched={publish}
            labelSwitched="Publish"
            labelUnswitched="Hide"
          />
        </div>

        <div className={cn("row")}>
          <p className={cn("row-label")}>Date:</p>
          <DatePicker
            customInput={<M_AdminDatepicker />}
            selected={publishAt}
            onChange={publishAt => this.setState({ publishAt })}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="LLL"
            timeCaption="time"
            minDate={moment()}
          />
        </div>

        <A_InputText
          mix={cn("title-input")}
          theme="admin"
          value={title}
          handleChange={title => handleChange({title})}
          placeholder="Enter title here"
          error={errors.title}
        />

        <A_InputText
          mix={cn("title-input")}
          theme="admin"
          value={text}
          handleChange={text => handleChange({text})}
          placeholder="Enter description here"
          error={errors.text}
        />

        <M_VideoInput
          mix={cn("video-input")}
          handleSubmit={video => handleChange({video})}
          video={video}
          error={errors.video}
        />

        <A_Btn
          onClick={this.onSubmit}
          mix={cn("save-btn")}
          theme={"filled"}
          color={"gray"}
          size={"md"}
        >
          Save
        </A_Btn>

        <A_Btn
          theme={"filled"}
          color={"red"}
          size={"md"}
          type={"link"}
          href={"/admin/videos"}
        >
          Cancel
        </A_Btn>
      </A_Container>
    );
  }
}

T_AdminVideo.propTypes = {
  entity: T.object.isRequired
};

T_AdminVideo.defaultProps = {
  entity: {}
};

export default onePageFormHOC(T_AdminVideo, formConfig);
