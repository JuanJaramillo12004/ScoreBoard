// Almacenar elementos del DOM en variables
let input = document.getElementById("inputString");
let tArea = document.getElementById("respuesta");
let opcion = document.getElementById("criterio");

// Agregar event listeners
document.getElementById("reporte").addEventListener("click", desplegar);
document.getElementById("ingresar").addEventListener("click", function(){calcularScoreBoard(input.value);});

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

/* 
function calcularScoreBoard(caso){
    let casos = caso.split(";");

    tArea.value = casos.map(elemento => {
        let resultado = elemento.split(" ");
        resultado[1] = parseInt(resultado[1]);
        resultado.sort((a, b) => a[1] - b[1]);
        return `${resultado[0]} ${resultado[1]} ${resultado[2]} ${resultado[3]}`;
    }).join('\n');
}

function desplegar(){
    let lineas = tArea.value.split('\n').filter(Boolean);

    if(opcion.value == "problemsSolved"){
        tArea.value = lineas.sort((a, b) => {
            const scoreA = parseInt(a.split(' ')[1]);
            const scoreB = parseInt(b.split(' ')[1]);
            return scoreB - scoreA;
        }).join('\n');
    } else if(opcion.value == "penaltyTime"){
        tArea.value = lineas.sort((a, b) => {
            const scoreA = parseInt(a.split(' ')[2]);
            const scoreB = parseInt(b.split(' ')[2]);
            return scoreB - scoreA;
        }).join('\n');
    }
} 
*/


/* 
function calcularScoreBoard(caso){
    let resultados = caso.split(";").map((elemento) => {
        let resultado = elemento.split(" ");
        resultado[1] = parseInt(resultado[1]);
        resultado.sort((a, b) => a - b);
        return `${resultado[0]} ${resultado[1]} ${resultado[2]} ${resultado[3]}`;
    });
    tArea.value = resultados.join('\n');
}

function desplegar(){
    let lineas = tArea.value.split('\n').filter(Boolean);
    if(opcion.value == "problemsSolved"){
        tArea.value = lineas.sort((a, b) => {
            const scoreA = parseInt(a.split(' ')[1]);
            const scoreB = parseInt(b.split(' ')[1]);
            return scoreB - scoreA;
        }).join('\n');
    } else if(opcion.value == "penaltyTime"){
        tArea.value = lineas.sort((a, b) => {
            const scoreA = parseInt(a.split(' ')[2]);
            const scoreB = parseInt(b.split(' ')[2]);
            return scoreA - scoreB;
        }).join('\n');
    }
} 
*/