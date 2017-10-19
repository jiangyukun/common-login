var path = require('path')
var webpack = require('webpack')
process.env.NODE_ENV = 'inline'

module.exports = [
  {
    entry: [
      './src/index.js'
    ],
    devServer: {
      hot: true,
      inline: true,
      progress: true,
      port: 3040
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: 'http://localhost:3000/static/'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"inline"'
      }),
      new webpack.NamedModulesPlugin()
    ],
    module: {
      loaders: [
        {test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader?cacheDirectory'], exclude: /node_modules/, include: __dirname},
        {test: /\.less$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'less-loader']},
        {test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader']},
        {test: /\.(jpg|png|svg)$/, loader: 'url-loader?limit=8192'},
        {test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/, loader: 'file-loader'}
      ]
    }
  }
]
