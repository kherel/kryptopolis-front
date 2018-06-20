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

  getLine(direction, ids, entities) {
    const getItem = prefix => id => (
      <div className={cn(`line-item`, { direction })} key={prefix + id}>
        <span className={cn("line-item-currency")}>{entities[id].symbol}</span>
        <span className={cn("line-item-percentage")}>{entities[id].percentChange24h}%</span>
      </div>
    );
    return (
      <div className={cn("line-item-container")}>
        {[
          ...ids.map(getItem("frst")),
          ...ids.map(getItem("scnd"))
        ]}
      </div>
    );
  }
  render() {
    const { mix, up, down, entities } = this.props;

    return (
      <div className={cn([mix])}>
        <div className={cn("label")}>UP</div>
        <div className={cn("line-up")}>{this.getLine("up", up, entities)}</div>
        <div className={cn("label")}>DOWN</div>
        <div className={cn("line-down")}>
          {this.getLine("down", down, entities)}
        </div>
      </div>
    );
  }
}

MainLayoutTicker.propTypes = {};

MainLayoutTicker.defaultProps = {
  up: [],
  down: [],
  entities: {}
};

export default MainLayoutTicker;
