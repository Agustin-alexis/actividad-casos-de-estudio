/**
 * Tipo de triangulo
 */

let lado1 = parseFloat(prompt("lado1:"));
let lado2 = parseFloat(prompt("lado2:"));
let lado3 = parseFloat(prompt("lado3:"));

if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
  console.log("¡Valor no valido!");
} else {
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("Es un triangulo equilátero");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Es un triángulo isósceles");
  } else {
    console.log("Es un triángulo escaleno");
  }
}
