@builtin "whitespace.ne"
@builtin "string.ne"

@{%
var g = require('./grammar')
%}





program -> _ blocks _      {% g.program %}
blocks  -> block           {% id %}
         | blocks __ block {% g.blocks %}
block   -> expr            {% id %}
         | stmt            {% id %}


curlyBlock -> "{" _ blocks _ "}" {% g.curlyBlock %}


expr      -> primitive        {% id %}
           | id               {% id %}
           | class            {% id %}
           | "(" _ expr _ ")" {% g.parenExpr %}
id        -> [a-zA-Z]:+       {% g.id %}

class     -> "class" _ "{" _ method:* _ "}" {% g.class %}
method    -> id _ argList _ curlyBlock      {% g.method %}
argList   -> "(" _ id:? ("," _ id):* ")"    {% g.argList %}

primitive -> int      {% id %}
           | intNeg   {% id %}
           | str      {% id %}
int       -> [0-9]:+  {% g.int %}
intNeg    -> "-" int  {% g.intNeg %}
str       -> dqstring {% id %}
           | sqstring {% id %}





stmt         -> ifOrWhile  {% id %}
              | assignment {% id %}
              | addOrSub   {% id %}
ifOrWhile    -> ("if" | "while") __ expr __ curlyBlock {% g.ifOrWhile %}
assignment   -> id _ "=" _ expr                        {% g.assignment %}
addOrSub     -> expr _ ("+" | "-") _ expr              {% g.addOrSub %}