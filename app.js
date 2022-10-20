// Para mostrar en consola
console.log('hola mundo')

// Aclaracion de variables
let numero = 15
let palabras = 'hola mundo' 

console.log (numero)
console.log(palabras)

//no se puede poner dos variables iguales con distintos tamaños
//no acepta ñ --> ni

// entrada de datos por teclado (ya no se usa)
let edad = prompt ('ingrese su edad')
let nombre = prompt('nombre')

//para mostrar alguna variable dentro de una oracion ${} entre ` (alt+96) 

console.log(`su nombre es ${nombre} y su edad es ${edad} años`)


// let nombre = prompt('nombre')
// let apellido = prompt('apellido')
// let edad = prompt('edad')
// let estado_civil = prompt('estado civil')
// let email = prompt('email')

// console.log(`su nombre completo es ${nombre} ${apellido}. Su edad ${edad}, estado civil ${estado_civil} y por ultimo su email ${email}`)

// let valor1 = prompt('numero 1')
// let valor2 = prompt('numero 2')

// //con la suma valor1 y valor2 se concatena
// // la solucion es usar paserInt() (pasa del string al valor entero)

// let resultado_suma = parseInt(valor1) + parseInt(valor2)

// let resultado_divicion = valor1/valor2
// let resultado_resta = valor1 - valor2
// let resultado_multi = valor1 * valor2

// console.log (resultado_suma)
// console.log (resultado_divicion)
// console.log (resultado_resta)
// console.log (resultado_multi)

//estructura condicional simple (if)

// let numero = prompt('ingrese numero')

// if(numero > 4){

//     console.log('si')

// }

// tecnica  tample string === react
// 2da tecnica operador ternario === react
let valor1 = prompt('numero 1')
let valor2 = prompt('numero 2')
let valor3 = prompt('numero 3')

let resultado = ((parseInt(valor1) + parseInt(valor2)+ parseInt(valor3))/3)

if(resultado >= 4){

    console.log('regular')


}else{
    console.log('reprobado')
}

//operador ternario, es el resumen del if / else (el ? representa el if y else )
resultado>=4 ? console.log('regular') : console.log('reprobado')








