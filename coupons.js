const coupons = ["get10", "get15", "get20"]

function calculate(x, y) {
    const final = ((x * (100 - y)) / 100) 
    return final
}

function calculator() {
    const inputPrice = document.getElementById("price")
    const priceValue = inputPrice.value
    const inputCode = document.getElementById("code")
    const codeValue = inputCode.value
    
    let discount

    switch (true) {
        case (codeValue === coupons[0]):
            discount = 10
            break;
        case (codeValue === coupons[1]):
            discount = 15
            break;
        case (codeValue === coupons[2]):
            discount = 20
            break;
        default:
            discount = 0        
    }

    const finalPrice = calculate(priceValue, discount)
    const answerp = document.getElementById("calculated")
    if (discount===0) {
        answerp.innerText = "Code is not valid"   
    } else {
        answerp.innerText = "The final price is $" + finalPrice
    }
}