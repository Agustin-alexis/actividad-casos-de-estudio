/**
 * La cosecha parrillada
 */

function actividad1(){
    let p = parseInt(document.getElementById("p1").value);

    if (isNaN(p) || p<=0){
        document.getElementById("r1").innerHTML = "❌ Ingrese un número válido";
        return;
    }

    let costoPorPersona;

    if (p <= 200) {
        costoPorPersona = 25000;
    }else if (p <= 300) {
        costoPorPersona = 18500;
    }else {
        costoPorPersona = 16000;
    }

    let total = p * costoPorPersona;
    document.getElementById("r1").innerHTML = `$ ${total}`
}