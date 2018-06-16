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
import M_FileInput from "widgets/M_FileInput/M_FileInput";
import O_TextEditor from "widgets/O_TextEditor/O_TextEditor";

import { cssClassName } from "utils";
import "./T_AdminArticleNews.scss";
import { required } from "utils/validateHelpers";
import A_TextArea from "widgets/A_TextArea/A_TextArea";
import onePageFormHOC from "HOC/onePageFormHOC";
const cn = cssClassName("T_AdminArticleNews");

const customFileValidation = (file, props) => {
  if (file || props.image) {
    return null;
  } else if (!file && !props.image) {
    return "Photo required";
  }
};

const formConfig = {
  setValues: function() {
    return {
      title: this.props.title || "",
      summary: this.props.summary || "",
      file: undefined
    };
  },
  validations: {
    title: [required],
    summary: [required],
    file: [customFileValidation]
  }
};

class T_AdminArticleNews extends Component {
  state = {
    publishAt: this.props.publishAt ? moment(this.props.publishAt) : undefined,
    publish: this.props.publish === undefined || this.props.publish,
  };


  onSubmit = () => {
    const { publish, publishAt } = this.state;
    const { values } = this.props;

    const draft = this.textEditorNode.getStringRaw();
    const text = this.textEditorNode.getStringHtml();

    const { reducerType } = this.props;
    const redirectPage = `/admin${
      reducerType === "article" ? "/articles" : ""
    }`;

    this.props.validateForm(() =>
      this.props
        .handleSubmit(
          publish,
          publishAt,
          values.title,
          values.file,
          values.summary,
          draft,
          text
        )
        .then(Router.push(redirectPage))
    );
  };

  render() {
    const { publish, publishAt } = this.state;
    const {
      type,
      reducerType,
      errors,
      values: { title, summary, file },
      formValid,
      handleChange
    } = this.props;

    const formTitle = reducerType === "article" ? "ARTYKUŁY" : "WIADOMOŚCI";
    return (
      <A_Container mix={cn()} padding="wide">
        <A_H mix={cn("title")} type="section">
          {formTitle}
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

        <A_TextArea
          mix={cn("title-input")}
          theme="admin"
          value={summary}
          handleChange={summary => handleChange({summary})}
          placeholder="Enter summary here"
          max={250}
          error={errors.summary}
        />

        <O_TextEditor
          mix={cn("text-editor")}
          initValue={this.props.draft}
          ref={node => (this.textEditorNode = node)}
        />

        <M_FileInput
          mix={cn("photo-input")}
          handleChange={file => handleChange({file})}
          url={this.props.image}
          error={errors.file}
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
          href={"/admin"}
        >
          Cancel
        </A_Btn>
      </A_Container>
    );
  }
}

T_AdminArticleNews.propTypes = {
  reducerType: T.string.isRequired,
  type: T.string.isRequired,
  entity: T.object.isRequired
};

T_AdminArticleNews.defaultProps = {
  entity: {}
};

export default onePageFormHOC(T_AdminArticleNews, formConfig);
