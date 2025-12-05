/**
 * IMC y diagnostico
 */

let peso = parseFloat(prompt("Peso:"));
let altura = parseFloat(prompt("Estatura:"));

let imc = peso / (altura * altura);
console.log("IMC:", imc);

if (imc < 16) {
  console.log("Criterio de ingreso en hospital");
} else if (imc < 17) {
  console.log("Infrapeso");
} else if (imc < 18) {
  console.log("Bajo peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Sobrepeso (Obesidad de grado I)");
} else if (imc < 35) {
  console.log("Sobrepeso crónico (Obesidad de grado II)");
} else if (imc < 40) {
  console.log("Sobrepeso crónico (Obesidad de grado III)");
} else {
  console.log("Obesidad mórbida (Obesidad de grado IV)");
}
