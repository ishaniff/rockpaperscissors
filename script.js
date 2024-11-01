const submission = {
  action: ["rock", "paper", "scissors"],
  logic: [1, 2, 3],
  decision: ["win", "loss", "tie"],
};

console.log(submission.action[0]);
console.log(submission.logic[0 + 2]);
console.log(submission.decision[1]);

function btnRock() {
  console.log(submission.action[0]);
}
function btnPaper() {
  console.log(submission.action[1]);
}
function btnScissor() {
  console.log(submission.action[2]);
}

function computerAction() {
  let x = Math.floor(Math.random() * 3);
  console.log(submission.action[x]);
  console.log(x);
}
