/**
 * IMC y diagnostico
 */

function ej11(){
  let peso = peso11.value;
  let altura = altura11.value;

  if(peso==="" || altura==="" || peso<=0 || altura<=0){
    document.getElementById("out11").innerHTML = "❌ Datos inválidos";
    return;
  }

  peso = Number(peso);
  altura = Number(altura);

  let imc = peso / (altura * altura);
  let d = "";

  if(imc < 16) d = "Criterio de ingreso en hospital";
  else if(imc < 17) d = "Infrapeso";
  else if(imc < 18) d = "Bajo peso";
  else if(imc < 25) d = "Peso normal";
  else if(imc < 30) d = "Sobrepeso (Grado I)";
  else if(imc < 35) d = "Sobrepeso crónico (Grado II)";
  else if(imc < 40) d = "Sobrepeso crónico (Grado III)";
  else d = "Obesidad mórbida";

  document.getElementById("out11").innerHTML = `IMC: ${imc.toFixed(2)} — ${d}`;
}
