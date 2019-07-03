import HtmlWebPackPlugin from 'html-webpack-plugin';
import { join } from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';

export const buildFolder = join(__dirname, '../../public');

export default {
  entry: {
    app: join(__dirname, 'index.tsx'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: buildFolder,
    filename: '[name].bundle.js',
  },
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              camelCase: true,
              namedExport: true,
              onlyLocals: true,
              localIdentName: '[folder][name]__[local]--[emoji:3]',
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({}),
    new HtmlWebPackPlugin({
      template: join(__dirname, 'index.html'),
      filename: join(buildFolder, 'index.html'),
    }),
    new CopyPlugin([
      { from: join(__dirname, './favicon.png'), to: buildFolder },
    ]),
  ],
};
