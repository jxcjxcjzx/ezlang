var nearley = require('nearley')
var grammar = require('./generated')
var d       = function (data) {
    console.log(require('util').inspect(data, false, null))
}

var parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)
var input  = require('fs').readFileSync('./input.lang').toString()

parser.feed(input)

d(input)
d(parser.results)