function height(a, b, base) {
    if (a===b && a!=base) {
        console.log("Is an isoceles triangle!")
        const h = Math.sqrt((a*a)-((base*base)/4))
        console.log("Height= " + h)  
    } else {
        console.log("It is not an isoceles triangle")
    }
}