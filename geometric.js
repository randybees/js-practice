// Square code
console.group("Squares")
const side = 5
console.log("Los lados del cuadrado miden (cm): " + side)

const perimeter = side * 4
console.log("El perimetro del cuadrado es (cm): " + perimeter)

const area = side * side
console.log("El area del cuadrado es (cm2): " + area)
console.groupEnd()

// Triangle code
console.group("Traingles")
const side1 = 6
const side2 = 6
const base = 4
const height = 5.5
console.log("Los lados del tringulo en cm son " 
    + side1 
    + ", " 
    + side2 
    + ", " 
    + base
)
console.log("La altura del triángulo en cm es " + height)

const tperimeter = side1 + side2 + base
console.log("El perimetro del triángulo en cm es " 
+ tperimeter)

const tarea = (base * height) / 2
console.log("El area del triángulo en cm2 es "
+ tarea) 
console.groupEnd()

// Circle code
console.group("Circles")

const radius = 4
console.log("El radio del círculo en cm es: " + radius )

const diameter = radius * 2
console.log("El diametro del círculo en cm es: " + diameter )

const pi = Math.PI
console.log("La constante Pi en cm es: " + pi )

const cperimeter = diameter * pi
console.log("La circunferencia del círculo en cm es: " 
+ cperimeter )

const carea = (radius * radius) * pi
console.log("El area del círculo en cm2 es: " + carea )

console.groupEnd()

