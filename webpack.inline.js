var path = require('path')
var webpack = require('webpack')
process.env.NODE_ENV = 'inline'

const ipAddress = 'localhost'
const port = 3070

module.exports = [
  {
    entry: [
      './src/index.js'
    ],
    devServer: {
      hot: true,
      inline: true,
      host: ipAddress,
      port: port,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: 'http://localhost:' + port + '/static/'
    },
    resolve: {
      extensions: ['.js', 'jsx', '.ts', '.tsx']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"inline"'
      }),
      new webpack.NamedModulesPlugin()
    ],
    module: {
      loaders: [
        {test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader?useCache '},
        {test: /\.js$/, loaders: ['babel-loader?cacheDirectory'], exclude: /node_modules/, include: __dirname},
        {test: /\.less$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'less-loader']},
        {test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader']},
        {test: /\.(jpg|png|svg)$/, loader: 'url-loader?limit=8192'},
        {test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/, loader: 'file-loader'}
      ]
    }
  }
]
