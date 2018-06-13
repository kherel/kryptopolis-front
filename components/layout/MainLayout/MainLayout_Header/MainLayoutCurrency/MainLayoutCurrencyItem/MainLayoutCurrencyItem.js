import { Component } from "react";
import * as T from "prop-types";
import A_H from "widgets/A_H/A_H";
import "./MainLayoutCurrencyItem.scss";
import { cssClassName } from "utils";
const cn = cssClassName("MainLayoutCurrencyItem");

class MainLayoutCurrencyItem extends Component {
  state = {
    dropdownActive: false
  }

  _toggleDropdown = () => {
    this.setState({dropdownActive: !this.state.dropdownActive})
  }

  render() {
    const { mix, currency, price, diff } = this.props
    return(
      <div
        className={cn([mix])}
        onClick={() => this._toggleDropdown()}
      >
        <A_H type='widget'>{currency}</A_H>
        <div className={cn('price')}>${price}</div>
        <div className={cn('diff',{growth: diff > 0})}>{diff}%</div>

      </div>
    )
  }
}

MainLayoutCurrencyItem.propTypes = {
  mix: T.string,
  currency: T.string.isRequired,
  price: T.number.isRequired,
  diff: T.number.isRequired
};

export default MainLayoutCurrencyItem;
