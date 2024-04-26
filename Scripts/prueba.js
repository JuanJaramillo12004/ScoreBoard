let input = document.getElementById("inputString");
let tArea = document.getElementById("answer");
let option = document.getElementById("options");

document.getElementById("process").addEventListener("click", function(){calcularScoreBoard(input.value);});

function calcularScoreBoard(caso){
    let equipos = [];

    caso.split(";").forEach((element) => {
        let [team, problem, time, status] = element.split(" ");
        let equipo = equipos.find(e => e.team === team);

        if (!equipo) {
            equipo = {team, problem: 0, time: 0};
            equipos.push(equipo);
        }

        if (status === 'I') {
            equipo.time += 20;
        }

        if (status === 'C') {
            equipo.problem += 1;
            equipo.time += parseInt(time);
        }
    });

    equipos.sort((a, b) => {
        if (b.problem !== a.problem) {
            return b.problem - a.problem;
        } else if (a.time !== b.time) {
            return a.time - b.time;
        } else {
            return a.team.localeCompare(b.team);
        }
    });

    tArea.value = equipos.map(equipo => `${equipo.team} ${equipo.problem} ${equipo.time}`).join('\n');
}