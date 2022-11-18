const choice = ["rock", "paper", "scissors"];
let pscore = 0, cscore = 0;
let playerSelection = "";

function getComputerChoice(choice) {
    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        pscore += 1;
        return "You Win! Rock beats scissors!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        pscore += 1;
        return "You Win! Scissors beats paper!";
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        pscore +=1;
        return "You Win! Paper beats rock!";
    }
    else {
        cscore +=1;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
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
    if (pscore > cscore) {
        console.log("Player Wins");
    }
    else if (pscore < cscore) {
        console.log("Computer Wins");
    }
    else {
        console.log("Tie");
    }
    console.log(`Score: \n Player: ${pscore} \n Computer: ${cscore}`);
}

game();