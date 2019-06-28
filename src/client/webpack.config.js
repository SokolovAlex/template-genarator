const { join } = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { domain } = require('../../config');

const buildFolder = join(__dirname, '../../build/locator');

module.exports = {
  entry: join(__dirname, 'app.jsx'),
  output: {
    path: buildFolder,
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['babel-plugin-styled-components'],
          },
        },
      },
      {
        test: /\.(jpg|png|woff|woff2)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: (path) => {
          if (!/.svg/.test(path)) {
            return false;
          }
          return /Icon|\.inline\.svg/.test(path);
        },
        // test: /Icon|\.inline\.svg/,
        exclude: /node_modules/,
        use: {
          loader: 'svg-react-loader',
          options: {
            svgo: {
              plugins: [{ removeTitle: false }],
              floatPrecision: 2,
            },
          },
        },
      },
      {
        test: /kaspersky-logo-green.svg/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [`${__dirname}/../styles`],
              data: `$region: ${domain};`,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      urls: process.env.urls,
    }),
    new HtmlWebPackPlugin({
      template: join(__dirname, 'index.html'),
      filename: join(buildFolder, 'index.html'),
    }),
    new CopyPlugin([
      { from: join(__dirname, '../../static/translates'), to: join(buildFolder, 'translates') },
      { from: join(__dirname, '../../static/images/cluster*.png'), to: join(buildFolder, 'images/'), flatten: true },
      { from: join(__dirname, '../../static/favicon.png'), to: buildFolder },
    ]),
  ],
};
