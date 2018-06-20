import { Component } from "react";
import * as T from "prop-types";
import A_H from "widgets/A_H/A_H";
import "./MainLayoutCurrencyItem.scss";
import { cssClassName } from "utils";
const cn = cssClassName("MainLayoutCurrencyItem");

class MainLayoutCurrencyItem extends Component {
  state = {
    // fiatCurrency: this.props.priceUSD,
    // dropdownActive: false
  }

  // _toggleDropdown = () => {
  //   this.setState({dropdownActive: !this.state.dropdownActive})
  // }
  //
  // _changeFiatCurrency = (currency) => {
  //   this.setState({fiatCurrency: this.props.price[currency]})
  // }

  render() {
    const
      { mix, currency } = this.props
      // { fiatCurrency, dropdownActive } = this.state

    return(
      <div
        className={cn(
          // {dropdownActive},
          [mix])}
        // onClick={() => this._toggleDropdown()}
      >
        {/*<div className={cn('dropdown-toggler')} />*/}
        <A_H type='widget' mix={cn('title')}>{currency.symbol}</A_H>
        <div className={cn('price')}>$ {currency.priceUSD}</div>
        <div className={cn('diff',{growth: currency.percentChange24h > 0})}>{currency.percentChange24h}%</div>

        {/*{dropdownActive &&*/}
          {/*<div className={cn('dropdown')}>*/}
            {/*<div className={cn('dropdown-content')}>*/}
              {/*{Object.keys(price).map(currency => {*/}
                {/*if(price[currency] !== fiatCurrency) {*/}
                  {/*return (*/}
                    {/*<div*/}
                      {/*key={currency}*/}
                      {/*className={cn('dropdown-item')}*/}
                      {/*onClick={(e) => {*/}
                        {/*e.stopPropagation()*/}
                        {/*this._changeFiatCurrency(currency)*/}
                      {/*}}*/}
                    {/*>*/}
                      {/*{price[currency]}*/}
                    {/*</div>*/}
                  {/*)*/}
                {/*}*/}
              {/*})}*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*}*/}
      </div>
    )
  }
}

MainLayoutCurrencyItem.propTypes = {
  mix: T.string,
  currency: T.shape({
    symbol: T.string.isRequired,
    priceUSD: T.number.isRequired,
    percentChange24h: T.number.isRequired
  }).isRequired
};

MainLayoutCurrencyItem.default = {
  currency: {}
};
export default MainLayoutCurrencyItem;
