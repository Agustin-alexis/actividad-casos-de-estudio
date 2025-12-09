/**
 * Salario con horas extra
 */

function ej7(){
  let horas = document.getElementById("horas7").value;
  let tarifa = document.getElementById("tarifa7").value;

  if(horas === "" || tarifa === "" || horas < 0 || tarifa < 0){
    document.getElementById("out7").innerHTML = "❌ Datos inválidos";
    return;
  }

  horas = Number(horas);
  tarifa = Number(tarifa);

  let salario = horas <= 40 
    ? horas * tarifa 
    : (40 * tarifa) + ((horas - 40) * tarifa * 1.5);

  document.getElementById("out7").innerHTML = ` Salario: $${salario}`;
}

