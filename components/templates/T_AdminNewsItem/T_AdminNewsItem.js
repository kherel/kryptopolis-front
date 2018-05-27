import { Component } from "react";
import A_Container from "widgets/A_Container/A_Container";
import A_H from "widgets/A_H/A_H";
import A_Btn from "widgets/A_Btn/A_Btn";
import A_InputText from "widgets/A_InputText/A_InputText";
// import * as T from "prop-types";
import "./T_AdminNewsItem.scss";
import { cssClassName } from "utils";
import * as T from "prop-types";
import DatePicker from "react-datepicker";
const cn = cssClassName("T_AdminNewsItem");
import moment from "moment";
import "./react-datepicker.scss";
import TextEditor from "widgets/O_TextEditor/O_TextEditor";
import M_FileInput from "widgets/M_FileInput/M_FileInput";
import Router from "next/router";

class T_AdminNewsItem extends Component {
  state = {
    publishAt: this.props.publishAt ? moment(this.props.publishAt) : undefined,
    title: this.props.title || "",
    publish: this.props.publish || true,
    file: undefined
  };

  // draftState = this.props.draft || undefined; // это стейт тексткового редактора, так выложил чтобы перередера не было.

  onSubmit = () => {
    const { publish, title, file } = this.state;
    let { publishAt } = this.state;
    const draft = this.textEditorNode.getStringRaw()
    const text = this.textEditorNode.getStringHtml()


    if (publishAt) {
      // не забудь перевести дату в строку
      publishAt = publishAt.utc().format();
    }

    this.props
      .handleSubmit(publish, publishAt, title, file, draft, text)
      .then(Router.push("/admin"));
  };

  render() {
    const { type } = this.props;
    return (
      <A_Container mix={cn()} padding="wide">
        {type === "create" ? "create" : "update"}
        <DatePicker
          selected={this.state.publishAt}
          onChange={publishAt => this.setState({ publishAt })}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
          timeCaption="time"
          placeholderText={"time in UTC time zone"}
          minDate={moment()}
        />

        <div>
          publish checkbox:{" "}
          <span
            onClick={() => this.setState(prev => ({ publish: !prev.publish }))}
          >
            {this.state.publish ? "publish" : "hide"}
          </span>
        </div>
        <div>
          title:{" "}
          <A_InputText
            value={this.state.title}
            handleChange={title => this.setState({ title })}
            placeholder={"title" + " here"}
          />
        </div>

        <TextEditor
          initValue={this.props.draft}
          ref={node => this.textEditorNode = node}
        />

        <M_FileInput
          handleChange={file => this.setState({ file })}
          url={this.props.image}
        >
          News Image
        </M_FileInput>
        <A_Btn
          onClick={this.onSubmit}
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
  q;
}

T_AdminNewsItem.propTypes = {
  entity: T.object.isRequired
};

T_AdminNewsItem.defaultProps = {
  entity: {}
};

export default T_AdminNewsItem;
