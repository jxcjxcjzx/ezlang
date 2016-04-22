module.exports = {
    
    program(d) {
        return d[1]
    },
    
    uniqueBlock(d) {
        return d[0]
    },
    
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
    
    int(d) {
        return parseInt(d[0].join(''), 10)
    },
    
    null(d) {
        return {
            type: 'null'
        }
    },
    
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
    
    parenExpr(d) {
        return d[2]
    },
    
    class(d) {
        return {
            type: 'class',
            value: d[4],
        }
    },
    
    method(d) {
        var args
        
        if (d[4] === null) {
            args = []
        } else {
            args = [d[4].value]
            
            d[5].forEach(function (value) {
                args.push(value[2].value)
            })
        }
        
        return {
            id: d[0].value,
            args: args,
            value: d[8],
        }
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
    
    assignment(d) {
        return {
            type:  'assign',
            id:    d[0].value,
            value: d[4],
        }
    },
    
    addition(d) {
        return {
            type:   'addition',
            value1: d[0],
            value2: d[4],
        }
    },
    
    substraction(d) {
        return {
            type:   'substraction',
            value1: d[0],
            value2: d[4],
        }
    }
    
}