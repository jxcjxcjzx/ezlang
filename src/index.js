var nearley = require('nearley')
var grammar = require('./generated')
var d       = function (data) {
    console.log(require('util').inspect(data, false, null))
}

var parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)
var input  = require('fs').readFileSync(__dirname + '/input.lang').toString()

parser.feed(input)

d(parser.results)