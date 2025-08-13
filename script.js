/*Pseudocode
User enters rock, paper, or scissors and the answer is stored in a variable
CPU randomly chooses rock, paper, or scissors and is stored in a variable
if user picks rock
    if cpu picks rock, result is a tie
    if cpu picks paper, result is cpu wins
    if cpu picks scissors, result is user wins
if user picks paper
    if cpu picks rock, result is user wins
    if cpu picks paper, result is a tie
    if cpu picks scissors, result is cpu wins
if user picks scissors
    if cpu picks rock, result is cpu wins
    if cpu picks paper, result is user wins
    if cpu picks scissors, result is a tie

the result is shown on screen

*/
function getComputerChoice() {
    let random = Math.random();
    let choice = "";
    if (random < 0.33) choice = "rock";
    else if (random < 0.66) choice = "paper";
    else choice = "scissors";
    // console.log(random);
    console.log(choice);
    return choice;
}

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors?");
    console.log(choice);
    return choice;
}

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
let result = -1; //-1 is not determined, 0 is a tie, 1 is user wins, 2 is computer wins

switch (humanChoice)
{
    case "rock":
    switch (computerChoice)
    {
        case "rock": result = 0; break; //a tie
        case "paper": result = 2; break; //computer wins
        case "scissors": result = 1; break; //human wins
    }
    break;

    case "paper":
    switch (computerChoice)
    {
        case "rock": result = 1; break; //human wins
        case "paper": result = 0; break; //a tie
        case "scissors": result = 2; break; //computer wins
    }
    break;

    case "scissors":
    switch (computerChoice)
    {
        case "rock": result = 2; break; //computer wins
        case "paper": result = 1; break; //human wins
        case "scissors": result = 0; break; //a tie
    }
    break;
}

switch (result)
{
    case 0:
    console.log("It's a tie.");
    break;

    case 1:
    console.log("Human wins!");
    humanScore++;
    break;

    case 2:
    console.log("Computer wins!");
    computerScore++;
    break;
}

console.log(humanScore+":"+computerScore);