const path = require('path')
const myplugins = require('./myplugins')
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.my$/,
        loader: './myloader',
        options: {
          name: 'chenzhenjin'
        }
      }
    ]
  },
  plugins: [
    new myplugins({name:'chenzhenjin'})
  ],
  resolveLoader: {
    modules: ['node_modules', './myloader']
  }
}