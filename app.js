let userScore = 0;
let computerScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const userScoreTag = document.getElementById("user-score");
const computerScoreTag = document.getElementById("computer-score");
const resetBtn = document.getElementById("reset-btn");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNum = (Math.floor(Math.random() * 3))
  return choices[randomNum]
};


function draw() {
  result.innerHTML = "Draw. Try again."
}
function win(userChoice, computerChoice) {
  userScore++;
  result.innerHTML = userChoice + " beats " + computerChoice + ". You Win!"
  userScoreTag.innerHTML = userScore
  
}
function lose(userChoice, computerChoice) {
  computerScore++;
  result.innerHTML = computerChoice + " beats " + userChoice + ". You Lose!"
  computerScoreTag.innerHTML = computerScore;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case "Rock Rock":
    case "Paper Paper":
    case "Scissors Scissors":
      draw();
      break
    case "Rock Scissors":
    case "Paper Rock":
    case "Scissors Paper":
      win(userChoice, computerChoice);
      break
    case "Rock Paper":
    case "Paper Scissors":
    case "Scissors Rock":
      lose(userChoice, computerChoice);
      break
  }
}

function rps() {
  rock.addEventListener('click', function() {
    game("Rock ")
  });
  
  paper.addEventListener('click', function() {
    game("Paper ")
  });
  
  scissors.addEventListener('click', function() {
    game("Scissors ")
  });

  resetBtn.addEventListener('click', function() {
    reset();
  })
}

function reset() {
  userScore = 0
  computerScore = 0
  userScoreTag.innerHTML = userScore
  computerScoreTag.innerHTML = computerScore;
}

rps();