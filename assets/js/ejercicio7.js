/**
 * Salario con horas extra
 */

let horas = parseInt(prompt("Horas laboradas:"));
let tarifa = parseFloat(prompt("Tarifa por hora:"));

let salario;

if (horas <= 40) {
  salario = horas * tarifa;
} else {
  let extras = horas - 40;
  salario = (40 * tarifa) + (extras * tarifa * 1.5);
}

console.log("Salario del trabajador es: $" + salario);
