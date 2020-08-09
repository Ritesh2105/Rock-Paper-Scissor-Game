var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('rock, paper, scissors or quit > ');
rl.prompt();
const aChoices = ["rock", "paper", "scissors"];
let nComputerWins = 0;
let nPersonWins = 0;
let nTies = 0; 
rl.on('line', (sChoice) => {
    const nChoice = Math.floor(Math.random() * aChoices.length);
    const sComputer = aChoices[nChoice];
    if (sChoice === "quit"){
        console.log(`
        Thanks for playing ...
        Computer Wins: ${nComputerWins}
        Person Wins: ${nPersonWins}
        Ties: ${nTies}
        `);
        rl.close();
    } 
    console.log(`You chose ${sChoice}`);
    console.log(`The computer chose ${sComputer}`);
    if (sComputer == sChoice) {
        nTies++;
        console.log("You tied");
    } else if ((sComputer == "paper" && sChoice == "rock") ||
        (sComputer == "scissors" && sChoice == "paper") ||
        (sComputer == "rock" && sChoice == "scissors")) {
        nComputerWins++;
        console.log("Computer wins");
    } else if ((sChoice == "paper" && sComputer == "rock") ||
        (sChoice == "scissors" && sComputer == "paper") ||
        (sChoice == "rock" && sComputer == "scissors")) {
        nPersonWins++;
        console.log("You win");
    } else {
        console.log("please enter rock paper or scissors");
    }    
    rl.prompt();
}).on('close',() =>{
    process.exit(0);
});