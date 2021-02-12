let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreKepper_div = document.querySelector(".score-kepper");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function gameOver(playerScore, computerScore) {
    if (playerScore === 5)
    result_p.innerHTML = `Game Over! You Win! `;
    if (computerScore === 5)
    result_p.innerHTML = `Game Over! You Lose! `;
    if ((playerScore === 5) && (computerScore === 5))
    result_p.innerHTML = `Game Over! It's a Tie! `;
}


function convertToWord (word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    return "Scissors";
}

function win(playerChoice, computerChoice) {
    if (playerScore < 5) {
        playerScore++;
    }
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    const smallPlayerWord = "Player".fontsize(3).sub();
    const smallCompWord = "Computer".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win! `;
}

function lose(playerChoice, computerChoice) {
    if (computerScore < 5) {
        computerScore++;
    }
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    const smallPlayerWord = "Player".fontsize(3).sub();
    const smallCompWord = "Computer".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} loses ${convertToWord(computerChoice)}${smallCompWord}. You lost.`;
}

function draw(playerChoice, computerChoice) {
    const smallPlayerWord = "Player".fontsize(3).sub();
    const smallCompWord = "Computer".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`;
}


function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerChoice, computerChoice);
            gameOver (playerScore, computerScore);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerChoice, computerChoice);
            gameOver (playerScore, computerScore);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerChoice, computerChoice);
            gameOver (playerScore, computerScore);
            break;
            
    }
}



function main() {
 rock_div.addEventListener('click', function() {
     game("rock");
 })

 paper_div.addEventListener('click', function() {
     game("paper");
 })

 scissors_div.addEventListener('click', function() {
     game("scissors");
 })
}

main ();