var turnCount = 0;
var cases = document.querySelectorAll('.case');
var oneWinner = false;

function turn() {
  turnCount++;
  return turnCount % 2 === 0 ? 'X' : 'O';
}

function reset() {
  cases.forEach(vide => (vide.innerHTML = ''));
  oneWinner = false;
  turnCount = 0;
}

function showWinner(winner) {
  oneWinner = true;
  alert(`${winner} est le vainqueur! Rejouez!`);
  reset();
}

function checkWinState() {
  if (
    cases[0].innerHTML !== '' &&
    cases[0].innerHTML === cases[1].innerHTML &&
    cases[1].innerHTML === cases[2].innerHTML
  ) {
    showWinner(cases[0].innerHTML);
  } else if (
    cases[3].innerHTML !== '' &&
    cases[3].innerHTML === cases[4].innerHTML &&
    cases[4].innerHTML === cases[5].innerHTML
  ) {
    showWinner(cases[3].innerHTML);
  } else if (
    cases[6].innerHTML !== '' &&
    cases[6].innerHTML === cases[7].innerHTML &&
    cases[7].innerHTML === cases[8].innerHTML
  ) {
    showWinner(cases[6].innerHTML);
  } else if (
    cases[0].innerHTML !== '' &&
    cases[0].innerHTML === cases[3].innerHTML &&
    cases[3].innerHTML === cases[6].innerHTML
  ) {
    showWinner(cases[0].innerHTML);
  } else if (
    cases[1].innerHTML !== '' &&
    cases[1].innerHTML === cases[4].innerHTML &&
    cases[4].innerHTML === cases[7].innerHTML
  ) {
    showWinner(cases[1].innerHTML);
  } else if (
    cases[2].innerHTML !== '' &&
    cases[2].innerHTML === cases[5].innerHTML &&
    cases[5].innerHTML === cases[8].innerHTML
  ) {
    showWinner(cases[2].innerHTML);
  } else if (
    cases[0].innerHTML !== '' &&
    cases[0].innerHTML === cases[4].innerHTML &&
    cases[4].innerHTML === cases[8].innerHTML
  ) {
    showWinner(cases[0].innerHTML);
  } else if (
    cases[2].innerHTML !== '' &&
    cases[2].innerHTML === cases[4].innerHTML &&
    cases[4].innerHTML === cases[6].innerHTML
  ) {
    showWinner(cases[2].innerHTML);
  }
  if (turnCount == 9 && !oneWinner) {
    alert('Pas de gagnant');
    reset();
  }
}

function game() {
  if (!this.innerHTML) {
    this.innerHTML = turn();
    checkWinState();
  }
}

cases.forEach(caseSeule => caseSeule.addEventListener('click', game));
