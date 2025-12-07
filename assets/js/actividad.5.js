/**
 * Fedepanela
 */

function actividad5() {

    let tipo = document.getElementById("tipo5").value;
    let tam = document.getElementById("tam5").value;
    let precio = document.getElementById("precio5").value;
    let kilos = document.getElementById("kilos5").value;

    if (tipo === "" || tam === "" || precio <= 0 || kilos <= 0) {
        document.getElementById("r5").innerHTML = "❌ Ingrese todos los datos correctamente";
        return;
    }

    precio = parseFloat(precio);
    kilos = parseFloat(kilos);

    let precioFinal = precio;

    if (tipo === "P1") {

        if (tam === "1") {
            precioFinal += 1200;
        } else if (tam === "2") {
            precioFinal += 830;
        }

    } else if (tipo === "P2") {

        if (tam === "1") {
            precioFinal -= 540;
        } else if (tam === "2") {
            precioFinal -= 350;
        }
    }

    let ganancia = precioFinal * kilos;

    document.getElementById("r5").innerHTML = `La ganancia es: $ ${ganancia}</strong>`;
}
