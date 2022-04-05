let userScore = 0;
let computerScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const userScoreTag = document.getElementById("user-score");
const computerScoreTag = document.getElementById("computer-score");
const resetBtn = document.getElementById("reset-btn");
const choices = ["Rock", "Paper", "Scissors"];
const outcomeDictionary = [
    [choices[0], choices[2]],
    [choices[1], choices[0]],
    [choices[2], choices[1]]
  ]
  // losers: [
  //   [choices[0], choices[1]],
  //   [choices[1], choices[2]],
  //   [choices[2], choices[0]]
  // ]


export const getComputerChoice = () => {
  const randomNum = (Math.floor(Math.random() * 3));
  return choices[randomNum];
};


const draw = () => {
  result.innerHTML = "Draw. Try again.";
};

export const win = (outcome) => {
  userScore++;
  result.innerHTML = outcome[0] + " beats " + outcome[1] + ". You Win!";
  userScoreTag.innerHTML = userScore;
  // document.getElementById(userChoice.toLowerCase()).classList.add(".green")
};

const lose = (outcome) => {
  computerScore++;
  result.innerHTML = outcome[1] + " beats " + outcome[0] + ". You Lose!";
  computerScoreTag.innerHTML = computerScore;
};

export const game = (userChoice, computerChoice) => {
  // const computerChoice = getComputerChoice();
  const outcome = [userChoice, computerChoice];

  if( userChoice === computerChoice) return "draw";

  const result = outcomeDictionary.find(item => {
    return item[0] === userChoice && item[1] === computerChoice
  })

  return result ? "win" : "lose"
  // if (outcome[0] === outcome[1]) return draw();

  // const result =  outcomeDictionary.winners.map(item => {
  //   if (item[0] === outcome[0] && item[1] === outcome[1]) return "win"
  //   // win(outcome);
    
  // });
  // console.log(outcomeDictionary)
  // console.log(result)

  // outcomeDictionary.losers.map(item => {
  //   if (item[0] === outcome[0] && item[1] === outcome[1]) return lose(outcome);
  // });
};

const rps = () => {
  rock.addEventListener("click", function() {
    game(choices[0]);
  });

  paper.addEventListener("click", function() {
    game(choices[1]);
  });

  scissors.addEventListener("click", function() {
    game(choices[2]);
  });

  resetBtn.addEventListener("click", function() {
    reset();
  });
};

const reset = () => {
  userScore = 0;
  computerScore = 0;
  userScoreTag.innerHTML = userScore;
  computerScoreTag.innerHTML = computerScore;
  result.innerHTML = "Play";
};

rps();
