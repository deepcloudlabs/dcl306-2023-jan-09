import React, {useEffect, useState} from "react";
import Move from "./move";
import Badge from "./component/common/badge";
import Card from "./component/common/card";
import Container from "./component/common/container";
import CardHeader from "./component/common/card-header";
import CardBody from "./component/common/card-body";
import Button from "./component/common/button";
import InputText from "./component/common/input-text";
import Table from "./component/common/table";
import TableHead from "./component/common/table-head";
import TableBody from "./component/common/table-body";
import MoveEvaluation from "./component/mastermind/move-evaluation";
import ProgressBar from "./component/common/progress-bar";
import createSecret from "./utility/mastermind-utility";
import FormGroup from "./component/common/form-group";
import GameStatistics from "./component/mastermind/game-statistics";
import GameConsole from "./component/mastermind/game-console";
import loadStateFromLocalStorage from "./utility/storage-utility";

const gameInitialState = { // Model
    level: 3,
    secret: createSecret(3),
    tries: 0,
    maxTries: 10,
    guess: 123,
    moves: [],
    lives: 3,
    counter: 60,
    pbClass: "bg-success",
    pbWidth: "100%"
};
const statisticsInitialState = {
    wins: 0,
    loses: 0
};

// 3. Stateful Component using Function and React Hooks
export default function MastermindHook() {
    const localState = loadStateFromLocalStorage("mastermind-2023",
        {game: gameInitialState, statistics: statisticsInitialState}
    );

    const [game, setGame] = useState(localState.game);
    const [statistics, setStatistics] = useState(localState.statistics);

    useEffect(() => {
        const timerId = setInterval(countDown, 1_000);
        return () => {
            clearInterval(timerId);
        };
    })
    const countDown = function () {
        const newGame = {...game};
        const newStatistics = {...statistics};
        newGame.counter--;
        newGame.pbWidth = `${Math.round(newGame.counter * 100 / 60)}%`;
        if (newGame.counter < 30) {
            newGame.pbClass = "bg-danger";
        } else if (newGame.counter < 45) {
            newGame.pbClass = "bg-warning";
        }
        if (newGame.counter <= 0) {
            newStatistics.loses++;
            newGame.lives--;
            if (newGame.lives === 0) {
                //TODO: Player loses the game
            } else {
                initGame(newGame);
            }
        }
        setGame(newGame);
        setStatistics(newStatistics);
    }
    const handleInputGuess = (event) => {
        const newGame = {...game};
        newGame.guess = Number(event.target.value);
        setGame(newGame);
    }


    function initGame(game) {
        game.tries = 0;
        game.counter = 60;
        game.moves = [];
        game.guess = createSecret(game.level);
        game.secret = createSecret(game.level);
    }

    const play = (event) => {
        const newGame = {...game};
        const newStatistics = {...statistics};
        if (newGame.guess === newGame.secret) {
            newGame.level++;
            if (newGame.level > 10) {
                //TODO: Player wins the game
            } else {
                newStatistics.wins++;
                newGame.lives++;
                initGame(newGame);
            }
        } else {
            newGame.tries++;
            if (newGame.tries === newGame.maxTries) {
                newStatistics.loses++;
                newGame.lives--;
                if (newGame.lives === 0) {
                    //TODO: Player loses the game
                } else {
                    initGame(newGame);
                }
            } else {
                newGame.moves.push(new Move(game.guess, game.secret));
            }
        }
        setGame(newGame);
        setStatistics(newStatistics);
    }

    return (
        <Container>
            <GameConsole game={game} inputHandler={handleInputGuess} playFunction={play}></GameConsole>
            <p></p>
            <GameStatistics stats={statistics}></GameStatistics>
        </Container>
    );
}
