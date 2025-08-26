// const { createElement } = require("react");

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
    let random = Math.floor(Math.random()*3);
    let choice = "";
    if (random == 0) choice = "rock";
    else if (random == 1) choice = "paper";
    else choice = "scissors";
    // console.log(random);
    console.log(choice);
    return choice;
} //end function get computer choice

function playRound(humanChoice, computerChoice) {
    let result = -1; //-1 is not determined, 0 is a tie, 1 is user wins, 2 is computer wins

    // Determine Results
    if (humanChoice == computerChoice) //if human and computer pick the same thing, result is a tie
    {
        result = 0;
    }
    else if ( //here are all the possibilities for the human to win
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        result = 1;
    }
    else { //the only other possible result is the computer wins
        result = 2;
    }
    
    return result;
} //end function play round




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice = "";
    let computerChoice = "";
    let result = -1;

    let btn = document.querySelector("#menu");
    btn.addEventListener("click", (event) => {
        let target = event.target;
        console.log("Button pressed: "+target.id);
        humanChoice = target.id;
        computerChoice = getComputerChoice();
        result = playRound(humanChoice, computerChoice); //get result
        // Show the result
        switch (result)
        {
            case 0:
            console.log("It's a tie! Both picked "+humanChoice);
            const tie = document.querySelector("#results");
            tie.textContent = "It's a tie! Both picked "+humanChoice;
            break;

            case 1:
            console.log("You win! "+humanChoice+" beats "+computerChoice);
            const win = document.querySelector("#results");
            win.textContent = "You win! "+humanChoice+" beats "+computerChoice;
            humanScore++;
            break;

            case 2:
            console.log("You lose! "+computerChoice+" beats "+humanChoice);
            const lose = document.querySelector("#results");
            lose.textContent = "You lose! "+computerChoice+" beats "+humanChoice;
            computerScore++;
            break;
        } //end switch result

        const score = document.querySelector("#score");
        if (humanScore == 5 || computerScore == 5)
        {
            // Remove Buttons
            btn.remove();
            // Show final score
            console.log(`Final Score ${humanScore}:${computerScore}`);
            if (humanScore > computerScore)
            {
                score.textContent = `The final score is ${humanScore} to ${computerScore}.
                Congratulations! You're the winner! F5 to play again?`;
                console.log("Congratulations! You're the winner!\nF5 to play again?");
            }
            else if (humanScore < computerScore)
            {
                score.textContent = `The final score is ${humanScore} to ${computerScore}.
                So sorry, you lose. F5 to play again?`;
                console.log("So sorry, you lose.\nF5 to play again?");
            }
        }
        else
        {
            score.textContent = `The score is now ${humanScore} to ${computerScore}`;
        }
    });

    
} //end function play game

playGame();