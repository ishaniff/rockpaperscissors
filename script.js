let playerAction;
// let logic;
let computerChoice;
let wins = 0;
let losses = 0;
let ties = 0;

const rpsObject = {
  action: ["rock", "paper", "scissors"],
  // logic: [1, 2, 3], was going to use this to do declare whos winner or loser.. made no sense. wasted lot of time
  decision: ["won", "lost", "tie"],
  tracker: [wins, losses, ties],
};
// let computerAction = Math.floor(Math.random() * 3); at first I had it like this and then I realized I could do it another way too.

function computerAction() {
  computerChoice = Math.random();
  if (computerChoice > 0.66) {
    computerChoice = rpsObject.action[0];
  } else if (computerChoice > 0.33) {
    computerChoice = rpsObject.action[1];
  } else {
    computerChoice = rpsObject.action[2];
  }
}
function btnRock() {
  playerAction = rpsObject.action[0];
  // logic = rpsObject.logic[0];
  computerAction();
  game();
}
function btnPaper() {
  playerAction = rpsObject.action[1];
  // logic = rpsObject.logic[1];
  computerAction();
  game();
}
function btnScissor() {
  playerAction = rpsObject.action[2];
  // logic = rpsObject.logic[2];
  computerAction();
  game();
}

function game() {
  if (playerAction == computerChoice) {
    console.log(
      `Player one and the computer both chose ${computerChoice}. It has resulted in a ${rpsObject.decision[2]}.`
    );
    rpsObject.tracker[2]++;
  } else if (
    (playerAction == "rock" && computerChoice == "paper") ||
    (playerAction == "paper" && computerChoice == "scissors") ||
    (playerAction == "scissors" && computerChoice == "rock")
  ) {
    console.log(
      `Player one has ${rpsObject.decision[1]} this round. They chose ${playerAction} and the computer chose ${computerChoice}.`
    );
    rpsObject.tracker[1]++;
  } else {
    console.log(
      `Player one has ${rpsObject.decision[0]} this round. They chose ${playerAction} and the computer chose ${computerChoice}.`
    );
    rpsObject.tracker[0]++;
  }
  document.getElementById("wins").innerText = `${rpsObject.tracker[0]}`;
  document.getElementById("losses").innerText = `${rpsObject.tracker[1]}`;
  document.getElementById("ties").innerText = `${rpsObject.tracker[2]}`;
}

function trackerReset() {
  rpsObject.tracker[0] = 0;
  rpsObject.tracker[1] = 0;
  rpsObject.tracker[2] = 0;
  document.getElementById("wins").innerText = `${rpsObject.tracker[0]}`;
  document.getElementById("losses").innerText = `${rpsObject.tracker[1]}`;
  document.getElementById("ties").innerText = `${rpsObject.tracker[2]}`;
}
