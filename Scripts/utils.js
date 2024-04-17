let input = document.getElementById("inputString");
document.getElementById("reporte").addEventListener("click", desplegar);
let tArea = document.getElementById("respuesta");
document.getElementById("ingresar").addEventListener("click", function(){calcularScoreBoard(input.value);});
let opcion = document.getElementById("criterio");

function calcularScoreBoard(caso){
    tArea.value = "";
    caso.split(";").forEach((elemento) => {
        let resultado = elemento.split(" ");
        resultado[1] = parseInt(resultado[1]);
        resultado.sort((a, b) => a[1] - b[1]);
        console.log(resultado); 
        tArea.value += `${resultado[0]} ${resultado[1]} ${resultado[2]} ${resultado[3]}\n`;
    });
    console.log(tArea.value);
}

function desplegar(){
    if(opcion.value == "problemsSolved"){
        tArea.value = tArea.value.split('\n').filter(Boolean).sort((a, b) => {
            const scoreA = parseInt(a.split(' ')[1]);
            const scoreB = parseInt(b.split(' ')[1]);
            return scoreB - scoreA;
        }).join('\n');
    } else if(opcion.value == "penaltyTime"){
        tArea.value = tArea.value.split('\n').filter(Boolean).sort((a, b) => {
            const scoreA = parseInt(a.split(' ')[2]);
            const scoreB = parseInt(b.split(' ')[2]);
            return scoreA - scoreB;
        }).join('\n');
    }
}