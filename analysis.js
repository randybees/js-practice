const colSalaries = colombia.map(function(person){
    return person.salary
})

const colSorted = colSalaries.sort(function(a,b){
    return a - b
})

function median(list) {

    function pair(number) {
        return (number % 2 === 0)
    }

    let mediana
    if (pair(list.length)) {
        mediana = (list[(list.length / 2)] + list[(list.length / 2) - 1]) / 2 
    } else {
        mediana = list[parseInt(list.length / 2)]
    }

    return mediana
}

const colMedian = median(colSorted)

const spliceStart = (colSorted.length * 90) / 100
const spliceCount = colSorted.length - spliceStart

const colSalariesTop10 = colSorted.splice(spliceStart,spliceCount)

