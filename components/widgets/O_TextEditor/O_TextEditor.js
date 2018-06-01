import React, { Component } from "react";
import * as T from "prop-types";
import "./O_TextEditor.scss";
import { cssClassName, isServer } from "utils";
const cn = cssClassName("O_TextEditor");
import {convertFromRaw, convertToRaw} from 'draft-js';

let RichTextEditor = {}
if (typeof window !== 'undefined') { RichTextEditor = require('react-rte').default };

class O_TextEditor extends Component {
  state = {
    value: undefined,
    client: false
  };

  onChange = value => {
    this.setState({ value });
  };

  getStringRaw = () => this.state.value ?  this.state.value.toString('raw') : undefined
  getStringHtml = () => this.state.value ?  this.state.value.toString('html') : undefined

  componentDidMount() {
    this.setState({
      value: this.props.initValue
        ? RichTextEditor.createValueFromString(this.props.initValue, 'raw')
        : RichTextEditor.createEmptyValue(),
      client: true
    });
  }

  render() {
    const toolbarConfig = {
      // Optionally specify the groups to display (displayed in the order listed).
      display: ["INLINE_STYLE_BUTTONS", "LINK_BUTTONS", "HISTORY_BUTTONS"],
      INLINE_STYLE_BUTTONS: [
        { label: "Bold", style: "BOLD" },
        { label: "Italic", style: "ITALIC" },
        { label: "Underline", style: "UNDERLINE" }
      ],
      BLOCK_TYPE_BUTTONS: [
        { label: "UL", style: "unordered-list-item" },
        { label: "OL", style: "ordered-list-item" }
      ]
    };

    let RichTextEditor;
    if(this.state.client){
      RichTextEditor = require('react-rte').default
      return (
        <div className={this.props.mix}>
          {this.state.client && (
            <RichTextEditor
              value={this.state.value}
              onChange={this.onChange}
              toolbarConfig={toolbarConfig}
              className={cn()}
              placeholder={this.props.placeholder}
            />
          )}
        </div>
      );
    } else {
      return <div className={this.props.mix}>loading...</div>
    }


  }
}

O_TextEditor.propTypes = {
  initValue: T.string,
  placeholder: T.string
};

O_TextEditor.defaultProps = {};

export default O_TextEditor;
