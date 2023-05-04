const playerChoice = "rock";
const computerChoice = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(button  => {
    button.addEventListener('click', playRound(button.id, getComputerChoice));
})

function game(){

    const promptMsg = "Please Enter Your Choice - Rock, Paper or Scissors?";



    //OLD LOGIC
    /*for(let i=0; i<5; i++){
        alert(playRound(prompt(promptMsg), getComputerChoice()));
    }

    if(playerScore === computerScore){
        alert('Its a draw....');
    }
    else if(playerScore > computerScore){
        alert('You Win!!!!!!!');
    }
    else alert("You Lose!!!!!");*/
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toUpperCase();

    let msg = '';
    let winLoseDraw;

    switch(playerChoice){
        case 'ROCK':
            if(computerChoice === 'ROCK')
            winLoseDraw = 3;
            else if(computerChoice === 'PAPER')
            winLoseDraw = 2;
            else winLoseDraw = 1;
            console.log('ROCK');
            break;
        case 'PAPER':
            if(computerChoice === 'ROCK')
            winLoseDraw = 1;
            else if(computerChoice === 'PAPER')
            winLoseDraw = 3;
            else winLoseDraw = 2;
            console.log('PAPER');
            break;
        case 'SCISSORS':
            if(computerChoice === 'ROCK')
            winLoseDraw = 2;
            else if(computerChoice === 'PAPER')
            winLoseDraw = 1;
            else winLoseDraw = 3;
            console.log('scissos');
            break;
        default:
            console.log('Incorrect Choice!');
            return;
    }

    if(winLoseDraw === 1){
        msg = 'You Win! '+playerChoice+' beats '+computerChoice+'!';
        playerScore++;
    }
    else if(winLoseDraw === 2){
        msg = 'You Lose! '+computerChoice+' beats '+playerChoice+'!';
        computerScore++;
    }
    else msg = 'Draw!';

    return getResultMessage(playerChoice, computerChoice, winLoseDraw);
}



function getComputerChoice(){
    let randomNum = Math.random();

    if(randomNum < 0.33)
        return "ROCK";
    else if(randomNum < 0.66)
        return "PAPER";

    return "SCISSORS";
}

function getResultMessage(playerChoice, computerChoice, result){
    let msg = '';

    if(result === 3){
        msg = 'Draw!';
    }
    else if(result === 1){
        msg = `You Win! ${playerChoice} beats ${computerChoice}!`;
    }
    else msg = `You Lost! ${computerChoice} beats ${playerChoice}!`;

    return msg;
}
