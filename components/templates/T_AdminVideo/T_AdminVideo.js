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
const cn = cssClassName("T_AdminVideo");

class T_AdminVideo extends Component {
  state = {
    form: {
      title: this.props.title || "",
      text: this.props.text || "",
      video: this.props.video || "",
    },
    publishAt: this.props.publishAt ? moment(this.props.publishAt) : undefined,
    publish: this.props.publish || true,
    validations: {
      title: [required],
      text: [required],
      video: [required],
    },
    formValid: false,
    errors: {}
  };

  // draftState = this.props.draft || undefined; // это стейт тексткового редактора, так выложил чтобы перередера не было.
  validateFields = (formValues, onFinish) => {
    const { validations } = this.state;

    let errors = {};

    Object.keys(formValues).forEach(fieldName => {
      if (validations[fieldName]) {
        validations[fieldName].forEach(validation => {
          if (errors[fieldName]) return;
          errors[fieldName] = validation(formValues[fieldName], this.props);
        });
      }
    });

    const hasErrors = Object.values(errors).filter(x => !!x).length > 0;

    this.setState({ errors, formValid: !hasErrors }, () => onFinish());
  };

  handleChange = (fieldValue, fieldName) => {
    const { form, errors } = this.state;

    this.setState({
      form: {
        ...form,
        [fieldName]: fieldValue
      },
      errors: {
        ...errors,
        [fieldName]: undefined
      }
    });
  };

  onSubmit = () => {
    const { publish, form, video } = this.state;
    let { publishAt } = this.state;

    this.validateFields(form, () => {
      if (this.state.formValid) {
        this.props
          .handleSubmit(publish, publishAt, form.title, form.text, form.video)
          .then(Router.push('/admin/videos'));
      }
    });
  };

  render() {
    const { publish, form: { title, text, video }, errors } = this.state,
      { type } = this.props;

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
            selected={this.state.publishAt}
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
          handleChange={value => this.handleChange(value, "title")}
          placeholder="Enter title here"
          error={errors.title}
        />

        <A_InputText
          mix={cn("title-input")}
          theme="admin"
          value={text}
          handleChange={value => this.handleChange(value, "text")}
          placeholder="Enter description here"
          error={errors.text}
        />

        <M_VideoInput
          mix={cn("video-input")}
          handleSubmit={value => this.handleChange(value, "video")}
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

export default T_AdminVideo;
