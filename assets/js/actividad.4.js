/**
 * Paquetería TCC
 */

function actividad4() {

    let peso = document.getElementById("peso4").value;
    let zona = document.getElementById("zona4").value;

    if (isNaN(peso) || peso <= 0) {
        document.getElementById("r4").innerHTML = "❌ Ingrese un peso válido";
        return;
    }

    peso = parseFloat(peso);

    if (peso > 85) {
        document.getElementById("r4").innerHTML = `❌ El paquete con peso de ${peso} kg excede el peso permitido`;
        return;
    }

    let costoGram;

    if (zona == "1") {
        costoGram = 210;
    } else if (zona == "2") {
        costoGram = 180;
    } else if (zona == "3") {
        costoGram = 220;
    } else if (zona == "4") {
        costoGram = 340;
    } else if (zona == "5") {
        costoGram = 370;
    }

    let total = peso * costoGram;

    document.getElementById("r4").innerHTML = `Valor: $ ${total.toLocaleString()}`;
}
