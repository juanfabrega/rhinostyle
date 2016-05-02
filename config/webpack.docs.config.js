import webpack from 'webpack';
import path    from 'path';

const dependencies = [
  'react',
  'classnames'
];

export default {
  cache: true,
  devTool: 'cheap-module-source-map',
  entry: {
    vendor: dependencies,
    button: path.join(__dirname, '../src/scripts/docs/ButtonApp.jsx')
  },
  output: {
    path: path.join(__dirname, '../build/scripts'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: false })
  ]
}