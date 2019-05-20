const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, '../src');
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const PACKAGES_DIR = path.resolve(__dirname, '../node_modules');
const PUBLIC_PATH = '/assets/js/';

module.exports = {
  mode: 'development',
  entry: path.resolve(APP_DIR, 'index.tsx'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(PUBLIC_DIR, 'assets/js'),
    publicPath: PUBLIC_PATH
  },
  resolve: {
    modules: [APP_DIR, PACKAGES_DIR],
    extensions: ['.js', '.json', '.ts', '.tsx', '.pcss']
  },
  devtool: 'source-map',
  stats: 'errors-only',
  plugins: [new webpack.DefinePlugin({ DEV: true })],
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      use: [{
        loader: 'ts-loader'
      }]
    }, {
      test: /\.(graphql|gql)$/,
      loader: 'graphql-tag/loader',
      exclude: /node_modules/,
    }, {
      test: /\.svg$/,
      loader: 'raw-loader'
    }, {
      test: /\.pcss$/,
      include: APP_DIR,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]-[local]-[hash:base64:5]',
        }
      }, {
        loader: 'postcss-loader',
      }]
    }]
  },
  watchOptions: {
    poll: 1000
  },
  devServer: {
    contentBase: PUBLIC_DIR,
    publicPath: PUBLIC_PATH,
    port: 3000,
    historyApiFallback: true,
  }
};
