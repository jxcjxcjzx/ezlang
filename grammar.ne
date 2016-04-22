@builtin "whitespace.ne"
@builtin "string.ne"

@{%
var g = require('./grammar')
%}





program -> _ blocks _      {% g.program %}
blocks  -> block           {% g.uniqueBlock %}
         | blocks __ block {% g.blocks %}
block   -> expr            {% id %}
         | stmt            {% id %}


curlyBlock -> "{" _ blocks _ "}" {% g.curlyBlock %}


expr      -> primitive        {% id %}
           | id               {% id %}
           | class            {% id %}
           | "(" _ expr _ ")" {% g.parenExpr %}
id        -> [a-zA-Z]:+       {% g.id %}

class     -> "class" _ "{" _ method:* _ "}"                {% g.class %}
method    -> id _ "(" _ id:? ("," _ id):* ")" _ curlyBlock {% g.method %}

primitive -> int              {% id %}
           | str              {% id %}
int       -> [0-9]:+          {% g.int %}
str       -> dqstring         {% id %}
           | sqstring         {% id %}
# true, false and null handled by the id postprocessor




stmt         -> ifstmt                        {% id %}
              | whilestmt                     {% id %}
              | assignment                    {% id %}
              | addition                      {% id %}
              | substraction                  {% id %}
ifstmt       -> "if" __ expr __ curlyBlock    {% g.if %}
whilestmt    -> "while" __ expr __ curlyBlock {% g.while %}
assignment   -> id _ "=" _ expr               {% g.assignment %}
addition     -> expr _ "+" _ expr             {% g.addition %}
substraction -> expr _ "-" _ expr             {% g.substraction %}