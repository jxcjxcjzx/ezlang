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
    {"name": "blocks", "symbols": ["block"], "postprocess": g.uniqueBlock},
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
    {"name": "method$ebnf$1", "symbols": ["id"], "postprocess": id},
    {"name": "method$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "method$ebnf$2", "symbols": []},
    {"name": "method$ebnf$2$subexpression$1", "symbols": [{"literal":","}, "_", "id"]},
    {"name": "method$ebnf$2", "symbols": ["method$ebnf$2$subexpression$1", "method$ebnf$2"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "method", "symbols": ["id", "_", {"literal":"("}, "_", "method$ebnf$1", "method$ebnf$2", {"literal":")"}, "_", "curlyBlock"], "postprocess": g.method},
    {"name": "primitive", "symbols": ["int"], "postprocess": id},
    {"name": "primitive", "symbols": ["str"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$1", "symbols": [/[0-9]/, "int$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "int", "symbols": ["int$ebnf$1"], "postprocess": g.int},
    {"name": "str", "symbols": ["dqstring"], "postprocess": id},
    {"name": "str", "symbols": ["sqstring"], "postprocess": id},
    {"name": "stmt", "symbols": ["ifstmt"], "postprocess": id},
    {"name": "stmt", "symbols": ["whilestmt"], "postprocess": id},
    {"name": "stmt", "symbols": ["assignment"], "postprocess": id},
    {"name": "stmt", "symbols": ["addition"], "postprocess": id},
    {"name": "stmt", "symbols": ["substraction"], "postprocess": id},
    {"name": "ifstmt$string$1", "symbols": [{"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ifstmt", "symbols": ["ifstmt$string$1", "__", "expr", "__", "curlyBlock"], "postprocess": g.if},
    {"name": "whilestmt$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "whilestmt", "symbols": ["whilestmt$string$1", "__", "expr", "__", "curlyBlock"], "postprocess": g.while},
    {"name": "assignment", "symbols": ["id", "_", {"literal":"="}, "_", "expr"], "postprocess": g.assignment},
    {"name": "addition", "symbols": ["expr", "_", {"literal":"+"}, "_", "expr"], "postprocess": g.addition},
    {"name": "substraction", "symbols": ["expr", "_", {"literal":"-"}, "_", "expr"], "postprocess": g.substraction}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
