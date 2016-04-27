var reserved = [
    'return',
    'while',
    'if',
    'elseif',
    'else',
    'func',
    'class',
    'true',
    'false',
    'null',
]

module.exports = {
    
    finalEmpty(d, l, r) {
        return null
    },
    
    final(d, l, r) {
        return d[0]
    },
    
    stmtsBlock(d, l, r) {
        if (d[2] === null) {
            return {
                type: 'stmtList',
                value: [],
                location: l,
            }
        }
        
        d[2][0].location = l
        
        return d[2][0]
    },
    
    stmtsSingle(d, l, r) {
        return { type: 'stmtList', value: [ d[0] ], location: l }
    },
    
    stmtListSingle(d, l, r) {
        return { type: 'stmtList', value: [ d[0] ], location: l }
    },
    
    stmtList(d, l, r) {
        return {
            type: 'stmtList',
            value: d[0].value.concat([ d[2] ]),
            location: l,
        }
    },
    
    expr(d, l, r) {
        return { type: 'expr', value: d[0], location: l }
    },
    
    comment(d, l, r) {
        return { type: 'comment', value: d[1].join('') }
    },
    
    if_(d, l, r) {
        return {
            type: 'if',
            condition: d[2],
            value: d[4],
            elseif: d[5] === null ? [] : d[5],
            else_: d[6],
            location: l,
        }
    },
    
    while_(d, l, r) {
        return {
            type: 'while',
            condition: d[2],
            value: d[4],
            location: l,
        }
    },
    
    assign(d, l, r) {
        return {
            type: 'assign',
            id: d[0],
            value: d[4],
            location: l,
        }
    },
    
    return_(d, l, r) {
        return {
            type: 'return',
            value: d[2],
            location: l,
        }
    },
    
    class_(d, l, r) {
        return {
            type: 'class',
            id: d[2],
            extends: d[3] === null ? null : d[3][2],
            value: d[5],
            location: l,
        }
    },
    
    func(d, l, r) {
        return {
            type: 'function',
            id: d[2],
            args: d[3],
            value: d[4],
            location: l,
        }
    },
    
    id(d, l, r) {
        var res = d[0] + d[1].join('')
        
        if (reserved.includes(res)) {
            return r
        }
        
        return { type: 'id', value: res, location: l }
    },
    
    str(d, l, r) {
        return { type: 'str', value: d[0], location: l }
    },
    
    int(d, l, r) {
        return { type: 'in', value: parseInt(d[0].join('')), location: l }
    },
    
    float(d, l, r) {
        if (d[0] === null) d[0] = 0
        
        return { type: 'float', value: parseFloat(d[0] + '.' + d[2]), location: l }
    },
    
    boolTrue(d, l, r) {
        return { type: 'bool', value: true, location: l }
    },
    
    boolFalse(d, l, r) {
        return { type: 'bool', value: false, location: l }
    },
    
    null_(d, l, r) {
        return { type: 'null', location: l }
    },
    
    methodCall(d, l, r) {
        return {
            type: 'methodCall',
            id: d[0],
            prop: d[2],
            args: d[3],
            location: l,
        }
    },
    
    closure(d, l, r) {
        return { type: 'closure', args: d[1], value: d[2], location: l }
    },
    
    argList(d, l, r) {
        if (d[1] === null) {
            return []
        }
        
        var res = [ d[1][0] ]
        
        for (var value of d[1][1]) {
            res.push(value[2])
        }
        
        return res
    },
    
    methodList(d, l, r) {
        if (d[2] === null) {
            return []
        }
        
        var res = []
        
        for (var value of d[2]) {
            res.push(value[0])
        }
        
        return res
    },
    
    method(d, l, r) {
        return { type: 'method', id: d[0], args: d[1], value: d[2], location: l }
    },
    
    elseif(d, l, r) {
        return {
            type: 'elseif',
            condition: d[3],
            value: d[5],
            location: l,
        }
    },
    
    else_(d, l, r) {
        return {
            type: 'else',
            value: d[3],
            location: l,
        }
    },
    
}