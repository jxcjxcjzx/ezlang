// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

function nth(n) {
    return function(d) {
        return d[n];
    };
}


function $(o) {
    return function(d) {
        var ret = {};
        Object.keys(o).forEach(function(k) {
            ret[k] = d[o[k]];
        });
        return ret;
    };
}


var g = require('./grammar')
var grammar = {
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["wschar", "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["wschar", "__$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "dqstring$ebnf$1", "symbols": []},
    {"name": "dqstring$ebnf$1", "symbols": ["dstrchar", "dqstring$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "dqstring", "symbols": [{"literal":"\""}, "dqstring$ebnf$1", {"literal":"\""}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "sqstring$ebnf$1", "symbols": []},
    {"name": "sqstring$ebnf$1", "symbols": ["sstrchar", "sqstring$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "sqstring", "symbols": [{"literal":"'"}, "sqstring$ebnf$1", {"literal":"'"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "btstring$ebnf$1", "symbols": []},
    {"name": "btstring$ebnf$1", "symbols": [/[^`]/, "btstring$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "btstring", "symbols": [{"literal":"`"}, "btstring$ebnf$1", {"literal":"`"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "dstrchar", "symbols": [/[^\\"\n]/], "postprocess": id},
    {"name": "dstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "sstrchar", "symbols": [/[^\\'\n]/], "postprocess": id},
    {"name": "sstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "strescape", "symbols": [/["'\\/bfnrt]/], "postprocess": id},
    {"name": "strescape", "symbols": [{"literal":"u"}, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/], "postprocess": 
        function(d) {
            return d.join("");
        }
        },
    {"name": "program", "symbols": ["_", "blocks", "_"], "postprocess": g.program},
    {"name": "blocks", "symbols": ["block"], "postprocess": id},
    {"name": "blocks", "symbols": ["blocks", "__", "block"], "postprocess": g.blocks},
    {"name": "block", "symbols": ["expr"], "postprocess": id},
    {"name": "block", "symbols": ["stmt"], "postprocess": id},
    {"name": "curlyBlock", "symbols": [{"literal":"{"}, "_", "blocks", "_", {"literal":"}"}], "postprocess": g.curlyBlock},
    {"name": "expr", "symbols": ["primitive"], "postprocess": id},
    {"name": "expr", "symbols": ["id"], "postprocess": id},
    {"name": "expr", "symbols": ["class"], "postprocess": id},
    {"name": "expr", "symbols": [{"literal":"("}, "_", "expr", "_", {"literal":")"}], "postprocess": g.parenExpr},
    {"name": "id$ebnf$1", "symbols": [/[a-zA-Z]/]},
    {"name": "id$ebnf$1", "symbols": [/[a-zA-Z]/, "id$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "id", "symbols": ["id$ebnf$1"], "postprocess": g.id},
    {"name": "class$string$1", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "class$ebnf$1", "symbols": []},
    {"name": "class$ebnf$1", "symbols": ["method", "class$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "class", "symbols": ["class$string$1", "_", {"literal":"{"}, "_", "class$ebnf$1", "_", {"literal":"}"}], "postprocess": g.class},
    {"name": "method", "symbols": ["id", "_", "argList", "_", "curlyBlock"], "postprocess": g.method},
    {"name": "argList$ebnf$1", "symbols": ["id"], "postprocess": id},
    {"name": "argList$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "argList$ebnf$2", "symbols": []},
    {"name": "argList$ebnf$2$subexpression$1", "symbols": [{"literal":","}, "_", "id"]},
    {"name": "argList$ebnf$2", "symbols": ["argList$ebnf$2$subexpression$1", "argList$ebnf$2"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "argList", "symbols": [{"literal":"("}, "_", "argList$ebnf$1", "argList$ebnf$2", {"literal":")"}], "postprocess": g.argList},
    {"name": "primitive", "symbols": ["int"], "postprocess": id},
    {"name": "primitive", "symbols": ["intNeg"], "postprocess": id},
    {"name": "primitive", "symbols": ["str"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$1", "symbols": [/[0-9]/, "int$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "int", "symbols": ["int$ebnf$1"], "postprocess": g.int},
    {"name": "intNeg", "symbols": [{"literal":"-"}, "int"], "postprocess": g.intNeg},
    {"name": "str", "symbols": ["dqstring"], "postprocess": id},
    {"name": "str", "symbols": ["sqstring"], "postprocess": id},
    {"name": "stmt", "symbols": ["ifOrWhile"], "postprocess": id},
    {"name": "stmt", "symbols": ["assignment"], "postprocess": id},
    {"name": "stmt", "symbols": ["addOrSub"], "postprocess": id},
    {"name": "ifOrWhile$subexpression$1$string$1", "symbols": [{"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ifOrWhile$subexpression$1", "symbols": ["ifOrWhile$subexpression$1$string$1"]},
    {"name": "ifOrWhile$subexpression$1$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ifOrWhile$subexpression$1", "symbols": ["ifOrWhile$subexpression$1$string$2"]},
    {"name": "ifOrWhile", "symbols": ["ifOrWhile$subexpression$1", "__", "expr", "__", "curlyBlock"], "postprocess": g.ifOrWhile},
    {"name": "assignment", "symbols": ["id", "_", {"literal":"="}, "_", "expr"], "postprocess": g.assignment},
    {"name": "addOrSub$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "addOrSub$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "addOrSub", "symbols": ["expr", "_", "addOrSub$subexpression$1", "_", "expr"], "postprocess": g.addOrSub}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
