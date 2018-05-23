import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from 'redux-store/withRedux'
import { Provider } from 'react-redux'
import MainLayout from "layout/MainLayout/MainLayout";

class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)