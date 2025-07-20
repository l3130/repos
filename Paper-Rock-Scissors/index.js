console.log("Welcome to Paper Rock Scissors Game!");
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const getHumanChice = () => {
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(choice)) {
        console.log("Invalid choice. Please try again.");
        return getHumanChice();
    }
    return choice;
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (!['rock', 'paper', 'scissors'].includes(human)) {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
        return;
    }

    if (human === computer) {
        console.log(`It's a tie! Both chose ${human.charAt(0).toUpperCase() + human.slice(1)}`);
    } else if (
        (human === 'rock' && computer === 'scissors') ||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissors' && computer === 'paper')
    ) {
        console.log(`You win! ${human.charAt(0).toUpperCase() + human.slice(1)} beats ${computer.charAt(0).toUpperCase() + computer.slice(1)}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${human.charAt(0).toUpperCase() + human.slice(1)}`);
        computerScore++;
    }
    console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
}