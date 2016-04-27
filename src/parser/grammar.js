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

 var g = require('./postprocessors'); var grammar = {
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
    {"name": "final", "symbols": [], "postprocess": g.finalEmpty},
    {"name": "final", "symbols": ["stmtList"], "postprocess": g.final},
    {"name": "stmts$ebnf$1$subexpression$1", "symbols": ["stmtList", "_"]},
    {"name": "stmts$ebnf$1", "symbols": ["stmts$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "stmts$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "stmts", "symbols": [{"literal":"{"}, "_", "stmts$ebnf$1", {"literal":"}"}], "postprocess": g.stmtsBlock},
    {"name": "stmts", "symbols": ["stmt"], "postprocess": g.stmtsSingle},
    {"name": "stmtList", "symbols": ["stmt"], "postprocess": g.stmtListSingle},
    {"name": "stmtList", "symbols": ["stmtList", "__", "stmt"], "postprocess": g.stmtList},
    {"name": "stmt", "symbols": ["expr"], "postprocess": id},
    {"name": "stmt", "symbols": ["comment"], "postprocess": id},
    {"name": "stmt", "symbols": ["if"], "postprocess": id},
    {"name": "stmt", "symbols": ["while"], "postprocess": id},
    {"name": "stmt", "symbols": ["assign"], "postprocess": id},
    {"name": "stmt", "symbols": ["return"], "postprocess": id},
    {"name": "stmt", "symbols": ["class"], "postprocess": id},
    {"name": "expr", "symbols": ["id"], "postprocess": g.expr},
    {"name": "expr", "symbols": ["str"], "postprocess": g.expr},
    {"name": "expr", "symbols": ["int"], "postprocess": g.expr},
    {"name": "expr", "symbols": ["float"], "postprocess": g.expr},
    {"name": "expr", "symbols": ["bool"], "postprocess": g.expr},
    {"name": "expr", "symbols": ["nul"], "postprocess": g.expr},
    {"name": "expr", "symbols": ["methodCall"], "postprocess": g.expr},
    {"name": "expr", "symbols": ["closure"], "postprocess": g.expr},
    {"name": "expr", "symbols": ["func"], "postprocess": g.expr},
    {"name": "comment$ebnf$1", "symbols": []},
    {"name": "comment$ebnf$1", "symbols": [/[^\n]/, "comment$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "comment", "symbols": [{"literal":"#"}, "comment$ebnf$1"], "postprocess": g.comment},
    {"name": "if$string$1", "symbols": [{"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "if$ebnf$1", "symbols": []},
    {"name": "if$ebnf$1", "symbols": ["elseif", "if$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "if$ebnf$2", "symbols": ["else"], "postprocess": id},
    {"name": "if$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "if", "symbols": ["if$string$1", "__", "expr", "__", "stmts", "if$ebnf$1", "if$ebnf$2"], "postprocess": g.if_},
    {"name": "while$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "while", "symbols": ["while$string$1", "__", "expr", "__", "stmts"], "postprocess": g.while_},
    {"name": "assign", "symbols": ["id", "_", {"literal":"="}, "_", "expr"], "postprocess": g.assign},
    {"name": "return$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "return", "symbols": ["return$string$1", "__", "expr"], "postprocess": g.return_},
    {"name": "class$string$1", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "class$ebnf$1$subexpression$1", "symbols": [{"literal":":"}, "_", "id"]},
    {"name": "class$ebnf$1", "symbols": ["class$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "class$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "class", "symbols": ["class$string$1", "__", "id", "class$ebnf$1", "_", "methodList"], "postprocess": g.class_},
    {"name": "func$string$1", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "func", "symbols": ["func$string$1", "__", "id", "argDefList", "stmts"], "postprocess": g.func},
    {"name": "id$ebnf$1", "symbols": []},
    {"name": "id$ebnf$1", "symbols": [/[a-zA-Z0-9_]/, "id$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "id", "symbols": [/[a-zA-Z]/, "id$ebnf$1"], "postprocess": g.id},
    {"name": "str", "symbols": ["dqstring"], "postprocess": g.str},
    {"name": "str", "symbols": ["sqstring"], "postprocess": g.str},
    {"name": "int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$1", "symbols": [/[0-9]/, "int$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "int", "symbols": ["int$ebnf$1"], "postprocess": g.int},
    {"name": "float$ebnf$1", "symbols": ["int"], "postprocess": id},
    {"name": "float$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "float", "symbols": ["float$ebnf$1", {"literal":"."}, "int"], "postprocess": g.float},
    {"name": "bool$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "bool", "symbols": ["bool$string$1"], "postprocess": g.boolTrue},
    {"name": "bool$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "bool", "symbols": ["bool$string$2"], "postprocess": g.boolFalse},
    {"name": "nul$string$1", "symbols": [{"literal":"n"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nul", "symbols": ["nul$string$1"], "postprocess": g.null_},
    {"name": "methodCall", "symbols": ["id", {"literal":"."}, "id", "argCallList"], "postprocess": g.methodCall},
    {"name": "closure$string$1", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "closure", "symbols": ["closure$string$1", "argDefList", "stmts"], "postprocess": g.closure},
    {"name": "argCallList$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "argCallList$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "_", "expr"]},
    {"name": "argCallList$ebnf$1$subexpression$1$ebnf$1", "symbols": ["argCallList$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "argCallList$ebnf$1$subexpression$1$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "argCallList$ebnf$1$subexpression$1", "symbols": ["expr", "argCallList$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "argCallList$ebnf$1", "symbols": ["argCallList$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "argCallList$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "argCallList", "symbols": [{"literal":"("}, "argCallList$ebnf$1", {"literal":")"}], "postprocess": g.argList},
    {"name": "argDefList$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "argDefList$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "_", "id"]},
    {"name": "argDefList$ebnf$1$subexpression$1$ebnf$1", "symbols": ["argDefList$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "argDefList$ebnf$1$subexpression$1$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "argDefList$ebnf$1$subexpression$1", "symbols": ["id", "argDefList$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "argDefList$ebnf$1", "symbols": ["argDefList$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "argDefList$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "argDefList", "symbols": [{"literal":"("}, "argDefList$ebnf$1", {"literal":")"}], "postprocess": g.argList},
    {"name": "methodList$ebnf$1", "symbols": []},
    {"name": "methodList$ebnf$1$subexpression$1", "symbols": ["method", "_"]},
    {"name": "methodList$ebnf$1", "symbols": ["methodList$ebnf$1$subexpression$1", "methodList$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "methodList", "symbols": [{"literal":"{"}, "_", "methodList$ebnf$1", {"literal":"}"}], "postprocess": g.methodList},
    {"name": "method", "symbols": ["id", "argDefList", "_", "stmts"], "postprocess": g.method},
    {"name": "elseif$string$1", "symbols": [{"literal":"e"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}, {"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "elseif", "symbols": ["_", "elseif$string$1", "__", "expr", "__", "stmts"], "postprocess": g.elseif},
    {"name": "else$string$1", "symbols": [{"literal":"e"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "else", "symbols": ["_", "else$string$1", "__", "stmts"], "postprocess": g.else_}
]
  , ParserStart: "final"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
