const through2 = require("through2");
module.exports = () => {
  return through2.obj(function (file, encoding, cb) {
    let contents = file.contents.toString();
    contents = contents.replace(/(\n[\s\t]*\r*\n)/g, "\n");
    // .replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, "");
    // let lines = contents.split(/\n/g)
    // totalLine = lines.length
    // contents = lines.join('\n')
    file.contents = Buffer.from(contents);
    this.push(file);
    cb();
  });
};
