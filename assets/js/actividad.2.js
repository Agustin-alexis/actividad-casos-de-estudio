/**
 * Compra de LLantas
 */

function actividad2(){
    let precio = document.getElementById("p2").value;

    if (isNaN(precio) || precio<=0){
        document.getElementById("r2").innerHTML = "❌ Ingrese un precio válido";
        return;
    }

    let porcentaje;

    if (precio > 125000){
        porcentaje = 0.35; 
    }else {
        porcentaje = 0.10;
    }

    let descuento = precio * porcentaje;
    let total = precio - descuento;

    document.getElementById("r2").innerHTML =`<strong>Descuento:</strong> $ ${descuento} <br>
        <strong>Porcentaje:</strong> ${porcentaje}% <br>
        <strong>Total a pagar:</strong> $ ${total}
    `;

}