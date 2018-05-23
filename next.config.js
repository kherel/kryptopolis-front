// next.config.js
const withSass = require('./config/withSass_new.js')

module.exports = withSass({
  webpack(config, options) {
    return config
  }
})