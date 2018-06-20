import "react";
import MainLayoutCurrencyItem from "./MainLayoutCurrencyItem/MainLayoutCurrencyItem";
import "./MainLayoutCurrency.scss";
import { cssClassName } from "utils";
const cn = cssClassName("MainLayoutCurrency");

// const mockData = [
//   {
//     currency: 'BTC',
//     price: {
//       dollars: '$ 11954.55',
//       euro: '€ 8453.44',
//       yen: '¥ 180834.31',
//       zloty: 'zł 14782.22'
//     },
//     diff: 25.45
//   },
//   {
//     currency: 'BHC',
//     price: {
//       dollars: '$ 1913.55',
//       euro: '€ 8453.44',
//       yen: '¥ 180834.31',
//       zloty: 'zł 14782.22'
//     },
//     diff: -5.32
//   },
//   {
//     currency: 'ETH',
//     price: {
//       dollars: '$ 6954.55',
//       euro: '€ 8453.44',
//       yen: '¥ 180834.31',
//       zloty: 'zł 14782.22'
//     },
//     diff: 2.35
//   }
// ]

const MainLayoutCurrency = ({mix, main, entities}) => (
  <div className={cn([mix])}>
    {main.map(id =>
      <MainLayoutCurrencyItem
        key={id}
        mix={cn('item')}
        currency = {entities[id]}
      />
    )}
  </div>
)

export default MainLayoutCurrency;
