const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: './entry/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'demo/dist')
  },
  plugins: [
    new CleanWebpackPlugin(['demo/dist']),
    // new UglifyJSPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './demo',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": ["es2015", "react", "stage-0"],
              "plugins": ["transform-decorators-legacy"]
            }
          }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};

module.exports = config;