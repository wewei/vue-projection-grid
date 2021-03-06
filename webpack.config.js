/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'projection-grid-vue.js',
    libraryTarget: 'umd',
    library: 'ProjectionGridVue',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
          },
          preLoaders: {
            js: 'eslint-loader',
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/, /dist/],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /dist/],
      },
    ],
  },
  externals: {
    'projection-grid-core': true,
    'vue': true,
  },
};
