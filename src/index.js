var parser = require('./parser')
var input  = require('fs').readFileSync(__dirname + '/input.lang').toString()
function d(data) {
    console.log(require('util').inspect(data, {
        showHidden: false,
        depth: null,
        colors: true,
        customInspect: true,
    }))
}

var ast = parser(input)

d(ast)