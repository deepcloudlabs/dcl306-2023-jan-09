import React, {useContext, useEffect, useReducer, useState} from "react";
import Move from "./move";
import Container from "./component/common/container";
import createSecret from "./utility/mastermind-utility";
import GameStatistics from "./component/mastermind/game-statistics";
import GameConsole from "./component/mastermind/game-console";
import {saveStateToLocalStorage} from "./utility/storage-utility";
import {useNavigate} from "react-router";
import gameReducer from "./reducer/game-reducer";
import statisticsReducer from "./reducer/statistics-reducer";

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
export default function Mastermind() {
    const [game, dispatchGame] = useReducer(gameReducer, gameInitialState);
    const [statistics, dispatchStatistics] = useReducer(statisticsReducer, statisticsInitialState);

    useEffect(() => {
        const timerId = setInterval(() => dispatchGame({type: "COUNTDOWN"}), 1_000);
        return () => {
            clearInterval(timerId);
        };
    })

    return (
        <Container>
            <GameConsole game={game}
                         inputHandler={(event) => dispatchGame({type: "GUESS_CHANGED", data: event.target.value})}
                         playFunction={() => dispatchGame({type: "PLAY"})}></GameConsole>
            <p></p>
            <GameStatistics stats={statistics}></GameStatistics>
        </Container>
    );
}
