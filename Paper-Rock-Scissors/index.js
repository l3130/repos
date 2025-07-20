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
