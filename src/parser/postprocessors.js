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
        
    },
    
    final(d, l, r) {
        
    },
    
    stmtBlock(d, l, r) {
        
    },
    
    stmt(d, l, r) {
        
    },
    
    stmtListSingle(d, l, r) {
        
    },
    
    stmtList(d, l, r) {
        
    },
    
    expr(d, l, r) {
        
    },
    
    comment(d, l, r) {
        
    },
    
    if_(d, l, r) {
        
    },
    
    while_(d, l, r) {
        
    },
    
    assign_(d, l, r) {
        
    },
    
    return_(d, l, r) {
        
    },
    
    class_(d, l, r) {
        
    },
    
    func(d, l, r) {
        
    },
    
    id(d, l, r) {
        var res = d[0] + d[1].join('')
        
        if (reserved.includes(res)) {
            return r
        }
    },
    
    str(d, l, r) {
        
    },
    
    int(d, l, r) {
        
    },
    
    float(d, l, r) {
        
    },
    
    boolTrue(d, l, r) {
        
    },
    
    boolFalse(d, l, r) {
        
    },
    
    null_(d, l, r) {
        
    },
    
    methodCall(d, l, r) {
        
    },
    
    closure(d, l, r) {
        
    },
    
    argCallList(d, l, r) {
        
    },
    
    argDefList(d, l, r) {
        
    },
    
    methodList(d, l, r) {
        
    },
    
    method(d, l, r) {
        
    },
    
    elseif(d, l, r) {
        
    },
    
    else_(d, l, r) {
        
    },
    
}