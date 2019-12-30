var webpack = require('webpack')
var path = require('path')


module.exports = {
    entry: {
        index: ["babel-polyfill", "./src/index.js"],//
        venders: ["moment", "lodash", "react", "react-css-modules", "react-dom",
          "redux", "react-redux", "react-router-dom", "redux-thunk",
          "antd-mobile", "echarts-for-react", "echarts", "react-loadable"
        ]
      },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            // eslint options (if necessary)
          },
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    }
  };

 
     