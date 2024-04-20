/* Team1 1 5 C;Team2 5 10 C;Team3 2 15 I;Team1 3 20 R;Team2 1 25 R;Team2 4 30 C;Team1 3 35 I;Team1 3 40 C;Team3 2 45 I;Team3 2 50 C */

// Almacenar elementos del DOM en variables
let input = document.getElementById("inputString");
let tArea = document.getElementById("respuesta");
let opcion = document.getElementById("criterio");

// Agregar event listeners
document.getElementById("procesar").addEventListener("click", function(){calcularScoreBoard(input.value);});
tArea.value = "";
function calcularScoreBoard(caso){
    if (opcion.value == "enter"){
        caso.split(";").forEach((elemento) => {
            let resultado = elemento.split(" "); //elemento.trim().split(" "); 
            tArea.value += `${resultado[0]} ${resultado[1]} ${resultado[2]} ${resultado[3]}\n`;
        });

    } else if(opcion.value == "problemsSolved"){
        tArea.value = tArea.value.split('\n').sort((a, b) => {
            const scoreA = a.split(' ')[1];
            const scoreB = b.split(' ')[1];
            return scoreB - scoreA;
        }).join('\n');

    } else if(opcion.value == "penaltyTime"){
        tArea.value = tArea.value.split('\n').sort((a, b) => {
            const scoreA = a.split(' ')[2];
            const scoreB = b.split(' ')[2]; 
            return scoreA - scoreB;
        }).join('\n');

    } else { 
        tArea.value = tArea.value.split('\n').sort((a, b) => {
            const teamA = a.split(' ')[0];
            const teamB = b.split(' ')[0];
            return teamA.localeCompare(teamB);
        }).join('\n');
    }
}
