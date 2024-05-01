let input = document.getElementById("inputString");
let tArea = document.getElementById("answer");
let option = document.getElementById("options");

document.getElementById("process").addEventListener("click", function(){calcularScoreBoard(input.value);});

function calcularScoreBoard(caso){
    let equipos = {};

    caso.split(";").forEach((element) => {
        let [team, problem, time, status] = element.split(" ");

        if (!(team in equipos)) {
            equipos[team] = {team, problem: 0, time: 0, status: ""};
        }

        if (status === 'I') {
            equipos[team].time += 20;
        }

        if (status === 'C') {
            equipos[team].problem += 1;
            equipos[team].time += parseInt(time);
        }

        equipos[team].status = status;
    });

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

    tArea.value = equiposArray.map(equipo => `${equipo.team} ${equipo.problem} ${equipo.time}`).join('\n');
}
