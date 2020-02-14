//const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/client/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/assets')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.html$/, use: [{ loader: "html-loader"}]
      },
      {
        test: /\.ts|tsx?$/,
        loader: 'ts-loader',
        options: {
          silent: true
        }
      },
      {
        test: /\.(png|svg|jpe?g|gif|eot|woff2?|ttf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader'
            }
          }
        ]
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [],
  devServer: {
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};
