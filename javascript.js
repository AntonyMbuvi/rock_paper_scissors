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
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        verdict = 'loss'
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper'))
    {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        verdict = 'win';
    }
    else{
        console.log(`Its a draw, please try again`)
        verdict = 'draw';
    }
    return verdict;
}



function game () {
    let wins = 0;
    let losses = 0;
    let draws = 0;

    
    
    let max = 4;
    let min = 1;
    for (let i = 0; i < 5; i++) {

        playerSelection = prompt("please input either rock or paper or scissors");
        playerSelection = playerSelection.toLowerCase();
        console.log(playerSelection)

        if ( (playerSelection !== 'rock') && (playerSelection !== 'paper') && (playerSelection !== 'scissors') )
        {
            console.log('invalid input');
            return 1;
        }

        computerSelection = getComputerChoice(max, min);
        verdict = referee(computerSelection, playerSelection);

        if (verdict == 'draw'){
            draws++;
        }
        else if (verdict == 'loss'){
            losses++;
        }
        else if (verdict == 'win'){
            wins++;
        }
    }

    console.log(`You have ${wins} wins, ${losses} losses ${draws} draws`)

}

game()