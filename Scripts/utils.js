let submissions = document.getElementById("inputString");
let tArea = document.getElementById("answer");

document.getElementById("process").addEventListener("click", () => {
    tArea.value = calcularScoreBoard(submissions.value);
});

function calcularScoreBoard(m){
    let obj = {};

    m.split(";").forEach((element) => {
        let [n, p, time, L] = element.split(" ");

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
        team.problemsSolved = Object.values(team.problems).reduce((count, problemAttempts) => {
            return count + (problemAttempts.includes('C') ? 1 : 0);
        }, 0);
        
        Object.values(team.problems).forEach(problemAttempts => {
            if (!problemAttempts.includes('C')) {
                team.time -= problemAttempts.filter(attempt => attempt === 'I').length * 20;
            }
        });
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