function getComputerChoice(min , max){
    let number = Math.floor(Math.random() * (max - min) + min);
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
    return choice;
}


function referee(computerSelection, playerSelection){
    let verdict;
    if ((computerSelection == 'rock' && playerSelection == 'scissors') || (computerSelection == 'paper' && playerSelection == 'rock') || (computerSelection == 'scissors' && playerSelection == 'paper'))
    {
        verdict = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper'))
    {
        verdict = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        verdict = `Its a draw, please try again`;
    }
    return verdict;
}



function game () {
    let wins = 0;
    let losses = 0;
    let draws = 0;

    playerSelection = 'rock';
    playerSelection = playerSelection.toLowerCase();

    let max = 4;
    let min = 1;
    for (let i = 0; i < 5; i++) {
        
        computerSelection = getComputerChoice(max, min);
        verdict = referee(computerSelection, playerSelection);
        console.log(verdict);

        if (verdict == 'Its a draw, please try again'){
            draws++;
        }
        else if (verdict == 'You Lose! paper beats rock'){
            losses++;
        }
        else{
            wins++;
        }
    }

    console.log(`You have ${wins} wins, ${losses} losses ${draws} draws`)

}

game()