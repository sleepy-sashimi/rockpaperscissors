var choice = ["rock", "paper", "scissors"];

let playerSelection = "";

function getComputerChoice(choice) {
    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    }
    else {
        switch (playerSelection) {
            case "rock":
                switch (computerSelection){
                    case "scissors":
                        return "You Win! Rock beats scissors!";
                    case "paper":
                        return "You Lose! Paper beats rock!";
                }
            case "scissors":
                switch (computerSelection) {
                    case "rock":
                        return "You Lose! Rock beats scissors!";
                    case "paper":
                        return "You Win! Scissors beats paper!";
                }
            case "paper":
                switch (computerSelection) {
                    case "rock":
                        return "You Win! Paper beats rock!";
                    case "scissors":
                        return "You Lose! Scissors beats paper!";
                }
        }
    }
}

function game() {
    for(let i = 0; i < 5; i++){
        do {
            playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
        }while (choice.includes(playerSelection) === false);
        const computerSelection = getComputerChoice(choice);
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();