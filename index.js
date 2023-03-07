var computerSelect = computerPlay();
var playerSelect = "";
var computerScore = 0;
var playerScore = 0;

var buttons = document.getElementsByClassName("choice");

for (i of buttons) {
    i.addEventListener("click", buttonChoice);
}

function buttonChoice(x) {
    playerSelect = x.target.innerHTML;
    game();
}

function computerPlay() {
    var computerSelect = getRandomInt(3);
    if (computerSelect === 0) {
        return "Rock";
    } else if (computerSelect === 1) {
        return "Paper";
    } else if (computerSelect === 2) {
        return "Scissors";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelect, computerSelect) {
    if (playerSelect == computerSelect) {
        return [`Draw, both sides selected ${computerSelect}!`, `Computer: ${computerScore} points`, `Player: ${playerScore} points`];
    } else if (playerSelect === "Rock" && computerSelect === "Paper") {
        computerScore++;
        return [`You lose, paper beats rock`, `Computer: ${computerScore} points`, `Player: ${playerScore} points`];
    } else if (playerSelect === "Rock" && computerSelect === "Scissors") {
        playerScore++;
        return ["You win, rock beats scissors!", `Computer: ${computerScore} points`, `Player: ${playerScore} points`];
    } else if (playerSelect === "Paper" && computerSelect === "Rock") {
        playerScore++;
        return ["You win, paper beats rock!", `Computer: ${computerScore} points`, `Player: ${playerScore} points`];
    } else if (playerSelect === "Paper" && computerSelect === "Scissors") {
        computerScore++;
        return ["You lose, scissors beats paper", `Computer: ${computerScore} points`, `Player: ${playerScore} points`];
    } else if (playerSelect === "Scissors" && computerSelect === "Rock") {
        computerScore++
        return ["You lose, rock beats scissors", `Computer: ${computerScore} points`, `Player: ${playerScore} points`];;
    } else if (playerSelect === "Scissors" && computerSelect === "Paper") {
        playerScore++;
        return ["You win, scissors beats paper!", `Computer: ${computerScore} points`, `Player: ${playerScore} points`];;
    }
}

function game() {
    computerSelect = computerPlay();
    console.log(`Computer selected ${computerSelect}`);
    console.log(`You selected ${playerSelect}`);
    console.log(playRound(playerSelect, computerSelect));
}


