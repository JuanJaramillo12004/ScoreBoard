let input = document.getElementById("inputString");
let tArea = document.getElementById("answer");
let option = document.getElementById("options");

document.getElementById("process").addEventListener("click", function(){calcularScoreBoard(input.value);});

function calcularScoreBoard(caso){
    // Creamos un objeto vacío para almacenar los equipos y sus puntajes
    let equipos = {};

    // Dividimos el caso en elementos separados por ";"
    caso.split(";").forEach((element) => {
        // Dividimos cada elemento en equipo, problema, tiempo y estado
        let [team, problem, time, status] = element.split(" ");

        // Si el equipo no existe en el objeto equipos, lo agregamos con valores iniciales
        if (!(team in equipos)) {
            equipos[team] = {team, problem: 0, time: 0};
        }

        // Si el estado es 'I' (incorrecto), sumamos 20 al tiempo del equipo
        if (status === 'I') {
            equipos[team].time += 20;
        }

        // Si el estado es 'C' (correcto), incrementamos el contador de problemas del equipo
        // y sumamos el tiempo al tiempo total del equipo
        if (status === 'C') {
            equipos[team].problem += 1;
            equipos[team].time += parseInt(time);
        }
    });

    // Convertimos el objeto equipos en un array y lo ordenamos según las reglas de puntuación
    let equiposArray = Object.values(equipos);
    equiposArray.sort((a, b) => {
        if (b.problem !== a.problem) {
            return b.problem - a.problem;
        } else if (a.time !== b.time) {
            return a.time - b.time;
        } else {
            return a.team.localeCompare(b.team);
        }
    });

    // Imprimimos los resultados en el formato especificado
    tArea.value = equiposArray.map(equipo => `${equipo.team} ${equipo.problem} ${equipo.time} C`).join('\n');
}
