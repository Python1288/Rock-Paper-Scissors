
const buttons = document.querySelectorAll("button");
const info = document.querySelector(".info");
const results = document.querySelector(".results");
const score = document.querySelector(".score");
info.appendChild(results);
info.appendChild(score);

const compScoreContainer = document.querySelector(".compScoreContainer");
const humanScoreContainer = document.querySelector(".humanScoreContainer");
const hmnScore = document.querySelector(".hmnScore");
const cmpScore = document.querySelector(".cmpScore");
compScoreContainer.appendChild(cmpScore);
humanScoreContainer.appendChild(hmnScore);

const overlay = document.querySelector(".overlay");
const endGameModal = document.querySelector(".modal");
const endGameMsg = document.querySelector(".modalTitle");

const restartBtn = document.querySelector(".restartBtn");
restartBtn.addEventListener("click", restartGame);

let computerScore = 0;
let humanScore = 0;

for (const btn of buttons) {
    btn.addEventListener("click", (e) => game(e.currentTarget.id));
 }

function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * rps.length);
    return random;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 0 && playerSelection == "rock") {
        results.textContent = "Draw, you both have rock!";

    } else if (computerSelection === 1 && playerSelection === "paper") {
        results.textContent = "Draw, you both have paper!";

    } else if (computerSelection === 2 && playerSelection === "scissors") {
        results.textContent = "Draw, you both have scissors!";

    } else if (computerSelection === 0 && playerSelection === "paper") {
        results.textContent = "You've got this! Paper beats rock!";
        humanScore += 1

    } else if (computerSelection === 1 && playerSelection === "scissors") {
        results.textContent = "You win the round! Scissors beats paper!";
        humanScore += 1;
    
    } else if (computerSelection === 2 && playerSelection === "rock") {
        results.textContent = "Good choice! Rock beats scissors!";
        humanScore += 1;

    } else if (computerSelection === 0 && playerSelection === "scissors") {
        results.textContent = "You lost the round... Rock is beaten by scissors!";
        computerScore += 1;

    } else if (computerSelection === 2 && playerSelection === "paper") {
        results.textContent = "Oh no... Scissors beats paper!";
        computerScore += 1;
    
    } else if (computerSelection === 1 && playerSelection === "rock"){
        results.textContent = "Unfortunately, Paper beats rock...";
        computerScore += 1;
    } 
}

function game(id) {
    const playerSelection = id;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    hmnScore.textContent = humanScore;
    cmpScore.textContent = computerScore;

    if (computerScore == 5 || humanScore == 5) openEndgameModal();
}

function openEndgameModal() {
    endGameModal.classList.add('active');
    overlay.classList.add('active');

    if (computerScore == 5 ) {
        endGameMsg.textContent = "You lost the game...";

    } else if (humanScore == 5) {
        endGameMsg.textContent = "Yeehaa! You won the game!";
    }
}

function closeEndgameModal() {
    endGameModal.classList.remove('active')
    overlay.classList.remove('active')
  }

function restartGame() {
    computerScore = 0;
    humanScore = 0;
    game()
    endGameModal.classList.remove('active')
    overlay.classList.remove('active')
}