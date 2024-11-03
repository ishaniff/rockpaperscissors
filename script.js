const submission = {
  action: ["rock", "paper", "scissors"],
  // logic: [1, 2, 3], was going to use this to do declare whos winner or loser.. made no sense. wasted lot of time
  decision: ["won", "lost", "tie"],
};
let playerAction;
let logic;
let computerChoice;
// let computerAction = Math.floor(Math.random() * 3); at first I had it like this and then I realized I could do it another way too.

function computerAction() {
  computerChoice = Math.random();
  if (computerChoice > 0.66) {
    computerChoice = submission.action[0];
  } else if (computerChoice > 0.33) {
    computerChoice = submission.action[1];
  } else {
    computerChoice = submission.action[2];
  }
}
function btnRock() {
  playerAction = submission.action[0];
  // logic = submission.logic[0];
  computerAction();
  game();
}
function btnPaper() {
  playerAction = submission.action[1];
  // logic = submission.logic[1];
  computerAction();
  game();
}
function btnScissor() {
  playerAction = submission.action[2];
  // logic = submission.logic[2];
  computerAction();
  game();
}

function game() {
  if (playerAction == computerChoice) {
    console.log(
      `Player one and the computer both chose ${computerChoice}. It has resulted in a ${submission.decision[2]}.`
    );
  } else if (
    (playerAction == "rock" && computerChoice == "paper") ||
    (playerAction == "paper" && computerChoice == "scissors") ||
    (playerAction == "scissors" && computerChoice == "rock")
  ) {
    console.log(
      `Player one has ${submission.decision[1]} this round. They chose ${playerAction} and the computer chose ${computerChoice}.`
    );
  } else {
    console.log(
      `Player one has ${submission.decision[0]} this round. They chose ${playerAction} and the computer chose ${computerChoice}.`
    );
  }
}
