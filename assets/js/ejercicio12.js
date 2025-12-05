/**
 * Diagnostico de temperatura
 */

let temp = parseFloat(prompt("Temperatura:"));

if (temp < 0) {
  console.log("Clima helado");
} else if (temp < 10) {
  console.log("Clima muy frío");
} else if (temp < 20) {
  console.log("Clima frío");
} else if (temp < 30) {
  console.log("Normal");
} else if (temp < 40) {
  console.log("Hace calor");
} else {
  console.log("Hace mucho calor");
}
