const esprima = require('esprima') //code=>ast
const estraverse = require('estraverse') //traverse ast 转换ast树
const escodegen = require('escodegen')//ast=>code
const code = "function get(){}"
const ast = esprima.parseScript(code)
estraverse.traverse(ast, {
  enter(node) {
    console.log('enter=>node.type', node.type)
    if (node.type === 'Identifier') {
      node.name = 'hello'
    }
  },
  leave(node) {
    console.log('leave=>node.type', node.type)
  }
})

const result = escodegen.generate(ast)
console.log(result)