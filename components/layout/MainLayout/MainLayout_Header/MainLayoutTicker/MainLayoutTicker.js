import { Component } from "react";
// import * as T from "prop-types";
import "./MainLayoutTicker.scss";
import { cssClassName } from "utils";
const cn = cssClassName("MainLayoutTicker");

const mockData = {
  up: [
    ["BTCP", "14.74"],
    ["HT", "13.84"],
    ["BNB", "12.50"],
    ["LRC", "12.19"],
    ["DRGN", "11.78"],
    ["ONT", "10.95"],
    ["ARK", "9.89"],
    ["KNC", "9.70"]
  ],
  down: [
    ["CMT", "-6.96"],
    ["ETN", "-5.22"],
    ["THETA", "-4.95"],
    ["KIN", "-4.01"],
    ["BCD", "-4.01"],
    ["WICC", "-3.97"],
    ["XIN", "-3.17"],
    ["ARDR", "-2.89"]
  ]
};

class MainLayoutTicker extends Component {
  state = {};

  getLine(direction) {
    const getItem = prefix => item => (
      <div className={cn(`line-item`, { direction })} key={prefix + item[0]}>
        <span className={cn("line-item-currency")}>{item[0]}</span>
        <span className={cn("line-item-percentage")}>{item[1]}%</span>
      </div>
    );
    return (
      <div className={cn('line-item-container')}>
        {[
          ...mockData[direction].map(getItem("frst")),
          ...mockData[direction].map(getItem("scnd"))
        ]}
      </div>
    );
  }
  render() {
    const { mix } = this.props;

    return (
      <div className={cn([mix])}>
        <div className={cn("label")}>UP</div>
        <div className={cn("line-up")}>{this.getLine("up")}</div>
        <div className={cn("label")}>DOWN</div>
        <div className={cn("line-down")}>{this.getLine("down")}</div>
      </div>
    );
  }
}

MainLayoutTicker.propTypes = {};

MainLayoutTicker.defaultProps = {};

export default MainLayoutTicker;
