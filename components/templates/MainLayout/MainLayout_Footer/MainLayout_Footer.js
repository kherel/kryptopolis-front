import React, { Component } from 'react'
import * as T from 'prop-types'
import {cssClassName} from 'utils/index'
import './MainLayout_Footer.scss'
import A_Container from "widgets/A_Container/A_Container";
import A_P from "widgets/A_P/A_P";

const cn = cssClassName('MainLayout_Footer')

class MainLayout_Footer extends Component {

  render() {
    const { mix } = this.props
    return (
      <div className={cn()}>
        <A_Container mix={cn('inner-desktop')}>
          <div className={cn('text')}>
            <A_P type='small'>
              Kryptopolis obejmuje Fintech, Blockchain i Bitcoin dostarczając najnowsze wiadomości i
              analizy dotyczące przyszłości pieniędzy.
            </A_P>
          </div>
          <div className={cn('address')}>
            <A_P type='small'>
              Polska, Warszawa, rynek Starego Miasta 9 Warunki świadczenia usług i Polityka
              prywatności <br/>© Kryptopolis 2018
            </A_P>
          </div>
        </A_Container>
        <A_Container mix={cn('inner-mobile')}>
          <div className={cn('text')}>
            <A_P type='small'>
              Polska, Warszawa, rynek Starego Miasta 9 <br />
              © Kryptopolis 2018
            </A_P>
          </div>
        </A_Container>
      </div>    );
  }
}

MainLayout_Footer.propTypes = {
  mix: T.string
}

export default MainLayout_Footer
