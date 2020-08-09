const aChoices = ["rock", "paper", "scissors"];

module.exports = class Game{
    makeAMove(sChoice){
        if(!this.nComputerWins &&
            !this.nPersonWins &&
            !this.nTies){
            this.nComputerWins = 0;
            this.nPersonWins = 0;
            this.nTies = 0;
        }
        const nChoice = Math.floor(Math.random() * aChoices.length);
        const sComputer = aChoices[nChoice];
        console.log(`You chose ${sChoice}`);
        console.log(`The computer chose ${sComputer}`);
        if (sComputer == sChoice) {
            this.nTies++;
            console.log("You tied");
        } else if ((sComputer == "paper" && sChoice == "rock") ||
            (sComputer == "scissors" && sChoice == "paper") ||
            (sComputer == "rock" && sChoice == "scissors")) {
            this.nComputerWins++;
            console.log("Computer wins");
        } else if ((sChoice == "paper" && sComputer == "rock") ||
            (sChoice == "scissors" && sComputer == "paper") ||
            (sChoice == "rock" && sComputer == "scissors")) {
            this.nPersonWins++;
            console.log("You win");
        } else {
            console.log("please enter rock paper or scissors");
        }    
    
    }
    quit(){
        console.log(`
            Thanks for playing ...
            Computer Wins: ${this.nComputerWins}
            Person Wins: ${this.nPersonWins}
            Ties: ${this.nTies}
            
        `);
    }
}