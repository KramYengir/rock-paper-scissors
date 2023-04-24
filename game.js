const playerChoice = "rock";
const computerChoice = getComputerChoice();

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();

    let msg = '';
    let winLoseDraw;

    switch(playerChoice){
        case 'rock':
            if(computerChoice === 'rock')
            winLoseDraw = 3;
            else if(computerChoice === 'paper')
            winLoseDraw = 2;
            else winLoseDraw = 1;
            console.log('rock');
            break;
        case 'paper':
            if(computerChoice === 'rock')
            winLoseDraw = 1;
            else if(computerChoice === 'paper')
            winLoseDraw = 3;
            else winLoseDraw = 2;
            console.log('paper');
            break;
        case 'scissors':
            if(computerChoice === 'rock')
            winLoseDraw = 2;
            else if(computerChoice === 'paper')
            winLoseDraw = 1;
            else winLoseDraw = 3;
            console.log('scissos');
            break;
        default:
            msg = 'Incorrect Choice!';
            return;
    }

    if(winLoseDraw === 1)
        msg = 'You Win! '+playerChoice+' beats '+computerChoice+'!';
    else if(winLoseDraw === 2)
        msg = 'You Lose! '+computerChoice+' beats '+playerChoice+'!';
    else msg = 'Draw!';

    return msg;
}



function getComputerChoice(){
    let randomNum = Math.random();

    if(randomNum < 0.33)
        return "rock";
    else if(randomNum < 0.66)
        return "paper";

    return "scissors";
}
