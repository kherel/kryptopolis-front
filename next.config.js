// next.config.js
const webpack = require('webpack');
const withSass = require('./config/withSass_new.js')

require('dotenv').config();

module.exports = withSass({
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));
    config.module.rules.push(
      {
        test: /\.svg/,
        rules: [
          {
            issuer: /\.js/,
            use: 'svg-sprite-loader',
          },
          {
            issuer: /\.scss/,
            use: 'svg-url-loader',
          }]
      }
    )
    return config;
  }
})
