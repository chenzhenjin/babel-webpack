const babel = require('@babel/core')
const t = require('@babel/types')
const code = 'const fn = (a,b) => a+b'
// const r = babel.transform(code, {
// presets: ['@babel/preset-env']
// plugins: ['@babel/plugin-transform-arrow-functions']
// })
const arrowFnPlugin = {
  visitor: {
    ArrowFunctionExpression(path) {
      const node = path.node
      // console.log('ArrowFunctionExpression => node', node)
      const params = node.params
      let body = node.body
      if (!t.isBlockStatement(body)) {
        body = t.blockStatement([
          t.returnStatement(body)
        ]);
      }
      const functionExpression = t.functionExpression(null, params, body)
      path.replaceWith(functionExpression)
    }
  }
}

const r = babel.transform(code, {
  plugins: [arrowFnPlugin]
})

console.log(r.code)
