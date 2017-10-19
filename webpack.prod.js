const webpack = require('webpack')
const moment = require('moment')
process.env.NODE_ENV = 'production'

module.exports = [
  {
    entry: [
      './src/index.js'
    ],

    output: {
      path: __dirname + '/build/',
      filename: 'bundle-' + moment().format('MMDD') + '.min.js',
      publicPath: 'build/'
    },

    module: {
      loaders: [
        {test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader?cacheDirectory'], exclude: /node_modules/, include: __dirname},
        {test: /\.less$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'less-loader']},
        {test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader']},
        {test: /\.(jpg|png|svg)$/, loader: 'url-loader?limit=8192'},
        {test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/, loader: 'file-loader'}
      ]
    },

    plugins: [
      new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: false
      })
    ]
  }
]
