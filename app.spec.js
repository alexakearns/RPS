describe('rps', () => {
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

  beforeEach(() => {
    root = document.createElement('div');

    rock = document.createElement("div");
    rock.id = "rock"
    root.appendChild(rock);
    paper = document.createElement("div");
    paper.id = "paper"
    root.appendChild(paper);
    scissors = document.createElement("div");
    scissors.id = "scissors"
    root.appendChild(scissors);
    result = document.createElement("div");
    result.id = "result"
    root.appendChild(result);
    userScoreTag = document.createElement("div");
    userScoreTag.id = "user-score"
    root.appendChild(userScoreTag);
    computerScoreTag = document.createElement("div");
    computerScoreTag.id = "computer-score"
    root.appendChild(computerScoreTag);
    resetBtn = document.createElement("div");
    resetBtn.id = "reset-btn"
    root.appendChild(resetBtn);

    document.body.appendChild(root);

    app = require('./app');
    game = app.game;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('game', () => {
    it('should be a function', () => {
      expect(typeof game).toBe('function');
    });

    it('result is draw if user is paper, computer is paper', () => {
      const user = "Paper";
      const comp = "Paper";

      expect(game(user, comp)).toBe("draw")
    });

    it('result is win if user is paper, computer is rock', () => {
      const user = "Paper";
      const comp = "Rock";

      expect(game(user, comp)).toBe("win")
    });

    it('result is lose if user is paper, computer is scissors', () => {
      const user = "Paper";
      const comp = "Scissors";

      expect(game(user, comp)).toBe("lose") 
    });
  });


});