/**
 * Diagnostico de temperatura
 */

function ej12(){
  let t = temp12.value;

  if(t === ""){
    document.getElementById("out12").innerHTML = "❌ Temperatura inválida";
    return;
  }

  t = Number(t);

  let m =
    t < 0 ? "Clima helado" :
    t < 10 ? "Clima muy frío" :
    t < 20 ? "Clima frío" :
    t < 30 ? "Normal" :
    t < 40 ? "Hace calor" :
    "Hace mucho calor";

  document.getElementById("out12").innerHTML = `${m}`;
}

