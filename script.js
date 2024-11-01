const submission = {
  action: ["rock", "paper", "scissors"],
  logic: [1, 2, 3],
  decision: ["win", "loss", "tie"],
};
let playerAction;
let logic;
let computerAction = Math.floor(Math.random() * 3);
let computerLogic = Math.floor(Math.random() * 3);
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
  } else if (logic < submission.logic[computerLogic]) {
    console.log(submission.decision[1]);
  } else {
    console.log(submission.decision[0]);
  }
}

// } else if (logic < submission.logic[computerLogic]) {
//   console.log(submission.decision[0]);
// }

document.getElementById("wins").innerText = submission.action;
