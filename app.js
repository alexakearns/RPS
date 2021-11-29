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
  const choices = ["rock-option", "paper-option", "scissors-option"];
  const randomNum = (Math.floor(Math.random() * 3))
  return choices[randomNum]
};

function draw() {
  result.innerHTML = "draw"
}
function win() {
  userScore++;
  result.innerHTML = "win"
  userScoreTag.innerHTML = userScore
}
function lose() {
  computerScore++;
  result.innerHTML = "lose"
  computerScoreTag.innerHTML = computerScore;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case "rock-option rock-option":
    case "paper-option paper-option":
    case "scissors-option scissors-option":
      draw();
      break
    case "rock-option scissors-option":
    case "paper-option rock-option":
    case "scissors-option paper-option":
      win();
      break
    case "rock-option paper-option":
    case "paper-option scissors-option":
    case "scissors-option rock-option":
      lose();
      break
  }
}

function rps() {
  rock.addEventListener('click', function() {
    game("rock-option ")
  });
  
  paper.addEventListener('click', function() {
    game("paper-option ")
  });
  
  scissors.addEventListener('click', function() {
    game("scissors-option ")
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