describe("rps", () => {
  let app;
  let root;
  let rock;
  let paper;
  let scissors;
  let result;
  let userScoreTag;
  let computerScoreTag;
  let resetBtn;
  let game;
  let getComputerChoice;
  let gameResult;

  beforeEach(() => {
    document.body.innerHTML = "";
    console.log(document.body.innerHTML);
    root = document.createElement("div");

    rock = document.createElement("div");
    rock.id = "rock";
    root.append(rock);
    paper = document.createElement("div");
    paper.id = "paper";
    root.append(paper);
    scissors = document.createElement("div");
    scissors.id = "scissors";
    root.append(scissors);
    result = document.createElement("div");
    result.id = "result";
    root.append(result);
    userScoreTag = document.createElement("div");
    userScoreTag.id = "user-score";
    root.append(userScoreTag);
    computerScoreTag = document.createElement("div");
    computerScoreTag.id = "computer-score";
    root.append(computerScoreTag);
    resetBtn = document.createElement("div");
    resetBtn.id = "reset-btn";
    root.append(resetBtn);

    document.body.append(root);
    console.log(document.body.innerHTML);
    app = require("./app");
    game = app.game;
    getComputerChoice = app.getComputerChoice;
    gameResult = app.gameResult;
    app.isSame(userScoreTag);
  });

  describe("game", () => {
    it("should be a function", () => {
      expect(typeof game).toBe("function");
    });

    it("result is draw if user is paper, computer is paper", () => {
      const user = "Paper";
      const comp = "Paper";

      expect(game(user, comp)).toBe("draw");
    });

    it("result is win if user is paper, computer is rock", () => {
      const user = "Paper";
      const comp = "Rock";

      expect(game(user, comp)).toBe("win");
    });

    it("result is lose if user is paper, computer is scissors", () => {
      const user = "Paper";
      const comp = "Scissors";

      expect(game(user, comp)).toBe("lose");
    });
  });

  describe("getComputerChoice", () => {
    beforeEach(() => {
      jest.spyOn(global.Math, "random");
    });

    it('return computer choice of "Rock" when random number is < 1/3', () => {
      global.Math.random.mockReturnValue(0.2);
      expect(getComputerChoice()).toBe("Rock");
    });

    it('return computer choice of "Paper" when random number is > 1/3 < 2/3', () => {
      global.Math.random.mockReturnValue(0.5);
      expect(getComputerChoice()).toBe("Paper");
    });

    it('return computer choice of "Scissors" when random number is > 2/3', () => {
      global.Math.random.mockReturnValue(0.9);
      expect(getComputerChoice()).toBe("Scissors");
    });
  });

  describe("result", () => {
    it("increases userScore when user wins", () => {
      gameResult("win", ["Rock", "Paper"]);
      const ust = document.querySelectorAll("#user-score");
      // console.log(Array.from(ust));
      expect(userScoreTag.innerHTML).toBe("1");
    });
  });
});
