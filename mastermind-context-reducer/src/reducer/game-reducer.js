import Move from "../move";
import createSecret from "../utility/mastermind-utility";

export default function gameReducer(game, action){
    const newGame = {...game};
    switch (action.type) {
        case "PLAY":
            if (newGame.guess === newGame.secret) {
                newGame.level++;
                if (newGame.level > 10) {
                    //TODO: Player Wins
                } else {
                    //TODO: increment wins
                    newGame.lives++;
                    initGame(newGame);
                }
            } else {
                newGame.tries++;
                if (newGame.tries === newGame.maxTries) {
                    //TODO: increment statistics loses
                    newGame.lives--;
                    if (newGame.lives === 0) {
                        //TODO: player loses
                    } else {
                        initGame(newGame);
                    }
                } else {
                    newGame.moves.push(new Move(game.guess, game.secret));
                }
            }
            break;
        case "GUESS_CHANGED":
            newGame.guess = Number(action.data);
            break;
        case "COUNTDOWN":
            newGame.counter--;
            newGame.pbWidth = `${Math.round(newGame.counter * 100 / 60)}%`;
            if (newGame.counter < 30) {
                newGame.pbClass = "bg-danger";
            } else if (newGame.counter < 45) {
                newGame.pbClass = "bg-warning";
            }
            if (newGame.counter <= 0) {
                //TODO: increment statistics loses
                newGame.lives--;
                if (newGame.lives === 0) {
                    //TODO: player loses
                } else {
                    initGame(newGame);
                }
            }
            break;
    }
    return newGame;
}

function initGame(game) {
    game.tries = 0;
    game.counter = 60;
    game.moves = [];
    game.guess = createSecret(game.level);
    game.secret = createSecret(game.level);
}