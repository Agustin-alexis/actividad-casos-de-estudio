/**
 * Tipo de triangulo
 */

function ej13(){
  let a = a13.value;
  let b = b13.value;
  let c = c13.value;

  if(a==="" || b==="" || c==="" || a<=0 || b<=0 || c<=0){
    document.getElementById("out13").innerHTML = "❌ Valores inválidos";
    return;
  }

  a = Number(a);
  b = Number(b);
  c = Number(c);

  let tipo =
    a === b && b === c ? "Equilátero" :
    (a === b || a === c || b === c) ? "Isósceles" :
    "Escaleno";

  document.getElementById("out13").innerHTML = `✔ ${tipo}`;
}

