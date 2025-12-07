/**
 * Audífonos In Ear
 */

function actividad6() {

    let cantidad = document.getElementById("cant6").value;

    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("r6").innerHTML = "❌ Ingrese una cantidad válida";
        return;
    }

    cantidad = parseInt(cantidad);

    let precioUnit;

    if (cantidad >= 1000) {
        precioUnit = 49850;
    } else {
        precioUnit = 71290;
    }

    let total = cantidad * precioUnit;

    document.getElementById("r6").innerHTML = `Total a pagar es: $ ${total}</strong>`;
}
