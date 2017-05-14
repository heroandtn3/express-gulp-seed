const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const inDevMode = process.env.NODE_ENV === 'development';
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './frontend/index.html',
  filename: 'index.html',
  inject: 'body'
});

const extractLess = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: inDevMode,
});

module.exports = {
  entry: './frontend/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['es2015', 'react']
      },
    }, {
      test: /\.less$/,
      use: extractLess.extract({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: inDevMode,
          },
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: inDevMode,
          },
        }],
        // use style-loader in development
        fallback: 'style-loader'
      })
    }]
  },
  devtool: 'source-map', // enum
  plugins: [
    HtmlWebpackPluginConfig,
    extractLess,
  ]
};
