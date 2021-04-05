const loaderUtils = require('loader-utils')
module.exports = function(source) {
  // var callback = this.async()

  const options = loaderUtils.getOptions(this)
  console.log(source, options)
  // this.callback(null, source, sourceMaps)
  //开启缓存
  this.cacheable && this.cacheable();
	this.value = source;
	return "module.exports = " + JSON.stringify(source.replace('c', 'console.log'));
}
