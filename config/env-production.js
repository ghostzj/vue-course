const host = require('ip').address()

module.exports = {
  host: host,
  port: 8092,
  api: '/api',
  publicPath: '',
  distPath: './dist/examples',
  sourcePath: './examples'
}
