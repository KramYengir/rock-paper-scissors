const playerChoice = "rock";
const computerChoice = getComputerChoice();

let playerScore = 0;
let computerScore = 0;
let resultMsg = "";
let roundResultMsg = '';

const buttons = document.querySelectorAll('button');

buttons.forEach(button  => {
    button.addEventListener('click', () => playRound(button.id, getComputerChoice()));

})

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toUpperCase();

    let msg = '';
    let winLoseDraw;

    //Reset scores if player just won/lost
    if(playerScore == 5 || computerScore == 5)
        resetScores();

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
            console.log('SCISSORS');
            break;
        default:
            console.log('Incorrect Choice!');
            return;
    }

    if(winLoseDraw === 1){
        playerScore++;
    }
    else if(winLoseDraw === 2){
        computerScore++;
    }

    roundResultMsg = getResultMessage(playerChoice, computerChoice, winLoseDraw);

    refreshScoreDisplay();
    checkScore();
}

function checkScore(){
    if(playerScore === 5){
       resultMsg = "YOU WON!!!";
    }
    else if(computerScore === 5){
        resultMsg = "YOU LOST!!!";
    } else {
        resultMsg = "";
    }

    
    refreshScoreDisplay();   
    
}

function resetScores(){
    playerScore = 0;
    computerScore = 0;
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

function getCurrentScoreMsg(){
    return 
}

//DOM STUFF
const container = document.querySelector('.container');
const playerScoreHeading = document.querySelector('#playerScore');
const computerScoreHeading = document.querySelector('#computerScore');

const playerScoreText = document.createElement('h2');
playerScoreText.innerText = playerScore;
const computerScoreText = document.createElement('h2');
computerScoreText.innerText = computerScore;

const roundResultText = document.createElement('h3');

playerScoreHeading.appendChild(playerScoreText);
computerScoreHeading.appendChild(computerScoreText);
container.appendChild(roundResultText);


function refreshScoreDisplay(){
    playerScoreText.innerText = playerScore + " "+resultMsg;
    computerScoreText.innerText = computerScore;
    roundResultText.innerText = roundResultMsg;
}
