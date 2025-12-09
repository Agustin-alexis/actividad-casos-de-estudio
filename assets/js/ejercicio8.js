/**
 * Mayor de tres numeros
 */

function ej8(){
  let a = n1_8.value;
  let b = n2_8.value;
  let c = n3_8.value;

  if(a==="" || b==="" || c===""){
    document.getElementById("out8").innerHTML = "❌ Números inválidos";
    return;
  }

  document.getElementById("out8").innerHTML = ` El mayor es: ${Math.max(a,b,c)}`;
}

