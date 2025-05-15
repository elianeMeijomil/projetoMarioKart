const PLAYERS = [
    { NAME: "Mario", VELOCITY: 4, MANOBRABILITY: 3, POWER: 3, POINTS: 0 },
    { NAME: "Luigi", VELOCITY: 3, MANOBRABILITY: 4, POWER: 4, POINTS: 0 },
    { NAME: "Peach", VELOCITY: 3, MANOBRABILITY: 4, POWER: 2, POINTS: 0 },
    { NAME: "Yoshi", VELOCITY: 2, MANOBRABILITY: 4, POWER: 3, POINTS: 0 },
    { NAME: "Bowser", VELOCITY: 5, MANOBRABILITY: 2, POWER: 5, POINTS: 0 },
    { NAME: "Donkey Kong", VELOCITY: 2, MANOBRABILITY: 2, POWER: 5, POINTS: 0 }
]


async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function selectPlayer() {
    const player = PLAYERS[Math.floor(Math.random() * PLAYERS.length)];
    return player;
}

async function getRandomBlock() {
    let random = Math.random();
    let result
    switch (true) {
        case (random < 0.33):
            result = 'STRAIGHT';
            break;
        case (random < 0.66):
            result = 'CURVE';
            break;
        default:
            result = 'COMBAT';
    }
    return result;
}

async function playRaceEngine(player1, player2) {
    let player1Points = 0;
    let player2Points = 0;

    for (let round = 0; round <= 5; round++) {
        let block = await getRandomBlock();
        console.log(`Round ${round + 1}\n Block: ${block}`);

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        switch (block) {    
            case 'STRAIGHT':
                // hability = 'VELOCITY';
                totalTestSkill1 = diceResult1 + player1.VELOCITY;
                totalTestSkill2 = diceResult2 + player2.VELOCITY;
                break;
            case 'CURVE':
                // hability = 'MANOBRABILITY';
                totalTestSkill1 = diceResult1 + player1.MANOBRABILITY;
                totalTestSkill2 = diceResult2 + player2.MANOBRABILITY;
                break;
            case 'COMBAT':
                // hability = 'POWER';
                totalTestSkill1 = diceResult1 + player1.POWER;
                totalTestSkill2 = diceResult2 + player2.POWER;
                break;
        }
        
        player1force = player1.hability;
        player2force = player2.hability;
        
        if (dice1+player1force > dice2+player2force) {
            player1Points += player1.POINTS;
            console.log(`Round ${round + 1}: ${player1.NAME} wins!`);
        } else if (dice2 > dice1) {
            player2Points += player2.POINTS;
            console.log(`Round ${round + 1}: ${player2.NAME} wins!`);
        } else {
            console.log(`Round ${round + 1}: It's a tie!`);
        }
    }

    if (player1Points > player2Points) {
        console.log(`${player1.NAME} wins the game!`);
    } else if (player2Points > player1Points) {
        console.log(`${player2.NAME} wins the game!`);
    } else {
        console.log("It's a tie!");
    }

}
// CONSTRUÇÃO DE FUNÇÃO AUTO INVOCÁVEL:
//  (assync function main(){...})();

(async function main(){
    const player1 = selectPlayer();
    const player2 = selectPlayer();
    
    console.log("Welcome to the Mario Kart Game!\n");
    console.log(`Play ${player1.NAME} vs ${player2.NAME}\n`);

    await playRaceEngine(player1, player2);

    console.log("Thank you for playing!");
    console.log("See you next time!");
    console.log("Bye!");
 })();

