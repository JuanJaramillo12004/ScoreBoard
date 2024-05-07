let input = document.getElementById("inputString");
let tArea = document.getElementById("answer");
let option = document.getElementById("options");

document.getElementById("process").addEventListener("click", () => {
    tArea.value = calcularScoreBoard(input.value);
});

function calcularScoreBoard(caso) {
    let equipos = {};

    // Dividir el caso en eventos individuales
    let eventos = caso.split(";");

    // Procesar cada evento
    for (let evento of eventos) {
        let [team, problem, time, status] = evento.split(" ");

        // Inicializar el equipo si no existe
        if (!equipos[team]) {
            equipos[team] = {
                team,
                problems: {},
                time: 0
            };
        }

        // Inicializar el problema si no existe
        if (!equipos[team].problems[problem]) {
            equipos[team].problems[problem] = [];
        }

        // Agregar el estado al problema
        equipos[team].problems[problem].push(status);

        // Ajustar el tiempo según el estado
        if (status === 'I') {
            equipos[team].time += 20;
        } else if (status === 'C') {
            equipos[team].time += parseInt(time);
        }
    }

    // Convertir el objeto de equipos en un array para facilitar la manipulación
    let equiposArray = Object.values(equipos);

    // Calcular el número de problemas resueltos y ajustar el tiempo para cada equipo
    for (let equipo of equiposArray) {
        equipo.problemsSolved = 0;

        for (let problemAttempts of Object.values(equipo.problems)) {
            if (problemAttempts.includes('C')) {
                equipo.problemsSolved++;
            } else {
                equipo.time -= problemAttempts.filter(attempt => attempt === 'I').length * 20;
            }
        }
    }

    equiposArray.sort((a, b) => {
        if (b.problemsSolved !== a.problemsSolved) {
            return b.problemsSolved - a.problemsSolved;
        } else if (a.time !== b.time) {
            return a.time - b.time;
        } else {
            return a.team.localeCompare(b.team);
        }
    });

    // Convertir el array de equipos en una cadena de texto para la salida
    return equiposArray.map(equipo => `${equipo.team} ${equipo.problemsSolved} ${equipo.time}`).join('\n');
}