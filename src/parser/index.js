var nearley = require('nearley')
var grammar = require('./grammar')
var parser  = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)

module.exports = function (input) {
    if (typeof input !== 'string') {
        throw new Error('The input must be a string')
    }
    
    parser.feed(input)
    
    return parser.results
}