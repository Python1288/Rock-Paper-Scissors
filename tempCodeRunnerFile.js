"use strict";
const ps = require("prompt-sync");
const prompt = ps();

// Generating random number ala rock paper scissors

function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * rps.length);
    console.log("Computers pick: " + (rps[random]));
    return random;
}

// The game, humans pick vs computers pick, returning result into variable

function playRound(playerSelection, computerSelection) {
    if (computerSelection == 0 && playerSelection == "rock") {
        return console.log("Draw, you both have rock!");

    } else if (computerSelection == 1 && playerSelection == "paper") {
        return console.log("Draw, you both have paper!");

    } else if (computerSelection == 2 && playerSelection == "scissors") {
        return console.log("Draw, you both have scissors!");

    } else if (computerSelection == 0 && playerSelection == "paper") {
        console.log("You win! Paper beats rock!");
        return countHuman += 1;

    } else if (computerSelection == 1 && playerSelection == "scissors") {
        console.log("You win! Scissors beats paper!");
        return countHuman += 1;
    
    } else if (computerSelection == 2 && playerSelection == "rock") {
        console.log("You win! Rock beats scissors!");
        return countHuman += 1;

    } else if (computerSelection == 0 && playerSelection == "scissors") {
        console.log("You Lose! Rock beats scissors!");
        return countComp += 1;

    } else if (computerSelection == 2 && playerSelection == "paper") {
        console.log("You Lose! Scissors beats paper!");
        return countComp += 1;
    
    } else if (computerSelection == 1 && playerSelection == "rock"){
        console.log("You Lose! Paper beats rock!");
        return countComp += 1;

    } else {
        console.log("What are you doing?")
    }
}

// loop of 5 rounds, the winner is decided after the loop is finished

function game() {

        for (let i=0; i<5; i++) {
            console.log("\n");
            console.log("Round " + (countRound += 1) + ": ");
            const playerSelection = prompt("Your pick: ").toLowerCase();
            const computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            console.log("Score: " + countComp + " : " + countHuman);
    }

    if (countComp > countHuman) {
        console.log("Sorry, you lost the game!\n")

    } else if (countComp < countHuman) {
        console.log("Congratz! You win the game!\n")

    } else {
        console.log("It's a draw!\n")
    }

    const repeatQ = prompt("Would you like to play this game again? (yes/no): ").toLowerCase();
        if (repeatQ == "yes") {
            gameRepeat();
        }
}


console.log("\nWelcome to the game called Paper Scissors Rock! Please choose one to begin the game.");

gameRepeat = game;
let countRound = 0;
let countComp = 0;
let countHuman = 0;

game();
