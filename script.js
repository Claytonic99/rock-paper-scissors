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
} //end function get computer choice

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors?");
    console.log(choice);
    return choice;
} //end function get human choice

function playRound(humanChoice, computerChoice) {
    // Remove case sensitivity
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    let result = -1; //-1 is not determined, 0 is a tie, 1 is user wins, 2 is computer wins

    // Determine Results
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

    return result;
} //end function play round

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice = "";
    let computerChoice = "";
    let result = -1;

    for (let round = 0; round < 5; round++)
    {
        console.log(humanScore+":"+computerScore);
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        result = playRound(humanChoice, computerChoice); //get result
        
        // Show the result
        switch (result)
        {
            case 0:
            console.log("It's a tie! Both picked "+humanChoice);
            break;

            case 1:
            console.log("You win! "+humanChoice+" beats "+computerChoice);
            humanScore++;
            break;

            case 2:
            console.log("You lose! "+computerChoice+" beats "+humanChoice);
            computerScore++;
            break;
        } //end switch result
    }

    // End of game
    console.log("Final Score "+humanScore+":"+computerScore);
    if (humanScore > computerScore) console.log("Congratulations! You're the winner!\nF5 to play again?");
    else if (humanScore < computerScore) console.log("So sorry, you lose.\nF5 to play again?");
    else console.log("Wow! A tie game!\nF5 to play again?");
} //end function play game

playGame();