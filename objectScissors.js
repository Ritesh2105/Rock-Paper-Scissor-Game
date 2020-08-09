const readline = require('readline');
const Game = require('./Game');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('rock, paper, scissors or quit > ');
rl.prompt();
const oGame = new Game();
rl.on('line', (sChoice) => {
    if(sChoice == "quit"){
        oGame.quit();
        rl.close();
    }
    oGame.makeAMove(sChoice);
    rl.prompt();
})
.on('close',() =>{
    process.exit(0);
});
// method chaining (2 ons both relate to the same instance of rl)