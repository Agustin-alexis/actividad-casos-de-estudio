/**
 * Nivel de riesgo
 */

let nivel = parseInt(prompt("Ingrese un nivel (1-5):"));

switch (nivel) {
  case 1:
    console.log("Riesgo biológico");
    break;
  case 2:
    console.log("Riesgo químico");
    break;
  case 3:
    console.log("Riesgo físico");
    break;
  case 4:
    console.log("Riesgo ergonómico");
    break;
  case 5:
    console.log("Riesgo psicosocial");
    break;
  default:
    console.log("Nivel de riesgo no válido.");
}
