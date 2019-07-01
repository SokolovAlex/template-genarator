import HtmlWebPackPlugin from 'html-webpack-plugin';
import { join } from 'path';
import webpack from 'webpack';

const buildFolder = join(__dirname, '../../public');

export default {
  entry: {
    app: join(__dirname, 'app.tsx'),
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
        test: /\.less$/,
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
  ],
};
