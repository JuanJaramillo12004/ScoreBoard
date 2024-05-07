let input = document.getElementById("inputString");
let tArea = document.getElementById("answer");
let option = document.getElementById("options");

document.getElementById("process").addEventListener("click", () => {
    tArea.value = calcularScoreBoard(input.value);
});

function calcularScoreBoard(caso){
    let equipos = {};

    caso.split(";").forEach((element) => {
        let [team, problem, time, status] = element.split(" ");

        if (!(team in equipos)) {
            equipos[team] = {team, problems: {}, time: 0};
        }

        if (!(problem in equipos[team].problems)) {
            equipos[team].problems[problem] = [];
        }

        equipos[team].problems[problem].push(status);

        if (status === 'I') {
            equipos[team].time += 20;
        }

        if (status === 'C') {
            equipos[team].time += parseInt(time);
        }
    });

    let equiposArray = Object.values(equipos);
    equiposArray.forEach(equipo => {
        equipo.problemsSolved = Object.values(equipo.problems).reduce((count, problemAttempts) => {
            return count + (problemAttempts.includes('C') ? 1 : 0);
        }, 0);
        Object.values(equipo.problems).forEach(problemAttempts => {
            if (!problemAttempts.includes('C')) {
                equipo.time -= problemAttempts.filter(attempt => attempt === 'I').length * 20;
            }
        });
    });
    equiposArray.sort((a, b) => {
        if (b.problemsSolved !== a.problemsSolved) {
            return b.problemsSolved - a.problemsSolved;
        }
        return a.time - b.time;
    });

    return equiposArray.map(equipo => `${equipo.team} ${equipo.problemsSolved} ${equipo.time}`).join('\n');
}