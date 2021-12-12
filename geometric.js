// Square code
function sperimeter(side) {
    return side * 4
}

function sarea(side) {
    return side * side 
}

// Triangle code
function tperimeter(side1, side2, base) {
    return side1 + side2 + base
}

function tarea(base, height) {
    return (base * height) / 2 
}

// Circle code
function cdiameter(radius) {
    return radius * 2
}

const pi = Math.PI
function cperimeter(radius) {
    const diameter = cdiameter(radius)
    return diameter * pi 
}

function carea(radius) {
    return pi * (radius * radius)
}