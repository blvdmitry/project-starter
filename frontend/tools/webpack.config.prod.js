const config = require('./webpack.config');
const webpack = require('webpack');

module.exports = {
  ...config,
  plugins: [new webpack.DefinePlugin({ DEV: false })],
  mode: 'production',
};
