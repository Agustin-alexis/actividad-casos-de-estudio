/**
 * Par o impar
 */

function ej10(){
  let num = num10.value;

  if(num === ""){
    document.getElementById("out10").innerHTML = "❌ Número inválido";
    return;
  }

  num = Number(num);

  document.getElementById("out10").innerHTML = num % 2 === 0 ? ` ${num} es par` : ` ${num} es impar`;
}

