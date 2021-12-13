// Square code
function sperimeter(side) {
    return side * 4
}

function sarea(side) {
    return side * side 
}

// Triangle code
function tperimeter(side1, side2, base) {
    return (side1 * 1) + (side2 * 1) + (base * 1)
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

//JavaScript interaction for squares
function squarePerimeter() {
    const input = document.getElementById("squareInput")
    const value = input.value
    const perimeter = sperimeter(value)
    alert(perimeter)
}

function squareArea() {
    const input = document.getElementById("squareInput")
    const value = input.value
    const area = sarea(value)
    alert(area)
}

//JavaScript interaction for triangles
function trianglePerimeter() {
    const input1 = document.getElementById("side1")
    const first = input1.value
    const input2 = document.getElementById("side2")
    const second = input2.value
    const input3 = document.getElementById("base")
    const third = input3.value
    const perimetert = tperimeter(first, second, third)
    alert(perimetert)
}

function triangleArea() {
    const input1 = document.getElementById("base")
    const first = input1.value
    const input2 = document.getElementById("height")
    const second = input2.value
    const areat = tarea(first, second)
    alert(areat)
}

//JavaScript interaction for circles
function circlePerimeter () {
    const input = document.getElementById("circleInput")
    const value = input.value
    const circumference = cperimeter(value)
    alert(circumference)
}

function circleArea () {
    const input = document.getElementById("circleInput")
    const value = input.value
    const areac = carea(value)
    alert(areac)
}