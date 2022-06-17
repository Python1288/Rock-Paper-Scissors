
const buttons = document.querySelectorAll("button");
console.log(buttons);

const info = document.querySelector(".info");
const results = document.querySelector(".results");
info.appendChild(results);

const score = document.querySelector(".score");
info.appendChild(score);

const verdict = document.querySelector(".verdict");
info.appendChild(verdict);

let countRound = 0;
let countComp = 0;
let countHuman = 0;

for (const btn of buttons) {
    btn.addEventListener("click", (e) => game(e.target.id));
 }
 
 function disableButton() {
     document.getElementById("rock").disabled = true;
     document.getElementById("paper").disabled = true;
     document.getElementById("scissors").disabled = true;
 }

function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * rps.length);
    return random;
}

function game(id) {
    const playerSelection = id;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    score.textContent = "Score: " + countComp + " : " + countHuman;

    if (countComp == 5) {
        verdict.textContent = "Sorry, you lost the game!"
        disableButton();
        

    } else if (countHuman == 5) {
        verdict.textContent = "Congratz! You win the game!" 
        disableButton();
    }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == 0 && playerSelection == "rock") {
        results.textContent = "Draw, you both have rock!";

    } else if (computerSelection == 1 && playerSelection == "paper") {
        results.textContent = "Draw, you both have paper!";

    } else if (computerSelection == 2 && playerSelection == "scissors") {
        results.textContent = "Draw, you both have scissors!";

    } else if (computerSelection == 0 && playerSelection == "paper") {
        results.textContent = "You win! Paper beats rock!";
        return countHuman += 1;

    } else if (computerSelection == 1 && playerSelection == "scissors") {
        results.textContent = "You win! Scissors beats paper!";
        return countHuman += 1;
    
    } else if (computerSelection == 2 && playerSelection == "rock") {
        results.textContent = "You win! Rock beats scissors!";
        return countHuman += 1;

    } else if (computerSelection == 0 && playerSelection == "scissors") {
        results.textContent = "You Lose! Rock beats scissors!";
        return countComp += 1;

    } else if (computerSelection == 2 && playerSelection == paper) {
        results.textContent = "You Lose! Scissors beats paper!";
        return countComp += 1;
    
    } else if (computerSelection == 1 && playerSelection == rock){
        results.textContent = "You Lose! Paper beats rock!";
        return countComp += 1;
    } 
}