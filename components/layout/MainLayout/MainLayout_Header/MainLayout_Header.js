import React, { Component } from 'react'
import * as T from 'prop-types'
import A_Container from 'widgets/A_Container/A_Container'
import {cssClassName} from 'utils/index'
import './MainLayout_Header.scss'
import A_Svg from "widgets/A_Svg/Svg";
import A_Link from "widgets/A_Link/A_Link";
import A_Btn from "widgets/A_Btn/A_Btn";
const cn = cssClassName('MainLayout_Header')
import {mainNavigation} from 'data/navigation'
import A_NavBtn from "widgets/A_NavBtn/A_NavBtn";
import MainLayoutTicker from "./MainLayoutTicker/MainLayoutTicker";

class MainLayout_Header extends Component {

  state = {
    open: false
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    if (!this.state.open) return;

    const browserWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );

    browserWidth > 780 && this.setState({ open: false });
  };

  UNSAFE_componentWillReceiveProps(nextProps){
    if(this.state.open && this.props.pathname !== nextProps.pathname ){
      this.setState({open:false})
    }
  }

  getLoginBlock = (loggedIn, email) => {
    if (loggedIn) {
      return (
        <div className={cn("login", { loggedIn })}>
          <A_Link href={'/'} mix={cn('login-profile')}>{email}</A_Link>
          <A_Btn mix={cn('login-logout-btn')}>
            <A_Svg name={"logout"} className={cn("login-logout-icon")} onClick={this.props.handleUserLogout}/>
          </A_Btn>
        </div>
      );
    } else {
      return (
        <div className={cn("login", { loggedIn })}>
          <A_NavBtn mix={cn("register-btn")} theme="rounded" href="/register">
            Rejestracja
          </A_NavBtn>
          <A_NavBtn href="/auth">LOGOWANIE</A_NavBtn>
        </div>
      );
    }
  };


  getMobileMenu() {
    const styles = (
      <style global jsx>{`
        body {
          overflow: hidden;
        }
      `}</style>
    );
    return (
      <div
        className={cn("mobile-menu", { open: true })}
      >
        {styles}
        <A_Svg name={"close"} className={cn('mobile-menu-icon')} onClick={() => this.setState({ open: false })}/>

        {mainNavigation.map(({text, url}, i) => (
          <A_Link href={url} key={i} mix={cn("mobile-menu-link")}>
            {text}
          </A_Link>
        ))}

        {this.getLoginBlock(false, undefined)}
      </div>
    );
  }

  render() {
    const { mix } = this.props
    const { open } = this.state;

    return (
      <A_Container mix={cn([mix])}>
        <A_Svg name={'logo'} className={cn('flag')} />
        <A_Svg name={'name'} className={cn('name')} />
        <div className={cn('slogan')}>AKTUALNE WIADOMOŚCI <br/>O ŚWIECIE KRYPTOWALUTY</div>
        <MainLayoutTicker mix={cn('ticker')} />
        <div className={cn('currencies')}>currencies</div>
        <A_Svg name={'burger'} className={cn('btn')} onClick={() => this.setState({ open: true })} />
        {open && this.getMobileMenu()}

      </A_Container>
    );
  }
}

MainLayout_Header.propTypes = {
  mix: T.string
}



export default MainLayout_Header
