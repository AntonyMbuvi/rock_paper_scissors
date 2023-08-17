function getComputerChoice(min , max){
    let number = Math.floor(Math.random() * (max - min) + min);
    console.log(number)
    let choice;
    switch(number) {
        case(1):
         choice = 'rock';
        break;

        case(2):
         choice = 'paper';
        break;

        case(3):
         choice = 'scissors';
        break;
    }
    console.log(choice);
    return choice;
}
let max = 4;
let min = 1;

computerSelection = getComputerChoice(max, min);

function referee(computerSelection, playerSelection){
    let verdict;
    if ((computerSelection == 'rock' && playerSelection == 'scissors') || (computerSelection == 'paper' && playerSelection == 'rock') || (computerSelection == 'scissors' && playerSelection == 'paper'))
    {
        verdict = `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper'))
    {
        verdict = `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        verdict = `Its a draw, please try again`
    }
    console.log(verdict)
    return verdict;
}
playerSelection = 'rock';
playerSelection = playerSelection.toLowerCase();

verdict = referee(computerSelection, playerSelection)