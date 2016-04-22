module.exports = {
    
    program(d) { return d[1] },
    
    blocks(d) {
        if (!Array.isArray(d[0])) {
            d[0] = [d[0]]
        }
        
        d[0].push(d[3])
        
        return d[0]
    },
    
    curlyBlock(d) {
        var res = d[2]
        
        if (Array.isArray(res)) {
            return res
        }
        
        var type = typeof res
        if (type === 'string' || type === 'number' || type === 'object') {
            return [res]
        }
    },
    
    int(d) { return parseInt(d[0].join(''), 10) },
    
    null(d) { return { type: 'null' } },
    
    id(d) {
        var id = d[0].join('')
        
        if (id === 'null')  return { type: 'null' }
        if (id === 'true')  return true
        if (id === 'false') return false
        
        return {
            type: 'id',
            value: id,
        }
    },
    
    parenExpr(d) { return d[2] },
    
    class(d) { return { type: 'class', value: d[4] } },
    
    method(d) {
        return {
            id: d[0].value,
            args: d[2],
            value: d[4],
        }
    },
    
    argList(d) {
        var args
        
        if (d[2] === null) {
            args = []
        } else {
            args = [d[2].value]
            
            d[3].forEach(function (value) {
                args.push(value[2].value)
            })
        }
        
        return args
    },
    
    if(d) {
        return {
            type:      'if',
            condition: d[2],
            value:     d[6],
        }
    },
    
    while(d) {
        return {
            type:      'while',
            condition: d[2],
            value:     d[6],
        }
    },
    
    ifOrWhile(d) {
        var type = d[0] === 'if' ? 'if' : 'while'
        
        return {
            type:      type,
            condition: d[2],
            value:     d[6],
        }
    },
    
    assignment(d) {
        return {
            type:  'assign',
            id:    d[0].value,
            value: d[4],
        }
    },
    
    addOrSub(d) {
        var type = d[2] === '+' ? 'addition' : 'substraction'
        
        return {
            type: type,
            value1: d[0],
            value2: d[4],
        }
    }
    
}