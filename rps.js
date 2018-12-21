const WIN = 0;
const LOSE = 1;
const TIE = 2;
const INPUT_ERROR = 3;

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const PLAY_TABLE = [[TIE,LOSE,WIN],
                    [WIN,TIE,LOSE],
                    [LOSE,WIN,TIE]] //[player][computer]

function computerPlay() {

    return getRandomPlay();

    function getRandomPlay() {
        let play = Math.floor(Math.random() * 3);
        switch(play) {
            case 0 : return "rock";
            case 1 : return "paper";
            case 2 : return "scissors";
        }
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(isValidSelection(playerSelection) && isValidSelection(computerSelection)) {
        return roundResult();
    }
    return INPUT_ERROR;

    function isValidSelection(selection) {
        return (selection == "rock" || selection == "paper" || selection == "scissors")
    
    }

    function roundResult() {
        let playerSelectionNum = selectionToNumber(playerSelection);
        let computerSelectionNum = selectionToNumber(computerSelection);
        
        return PLAY_TABLE[playerSelectionNum][computerSelectionNum];
        
        function selectionToNumber(selection) {
            switch(selection) {
                case "rock": return ROCK;
                case "paper": return PAPER;
                case "scissors": return SCISSORS;
            }
        }
    }

}

function game() {
    let playerPoints,
        playerSelection,
        computerPoints,
        computerSelection,
        roundResult;

    playerPoints = computerPoints = 0;
    
    while(playerPoints < 3 && computerPoints < 3) {
        playerSelection = window.prompt("type rock, paper or scissors");
        computerSelection = computerPlay();
        roundResult =  playRound(playerSelection, computerSelection);

        switch(roundResult) {
            case WIN:
                playerPoints++;
                console.log("You win this round, " + playerSelection + " beats " + computerSelection);
                break;
            case TIE:
                console.log("It's a draw!");
                break;
            case LOSE:
                computerPoints++;
                console.log("You lose this round, " + computerSelection + " beats " + playerSelection);
                break;
            case INPUT_ERROR:
                console.log("Please enter a valid word: rock, paper, scissors");
        }
        console.log("player: " + playerPoints + "       computer: " + computerPoints);
    }

    playerPoints == 3?console.log("YOU WIN!!"):console.log("YOU LOSE...");
    
}