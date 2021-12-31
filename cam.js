marks = [{note: 10, credit: 2}, {note: 8, credit: 5}, {note: 7, credit: 5}]

const reWe = marks.map(function(object){
    return object.note * object.credit
}).reduce(function(acc = 0, ele){
    return acc + ele
})

const credSum = marks.map(function(cred){
    return cred.credit
}).reduce(function(acc = 0, ele) {
    return acc + ele
})

const pp = reWe / credSum