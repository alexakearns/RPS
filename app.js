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
  [choices[2], choices[1]],
];

export function isSame(utg) {
  console.log(utg === userScoreTag);
}

export const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

const draw = () => {
  result.innerHTML = "Draw. Try again.";
};

export const win = (outcome) => {
  userScore++;
  result.innerHTML = outcome[0] + " beats " + outcome[1] + ". You Win!";
  userScoreTag.innerHTML = userScore;
};

const lose = (outcome) => {
  computerScore++;
  result.innerHTML = outcome[1] + " beats " + outcome[0] + ". You Lose!";
  computerScoreTag.innerHTML = computerScore;
};

export const game = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return "draw";

  const result = outcomeDictionary.find((item) => {
    return item[0] === userChoice && item[1] === computerChoice;
  });

  return result ? "win" : "lose";
};

export const gameResult = (score, outcome) => {
  const fnMapping = {
    win: win,
    lose: lose,
    draw: draw,
  };

  fnMapping[score](outcome);
};

const gameGlue = (userSelection) => () => {
  const selections = [userSelection, getComputerChoice()];
  const outcome = game(...selections);
  gameResult(outcome, selections);
};

const rps = () => {
  rock.addEventListener("click", gameGlue(choices[0]));

  paper.addEventListener("click", gameGlue(choices[1]));

  scissors.addEventListener("click", gameGlue(choices[2]));

  resetBtn.addEventListener("click", reset);
};

const reset = () => {
  userScore = 0;
  computerScore = 0;
  userScoreTag.innerHTML = userScore;
  computerScoreTag.innerHTML = computerScore;
  result.innerHTML = "Play";
};

rps();
