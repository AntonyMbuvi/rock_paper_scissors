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



function game (playerSelection) {
    let max = 4;
    let min = 1;
    

        console.log('the player selected',playerSelection);

        if ( (playerSelection !== 'rock') && (playerSelection !== 'paper') && (playerSelection !== 'scissors') )
        {
            console.log('invalid input');
            return 1;
        }

        computerSelection = getComputerChoice(max, min);
        console.log('computer selected', computerSelection)
        verdict = referee(computerSelection, playerSelection);
        return verdict;
}

let wins = 0;
let losses = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
            button.addEventListener('click', (e)=>{
             let the_verdict = game(e.target.id);

             const content = document.createElement('div');
            

             if(verdict=='win'){wins++};
             if(verdict=='loss'){losses++};
             if(verdict=='draw'){
                content.textContent = `It was a draw, try again`;
             }else{
                content.textContent = `wins: ${wins}, losses: ${losses}`;
             }
             if(losses== 5 || wins== 5 )
             {
                const more = document.createElement('div');
                more.innerHTML = `<p> The total scores are!!</p>
                <p>wins: ${wins}, losses: ${losses}</p>`;

                if(wins==5){
                    more.innerHTML = '<h2>YOU WIN</h2>';
                }else{
                    more.innerHTML = '<h2>YOU LOSE</h2>';
                }
                const bodyi = document.querySelector('body');
                bodyi.appendChild(more);
                wins = 0;
                losses = 0;
             }

             const body = document.querySelector('body');
             body.appendChild(content);
        });
});
