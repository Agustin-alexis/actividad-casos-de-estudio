/**
 * Nivel de riesgo
 */

function ej14(){
  let nivel = nivel14.value;

  if(nivel==="" || nivel < 1 || nivel > 5){
    document.getElementById("out14").innerHTML = "❌ Nivel inválido";
    return;
  }

  let msg = {
    1: "Riesgo biológico",
    2: "Riesgo químico",
    3: "Riesgo físico",
    4: "Riesgo ergonómico",
    5: "Riesgo psicosocial"
  }[nivel];

  document.getElementById("out14").innerHTML = ` ${msg}`;
}

