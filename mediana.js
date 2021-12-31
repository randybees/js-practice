function median(list) {

    function pair(number) {
        if (number % 2 === 0) {
            return true
        } else {
            return false
        }
    }

    let mediana
    if (pair(list.length)) {
        mediana = (list[(list.length / 2)] + list[(list.length / 2) - 1]) / 2 
    } else {
        mediana = list[parseInt(list.length / 2)]
    }

    return mediana
}

//Order list
function order(list) {
    let i = 0
    while (i < (list.length - 1)) {
        for (let i = 0; i < (list.length - 1); i++) {
            if (list[i] > list[i+1]) {
                let a = list[i]
                let b = list[i+1]
                list[i] = b
                list[i+1] = a
            }
        }
        i++
    }
    return list
}

numeros.sort(function(a, b){return a - b});