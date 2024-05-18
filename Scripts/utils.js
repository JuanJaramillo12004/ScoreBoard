let input = document.getElementById("inputString");
let output = document.getElementById("answer");

document.getElementById("process").addEventListener("click", () => {
    output.value = calcularScoreBoard(input.value);
});

function calcularScoreBoard(caso){
    let obj = {};

    caso.split(";").forEach((m) => {
        let [n, p, time, L] = m.split(" ");

        if (!(n in obj)) {
            obj[n] = {n, problems: {}, time: 0};
        }

        if (!(p in obj[n].problems)) {
            obj[n].problems[p] = [];
        }

        obj[n].problems[p].push(L);

        if (L === 'I') {
            obj[n].time += 20;
        }

        if (L === 'C') {
            obj[n].time += parseInt(time);
        }
    });

    let bd = Object.values(obj);
    bd.forEach(team => {
        let problemsSolved = 0;
        let incorrectAttempts = 0;
    
        Object.values(team.problems).forEach(problemAttempts => {
            if (problemAttempts.includes('C')) {
                problemsSolved++;
            } else {
                incorrectAttempts += problemAttempts.filter(attempt => attempt === 'I').length;
            }
        });
    
        team.problemsSolved = problemsSolved;
        team.time -= incorrectAttempts * 20;
    });
    
    bd.sort((a, b) => {
        if (b.problemsSolved !== a.problemsSolved) {
            return b.problemsSolved - a.problemsSolved;
        } else if (a.time !== b.time) {
            return a.time - b.time;
        } else {
            return a.n.localeCompare(b.n);
        }
    });

    return bd.map(team => `${team.n} ${team.problemsSolved} ${team.time}`).join('\n');
}