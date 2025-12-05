/**
 * Mayor de tres numeros
 */

let a = parseInt(prompt("numero1:"));
let b = parseInt(prompt("numero2:"));
let c = parseInt(prompt("numero3:"));

let mayor = a;

if (b > mayor) mayor = b;
if (c > mayor) mayor = c;

console.log("El numero " + mayor + " es el mayor");
