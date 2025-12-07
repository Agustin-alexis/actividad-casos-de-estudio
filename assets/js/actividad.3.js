/**
 * Hamburguesas
 */

function actividad3(){

    let cantidad = document.getElementById("cant3").value;
    let tipo = document.getElementById("tipo3").value;
    let pago = document.getElementById("pago3").value;

    if (isNaN(cantidad) || cantidad <= 0){
        document.getElementById("r3").innerHTML = "❌ Ingrese una cantidad válida";
        return;
    }

    cantidad = parseInt(cantidad); 

    let precioUnit;

    if (tipo === "sencilla"){
        precioUnit = 20000;
    } else if (tipo === "doble"){
        precioUnit = 25000;
    } else if (tipo === "triple"){
        precioUnit = 28000;
    }

    let totalSincargo = cantidad * precioUnit;

    let cargo = (pago === "tarjeta") ? totalSincargo * 0.07 : 0;

    let totalPagar = totalSincargo + cargo;

    document.getElementById("r3").innerHTML =
    `<strong>Precio Unit:</strong> $ ${precioUnit} <br>
     <strong>Cantidad:</strong> ${cantidad} <br>
     <strong>Tipo de Pago:</strong> ${pago} <br>
     <strong>Total sin cargo:</strong> $ ${totalSincargo} <br>
     <strong>El cargo es:</strong> $ ${cargo.toLocaleString()} <br>
     <strong>Total a pagar es:</strong> $ ${totalPagar}`;
}
