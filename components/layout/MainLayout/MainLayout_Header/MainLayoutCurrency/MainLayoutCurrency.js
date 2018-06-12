import "react";
import MainLayoutCurrencyItem from "./MainLayoutCurrencyItem/MainLayoutCurrencyItem";
import "./MainLayoutCurrency.scss";
import { cssClassName } from "utils";
const cn = cssClassName("MainLayoutCurrency");

const mockData = [
  {
    currency: 'BTC',
    price: 11792.98,
    diff: 25.45
  },
  {
    currency: 'BHC',
    price: 1781.70,
    diff: -5.32
  },
  {
    currency: 'ETH',
    price: 1078.96,
    diff: 2.35
  }
]

const MainLayoutCurrency = ({mix}) => (
  <div className={cn([mix])}>
    {mockData.map(currencyData =>
      <MainLayoutCurrencyItem
        key={currencyData.currency}
        mix={cn('item')}
        {...currencyData}
      />
    )}
  </div>
)

export default MainLayoutCurrency;
