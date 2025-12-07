/**
 * Actividad 7 – Llantas
 */

function actividad9() {

    let tipo = document.getElementById("tipo9").value;
    let grosor = parseFloat(document.getElementById("grosor9").value);
    let diametro = parseFloat(document.getElementById("diametro9").value);
    let marca = document.getElementById("marca9").value;


    if (tipo === "" || marca === "" || isNaN(grosor) || isNaN(diametro)) {
        document.getElementById("r9").innerHTML = "❌ Ingrese todos los datos correctamente";
        return;
    }

    let mensajeA = "";
    let mensajeB = "";

    if (diametro > 1.4) {
        mensajeA = "La rueda es para un vehículo grande.";
    } 
    else if (diametro <= 1.4 && diametro > 0.8) {
        mensajeA = "La rueda es para un vehículo mediano.";
    } 
    else {
        mensajeA = "La rueda es para un vehículo pequeño.";
    }

    if ((diametro > 1.4 && grosor < 0.4) ||
        (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {

        mensajeB = "El grosor para esta rueda es inferior al recomendado.";
    }
    
    document.getElementById("r9").innerHTML = `
        Resultado:</strong><br>
        ${mensajeA} <br>
        ${mensajeB}
    `;
}
