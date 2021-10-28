// This function generates a random int for computerPlay() to use.
function getRandomInt() {
    min = Math.ceil(1);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max-min) + min);
  }

  // This function takes the int from getRandomInt and sets it to a string value based upon int value.
  function computerPlay() {
    let play = getRandomInt();
    if (play === 1) {
      let play = "rock";
      return play;
    } else if (play === 2) {
      let play = "paper";
      return play;
    } else {
      let play = "scissors";
      return play;
    }
  }

  // this determines computer selection
  const computerSelection = computerPlay();

  function playRound(playerSelection,computerSelection) {
    // function checks if player chooses rock
    if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("Defeat! " + playerSelection + " is engulfed by " + computerSelection + ".");
      playerDefeat();
      computerVictory();
      showScore();
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("Victory! " + playerSelection + " smashes " + computerSelection + ".");
      playerVictory();
      computerDefeat();
      showScore();
    }  
    // function checks if player chooses paper
    if (playerSelection === "paper" && computerSelection === "scissors") {
      console.log("Defeat! " + playerSelection + " is cut by " + computerSelection + ".");
      playerDefeat();
      computerVictory();
      showScore();
    } else if (playerSelection === "paper" && computerSelection === "rock" ) {
      console.log("Victory! " + playerSelection + " engulfs " + computerSelection + ".");
      playerVictory();
      computerDefeat();
      showScore();
    }
    // function checks if player chooses scissors
    if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log("Defeat! " + playerSelection + " are crushed by " + computerSelection + ".");
      playerDefeat();
      computerVictory();
      showScore();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      console.log("Victory! " + playerSelection + " shred " + computerSelection + ".");
      playerVictory();
      computerDefeat();
      showScore();
    } else if (playerSelection === computerSelection) {
      console.log("Stalemate! Player chose: " + playerSelection + ". Computer chose: " + computerSelection + ".");
      stalemate();
      showScore();
    }

  }

  // variable for holding player wins/losses
  let playerWinCount = 0;
  let playerLossCount = 0;
  // variable for computer wins/losses
  let computerWinCount = 0;
  let computerLossCount = 0;
  // variable for holding stalemates
  let stalemates = 0;
  // increments playerWinCount
  function playerVictory() {
    return playerWinCount++;
  }
  // increments playerLossCount
  function playerDefeat() {
    return playerLossCount++;
  }
  // increments computerWinCount
  function computerVictory() {
    return computerWinCount++;

  }
  // increments computerLossCount
  function computerDefeat() {
    return computerLossCount++;
  }
  // this function increments stalemates
  function stalemate() {
    return stalemates++;
  }
  // this function shows the score
  function showScore() {
    console.log("Player wins/losses: " + playerWinCount + " / " + playerLossCount);
    console.log("Computer wins/losses: " + computerWinCount + " / " + computerLossCount);
    console.log("Stalemates: " + stalemates);
  }

  // this function will declare victory after the first player to five rounds
  
  function game() {
    let rounds = 4;
    for (let i = 0; i <= rounds; i++) {
      const playerInitSelection = prompt("Make a selection: rock, paper, or scissors!","");
      const playerSelection = playerInitSelection.toLowerCase();
      const computerSelection = computerPlay();
      playRound(playerSelection, computerSelection)
    }
    if (playerWinCount > computerWinCount) {
      console.log("Player wins the war!");
      showScore();
    } else if (computerWinCount > playerWinCount) {
      console.log("Computer wins the war!");
      showScore();
    } else if (playerWinCount === computerWinCount) {
      console.log("Stalemate! NO ONE WINS!");
      showScore();
    } else {
      console.log("idk i haven't thought of this possibility........")
    }
  } 
 
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
        console.log(button.id);
        results.textContent = `Player Wins: ${playerWinCount}. Computer Wins: ${computerWinCount}.`; 
    });
});

const container = document.querySelector('#container');
const results = document.createElement('p');
results.textContent = `Player Wins: ${playerWinCount}. Computer Wins: ${computerWinCount}.`;
container.appendChild(results);
