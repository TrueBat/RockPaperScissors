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

let playerChoice = prompt("Choose Paper Rocks or Scissors");
let botChoice = botPlay();

function game(playerChoice , botChoice) {
    let pc = playerChoice.toLowerCase();
    let bc = botChoice.toLowerCase();
    if (pc === bc) {
        return "its a draw the bot chose " + botChoice;
    }else if (pc === "rock" && bc === "paper" || pc === "paper" && bc === "scissors" || pc === "scissors" && bc === "rock") {
        return "you lose the bot chose " + botChoice;
    }else if (pc === "rock" && bc === "scissors" || pc === "paper" && bc === "rock" || pc === "scissors" && bc === "paper") {
        return "you win the bot chose " + botChoice;
    }
    
}

console.log(game(playerChoice , botChoice));