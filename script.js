const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const choices = document.querySelectorAll(".choice-btn");

let userScore = 0;
let computerScore = 0;

const choicesArray = ["Rock", "Paper", "Scissors"];

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const userChoice = e.target.id;
    const computerChoice = generateComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    userChoiceDisplay.textContent = `You chose: ${capitalize(userChoice)}`;
    computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
    winnerDisplay.textContent = `Winner: ${winner}`;

    if (winner === "You") {
      userScore++;
    } else if (winner === "Computer") {
      computerScore++;
    }

    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
  });
});

function generateComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice.toLowerCase()) {
    return "It's a Tie!";
  }
  if (
    (userChoice === "rock" && computerChoice === "Scissors") ||
    (userChoice === "paper" && computerChoice === "Rock") ||
    (userChoice === "scissors" && computerChoice === "Paper")
  ) {
    return "You";
  } else {
    return "Computer";
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
