const path = require('path')
function myplugins(options) {
  console.log(options)
}
myplugins.prototype.apply = function (compiler) {
  compiler.hooks.emit.tapAsync('emit myplugins', function (compilation, callback) {
    // compilation.fileDependencies.forEach(function (filepath) {
    //   console.log('filepath', filepath)
    // });
    // compilation.chunks.forEach(function (chunk) {
    //   console.log('chunk', chunk)
    // })
    console.log('compilation.assets', compilation.assets)
    callback()
  })
  compiler.hooks.done.tapAsync('done myplugins', function(compilation, callback){
    const pkg = require('../package.json')
    const notifier = require('node-notifier')
    const time = ((compilation.endTime - compilation.startTime)/1000).toFixed(2)
    notifier.notify({
      title: pkg.name,
      message: `webpack is done${time}`,
      contentImage: path.resolve(__dirname, '../img/github-headImg.jpg')
    })
    callback()
  })
}

module.exports = myplugins