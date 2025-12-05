/**
 * Par o impar
 */

let num = prompt("Ingrese un numero:");

if (!isNaN(num) && num.trim() !== "") {
  num = Number(num);
  if (num % 2 === 0) {
    console.log(num + " es un numero par");
  } else {
    console.log(num + " es un numero impar");
  }
} else {
  console.log("¡Ingrese un numero valido!");
}
