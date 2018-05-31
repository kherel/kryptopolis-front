import { Component } from "react";
import Router from "next/router";
import * as T from "prop-types";
import DatePicker from "react-datepicker";
import moment from "moment";
import "./react-datepicker.scss";

import M_AdminNewsItem_Datepicker from "./M_AdminNewsItem_Datepicker/M_AdminNewsItem_Datepicker";

import A_Container from "widgets/A_Container/A_Container";
import A_H from "widgets/A_H/A_H";
import A_Btn from "widgets/A_Btn/A_Btn";
import A_InputText from "widgets/A_InputText/A_InputText";
import A_Switch from "widgets/A_Switch/A_Switch";
import M_FileInput from "widgets/M_FileInput/M_FileInput";
import O_TextEditor from "widgets/O_TextEditor/O_TextEditor";

import { cssClassName } from "utils";
import "./T_AdminNewsItem.scss";
import { required } from "../../../utils/validateHelpers";
import A_TextArea from "widgets/A_TextArea/A_TextArea";
const cn = cssClassName("T_AdminNewsItem");

const customFileValidation = (file, props) => {
  if (file || props.image) {
    return null;
  } else if (!file && !props.image) {
    return "Photo required";
  }
};

class T_AdminNewsItem extends Component {
  state = {
    form: {
      title: this.props.title || "",
      summary: this.props.summary || "",
      file: undefined
    },
    publishAt: this.props.publishAt ? moment(this.props.publishAt) : undefined,
    publish: this.props.publish || true,
    validations: {
      title: [required],
      summary: [required],
      file: [customFileValidation]
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
    const { publish, form } = this.state;
    let { publishAt } = this.state;
    const draft = this.textEditorNode.getStringRaw();
    const text = this.textEditorNode.getStringHtml();

    this.validateFields(form, () => {
      if (this.state.formValid) {
        this.props
          .handleSubmit(publish, publishAt, form.title, form.file, form.summary, draft, text)
          .then(Router.push("/admin"));
      }
    });
  };

  render() {
    const { publish, form: { title, summary }, errors } = this.state,
      { type } = this.props;

    return (
      <A_Container mix={cn()} padding="wide">
        <A_H mix={cn("title")} type="section">
          WIADOMOŚCI
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
            customInput={<M_AdminNewsItem_Datepicker />}
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

        <A_TextArea
          mix={cn("title-input")}
          theme="admin"
          value={summary}
          handleChange={value => this.handleChange(value, "summary")}
          placeholder="Enter summary here"
          max = {250}
          error={errors.summary}
        />

        <O_TextEditor
          mix={cn("text-editor")}
          initValue={this.props.draft}
          ref={node => (this.textEditorNode = node)}
        />

        <M_FileInput
          mix={cn("photo-input")}
          handleChange={value => this.handleChange(value, "file")}
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

T_AdminNewsItem.propTypes = {
  entity: T.object.isRequired
};

T_AdminNewsItem.defaultProps = {
  entity: {}
};

export default T_AdminNewsItem;
