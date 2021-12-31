function search (list) {
    let listCount = {}
    list.map (
        function (element) {
            if (listCount[element]) {
                listCount[element] += 1
            } else {
                listCount[element] = 1
            }
        }
    )

    let listArray = Object.entries(listCount).sort(
        function (a, b) {
            return a[1] - b[1]
        }
    )
    
    let mode = listArray[listArray.length - 1]
    console.log(mode)
}