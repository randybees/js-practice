/* function calculator(list) {
    let listSum = 0;
    for(let i = 0; i < list.length; i++) {
        listSum = listSum + list[i]
    }
    const promList = listSum / list.length

    return promList
} */

//Utilizando array methods
function calculator(list) {
    const listSum = list.reduce(
        function (acum = 0, newEl) {
            return acum + newEl
        }
    )

    const promList = listSum / list.length

    return promList
}