import Document, { Head, Main, NextScript } from 'next/document'
import sprite from 'svg-sprite-loader/runtime/sprite.build'
const spriteContent = sprite.stringify()

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <link rel="stylesheet" href="/_next/static/style.css" />
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <body >
        <span dangerouslySetInnerHTML={{__html: spriteContent}} />
        <Main />
        <NextScript />
      </body>
      </html>
    )
  }
}