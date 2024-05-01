let input = document.getElementById("inputString");
let tArea = document.getElementById("answer");
let option = document.getElementById("options");

document.getElementById("process").addEventListener("click", function(){calcularScoreBoard(input.value);});

function calcularScoreBoard(caso){
    let equipos = {};

    caso.split(";").forEach((element) => {
        let [team, problem, time, status] = element.split(" ");

        if (!(team in equipos)) {
            equipos[team] = {team, problems: {}, time: 0};
        }

        if (!(problem in equipos[team].problems)) {
            equipos[team].problems[problem] = status;
        }

        if (status === 'I') {
            equipos[team].time += 20;
        }

        if (status === 'C') {
            equipos[team].problems[problem] = status;
            equipos[team].time += parseInt(time);
        }
    });

    let equiposArray = Object.values(equipos);
    equiposArray.forEach(equipo => {
        equipo.problemsSolved = Object.values(equipo.problems).filter(status => status === 'C').length;
        if (Object.values(equipo.problems).includes('I')) {
            equipo.time -= 20;
        }
    });
    equiposArray.sort((a, b) => {
        if (b.problemsSolved !== a.problemsSolved) {
            return b.problemsSolved - a.problemsSolved;
        } else if (a.time !== b.time) {
            return a.time - b.time;
        } else {
            return a.team.localeCompare(b.team);
        }
    });

    tArea.value = equiposArray.map(equipo => `${equipo.team} ${equipo.problemsSolved} ${equipo.time}`).join('\n');
}