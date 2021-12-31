function calculate(price, discount) {
    const final = ((price * (100 - discount)) / 100) 
    return final
}

function final() {
    const inputPrice = document.getElementById("inputp")
    const priceValue = inputPrice.value
    const inputD = document.getElementById("inputd")
    const inputDValue = inputD.value
    const finalPrice = calculate(priceValue, inputDValue) 
    const answerp = document.getElementById("answer")
    answerp.innerText = "The final price is $" + finalPrice
}