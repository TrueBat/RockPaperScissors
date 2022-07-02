//Bot play/choice:

function botPlay() {
    rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            choice = "Rock"
            break;
        case 1:
            choice = "Paper"
            break;
        case 2:
            choice = "Scissors"
            break;
        default:
            choice = "the bot cant decide"
            break;
    }
    return choice;
}

//player play and choice:

const result = document.querySelector('.result');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click' , function() {
    result.textContent = game('rock');
});
paper.addEventListener('click' , function(){
    result.textContent = game('paper');
});
scissors.addEventListener('click' , function(){
    result.textContent = game('scissors');
});

//game logic:
var playerScore = 0;
var botScore = 0;
var gamesPlayed = 0;
var winner = "";

let test = "fak";

function game(playerChoice) {

        let botChoice = botPlay();
        let pc = playerChoice.toLowerCase();
        let bc = botChoice.toLowerCase();
        let message = "";

        if (pc === bc) {
            message = "its a draw the bot chose " + botChoice;
        }else if (pc === "rock" && bc === "paper" || pc === "paper" && bc === "scissors" || pc === "scissors" && bc === "rock") {
            botScore++;
            gamesPlayed++;
            message = "you lose the bot chose " + botChoice;
        }else if (pc === "rock" && bc === "scissors" || pc === "paper" && bc === "rock" || pc === "scissors" && bc === "paper") {
            playerScore++;
            gamesPlayed++;
            message = "you win the bot chose " + botChoice;
        }
    
        if (gamesPlayed >= 5) {

            playerScore = 0;
            botScore = 0;
            gamesPlayed = 0;
            const gameEnd = "5 games ended, ";
    
            if (playerScore > botScore) {
                message += " " + gameEnd + "and you won!";
            } else{
                message += " " + gameEnd + "and the bot won!";
            }
        }
        return message;
}
