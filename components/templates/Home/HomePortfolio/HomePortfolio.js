import { Component } from 'react';
// import * as T from "prop-types";
import './HomePortfolio.scss';
import {cssClassName} from 'utils'
import A_Svg from "widgets/A_Svg/Svg";
const cn = cssClassName('HomePortfolio')

class HomePortfolio extends Component {

  state = {}

  render() {

   const {mix} = this.props
 //   const {} = this.state

    return (
      <div className={cn([mix])}>
        <A_Svg name={'arrow_short'} />
      </div>
    )
  }
}

HomePortfolio.propTypes = {
};

HomePortfolio.defaultProps = {
}

export default HomePortfolio