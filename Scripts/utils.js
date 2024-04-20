let input = document.getElementById("inputString");
let tArea = document.getElementById("answer");
let option = document.getElementById("options");

document.getElementById("process").addEventListener("click", function(){calcularScoreBoard(input.value);});

function calcularScoreBoard(caso){
    tArea.value = "";
    caso.split(";").forEach((element) => {
        let res = element.split(" ");
        tArea.value += `${res[0]} ${res[1]} ${res[2]} ${res[3]} \n`;
    });

    tArea.value = tArea.value.split('\n').sort((a, b) => {
        if (option.value == "orderTeams"){
            const teamA = a.split(' ')[0];
            const teamB = b.split(' ')[0];
            return teamA.localeCompare(teamB);
        } else if(option.value == "problemsSolved"){
            const scoreA = a.split(' ')[1];
            const scoreB = b.split(' ')[1];
            return scoreB - scoreA;
        } else { 
            const scoreA = a.split(' ')[2];
            const scoreB = b.split(' ')[2]; 
            return scoreA - scoreB;
        }
    }).join('\n').trim();
}

