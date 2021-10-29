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
      trackScore();
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("Victory! " + playerSelection + " smashes " + computerSelection + ".");
      playerVictory();
      computerDefeat();
      trackScore();
    }  
    // function checks if player chooses paper
    if (playerSelection === "paper" && computerSelection === "scissors") {
      console.log("Defeat! " + playerSelection + " is cut by " + computerSelection + ".");
      playerDefeat();
      computerVictory();
      trackScore();
    } else if (playerSelection === "paper" && computerSelection === "rock" ) {
      console.log("Victory! " + playerSelection + " engulfs " + computerSelection + ".");
      playerVictory();
      computerDefeat();
      trackScore();
    }
    // function checks if player chooses scissors
    if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log("Defeat! " + playerSelection + " are crushed by " + computerSelection + ".");
      playerDefeat();
      computerVictory();
      trackScore();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      console.log("Victory! " + playerSelection + " shred " + computerSelection + ".");
      playerVictory();
      computerDefeat();
      trackScore();
    } else if (playerSelection === computerSelection) {
      console.log("Stalemate! Player chose: " + playerSelection + ". Computer chose: " + computerSelection + ".");
      stalemate();
      trackScore();
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

  function resetScore() {
    playerWinCount = 0;
    computerWinCount = 0;
  }

  // this function shows the score
  function trackScore() {
    results.textContent = `Player Wins: ${playerWinCount}. Computer Wins: ${computerWinCount}.`; 
    if ( playerWinCount === 5 ) {
      results.textContent = `Winner! Player won 5 rounds! Player Wins: ${playerWinCount}. Computer Wins: ${computerWinCount}.`;
      resetScore();
    } else if (computerWinCount === 5) {
      results.textContent = `Winner! Computer won 5 rounds! Player Wins: ${playerWinCount}. Computer Wins: ${computerWinCount}.`;
      resetScore();
    }
  }

  // this function will declare victory after the first player to five rounds
  

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
        console.log(button.id);
    });
});

const container = document.querySelector('#container');
const results = document.createElement('p');
results.textContent = `Player Wins: ${playerWinCount}. Computer Wins: ${computerWinCount}.`;
container.appendChild(results);
