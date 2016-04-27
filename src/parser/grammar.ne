@builtin "whitespace.ne"
@builtin "string.ne"


@{% var g = require('./postprocessors'); %}


final    -> null                     {% g.finalEmpty %}
          | stmtList                 {% g.final %}
stmt     -> "{" _ (stmtList _):? "}" {% g.stmtBlock %}
          | stmts                    {% g.stmt %}
stmtList -> stmt                     {% g.stmtListSingle %}
          | stmtList __ stmt         {% g.stmtList %}


stmts -> expr    {% id %}
       | comment {% id %}
       | if      {% id %}
       | while   {% id %}
       | assign  {% id %}
       | return  {% id %}
       | class   {% id %}

expr    -> id         {% g.expr %}
         | str        {% g.expr %}
         | int        {% g.expr %}
         | float      {% g.expr %}
         | bool       {% g.expr %}
         | nul        {% g.expr %}
         | methodCall {% g.expr %}
         | closure    {% g.expr %}
         | func       {% g.expr %}
comment -> "#" [^\n]:*                           {% g.comment %}
if      -> "if" __ expr __ stmt elseif:* else:?  {% g.if_ %}
while   -> "while" __ expr __ stmt               {% g.while_ %}
assign  -> id _ "=" _ expr                       {% g.assign %}
return  -> "return" __ stmt                      {% g.return_ %}
class   -> "class" __ id (":" _ id):? methodList {% g.class_ %}
func    -> "func" __ id argDefList stmt          {% g.func %}


id         -> [a-zA-Z] [a-zA-Z0-9_]:*      {% g.id %}
str        -> dqstring                     {% g.str %}
            | sqstring                     {% g.str %}
int        -> [0-9]:+                      {% g.int %}
float      -> int:? "." int                {% g.float %}
bool       -> "true"                       {% g.boolTrue %}
            | "false"                      {% g.boolFalse %}
nul        -> "null"                       {% g.null_ %}
methodCall -> id "." id argCallList        {% g.methodCall %}
closure    -> "func" __ id argDefList stmt {% g.closure %}




# HELPERS

argCallList -> "(" (expr ("," _ expr):*):? ")" {% g.argCallList %}
argDefList  -> "(" (id ("," _ id):*):? ")"     {% g.argDefList %}
methodList  -> "{" _ (method _):* "}"          {% g.methodList %}
method      -> id argDefList stmt              {% g.method %}
elseif      -> _ "elseif" __ expr __ stmt      {% g.elseif %}
else        -> _ "else" __ stmt                {% g.else %}