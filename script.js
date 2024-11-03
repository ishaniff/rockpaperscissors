let playerAction;
// let logic; was going to use this to do declare whos winner or loser.. made no sense. wasted lot of time
let computerChoice;
let wins = 0;
let losses = 0;
let ties = 0;

// prompts the player upon loading of site to input a name and then stores it and calls it later to dynamically use name in my page
let playerName = prompt(`What's your name?`);
document.getElementById("playerName").innerText = `${playerName}'s Actions`;

// this is my object that contains my actions, decisions, and tracker
const rpsObject = {
  action: ["rock", "paper", "scissors"],
  // logic: [1, 2, 3], was going to use this to do declare whos winner or loser.. made no sense. wasted lot of time
  decision: ["won", "lost", "tie"],
  tracker: [wins, losses, ties],
};
// let computerAction = Math.floor(Math.random() * 3); at first I had it like this and then I realized I could do it another way too.

// this will generate a choice for the computer being rock paper or scissors, it also will set the corresponding choice as an image on the page
function computerAction() {
  computerChoice = Math.random();
  if (computerChoice > 0.66) {
    computerChoice = rpsObject.action[0];
    document.getElementById(
      "eventComputer"
    ).innerHTML = `<img src="/images/ROCK.jpg">`;
  } else if (computerChoice > 0.33) {
    computerChoice = rpsObject.action[1];
    document.getElementById(
      "eventComputer"
    ).innerHTML = `<img src="/images/PAPER.jpg">`;
  } else {
    computerChoice = rpsObject.action[2];
    document.getElementById(
      "eventComputer"
    ).innerHTML = `<img src="/images/SCISSORS.jpg">`;
  }
}

// this will set the player choice to rock and set the picture to correspond with the choice as well, it also runs the rng computer choice function above and the game function below
function btnRock() {
  playerAction = rpsObject.action[0];
  document.getElementById(
    "eventPlayer"
  ).innerHTML = `<img src="/images/ROCK.jpg">`;
  // logic = rpsObject.logic[0];
  computerAction();
  game();
}
function btnPaper() {
  playerAction = rpsObject.action[1];
  document.getElementById(
    "eventPlayer"
  ).innerHTML = `<img src="/images/PAPER.jpg">`;
  // logic = rpsObject.logic[1];
  computerAction();
  game();
}
function btnScissor() {
  playerAction = rpsObject.action[2];
  document.getElementById(
    "eventPlayer"
  ).innerHTML = `<img src="/images/SCISSORS.jpg">`;
  // logic = rpsObject.logic[2];
  computerAction();
  game();
}

// this right here is the core functionality of the game, its comparing option choices between player and computer, outputting the outcomes in both text and images, adding a tracker value for wins losses and ties, displays tracker values in a table as well
function game() {
  if (playerAction == computerChoice) {
    document.getElementById(
      "eventLog"
    ).innerText = `${playerName} and the computer both chose ${computerChoice}. It has resulted in a ${rpsObject.decision[2]}.`;
    rpsObject.tracker[2]++;
    document.getElementById(
      "eventOutcome"
    ).innerHTML = `<img src="/images/TIE.png">`;
  } else if (
    (playerAction == "rock" && computerChoice == "paper") ||
    (playerAction == "paper" && computerChoice == "scissors") ||
    (playerAction == "scissors" && computerChoice == "rock")
  ) {
    document.getElementById(
      "eventLog"
    ).innerText = `${playerName} has ${rpsObject.decision[1]} this round. They chose ${playerAction} and the computer chose ${computerChoice}.`;
    rpsObject.tracker[1]++;
    document.getElementById(
      "eventOutcome"
    ).innerHTML = `<img src="/images/LOST.png">`;
  } else {
    document.getElementById(
      "eventLog"
    ).innerText = `${playerName} has ${rpsObject.decision[0]} this round. They chose ${playerAction} and the computer chose ${computerChoice}.`;
    rpsObject.tracker[0]++;
    document.getElementById(
      "eventOutcome"
    ).innerHTML = `<img src="/images/WIN.png">`;
  }
  document.getElementById("wins").innerText = `${rpsObject.tracker[0]}`;
  document.getElementById("losses").innerText = `${rpsObject.tracker[1]}`;
  document.getElementById("ties").innerText = `${rpsObject.tracker[2]}`;
}

// makes the reset button the scoreboard reset the values to zero for win loss tie and as well as visually clears eventlogs and updates text to be blank
function trackerReset() {
  rpsObject.tracker[0] = 0;
  rpsObject.tracker[1] = 0;
  rpsObject.tracker[2] = 0;
  document.getElementById("wins").innerText = `${rpsObject.tracker[0]}`;
  document.getElementById("losses").innerText = `${rpsObject.tracker[1]}`;
  document.getElementById("ties").innerText = `${rpsObject.tracker[2]}`;
  document.getElementById("eventLog").innerText = `Event Log : `;
  document.getElementById("eventPlayer").innerHTML = ``;
  document.getElementById("eventOutcome").innerHTML = ``;
  document.getElementById("eventComputer").innerHTML = ``;
}
