const submission = {
  action: ["rock", "paper", "scissors"],
  logic: [1, 2, 3],
  decision: ["win", "loss", "tie"],
};
let playerAction;
let logic;
let computerChoice;
// let computerAction = Math.floor(Math.random() * 3);

function computerAction() {
  computerChoice = Math.random();
  if (computerChoice > 0.66) {
    console.log("rock");
  } else if (computerChoice > 0.33) {
    console.log("paper");
  } else {
    console.log("scissors");
  }
}
function btnRock() {
  playerAction = submission.action[0];
  logic = submission.logic[0];
  game();
}
function btnPaper() {
  playerAction = submission.action[1];
  logic = submission.logic[1];

  game();
}
function btnScissor() {
  playerAction = submission.action[2];
  logic = submission.logic[2];

  game();
}

function game() {
  if (playerAction == submission.action[computerAction]) {
    console.log(submission.decision[2]);
  } else if (playerAction) {
    console.log(submission.decision[1]);
  } else {
    console.log(submission.decision[0]);
  }
}
