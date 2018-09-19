var pairimpaire = 0;

var cases = document.querySelectorAll(".case");
function turn() {
    pairimpaire++;
    return pairimpaire % 2 === 0 ? "X" : "O";
}

function showWinner(winner) {
    alert(`${winner} est le vainqueur! Rejouez!`)
    cases.forEach(vide => vide.innerHTML = '');
}

function winState() {
    if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
       showWinner(cases[0].innerHTML); 
    }
    else if (cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
        showWinner(cases[3].innerHTML);
    }
    else if (cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
        showWinner(cases[6].innerHTML);
    }
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
        showWinner(cases[0].innerHTML);
    }
    else if (cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
        showWinner(cases[1].innerHTML);
    }
    else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
        showWinner(cases[2].innerHTML);
    } 
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) {
        showWinner(cases[0].innerHTML);
    } 
    else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
        showWinner(cases[2].innerHTML);
    }
}

function game() {
    if (!this.innerHTML) {
        this.innerHTML = turn()
        winState();
    }
}

cases.forEach(caseSeule => caseSeule.addEventListener("click", game));
