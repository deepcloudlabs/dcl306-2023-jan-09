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
import {GameContext, StatisticsContext} from "./GameProvider";




// 3. Stateful Component using Function and React Hooks
export default function Mastermind() {
    const {game, dispatchGame} = useContext(GameContext)
    const {statistics, dispatchStatistics} = useContext(StatisticsContext)

    useEffect(() => {
        const timerId = setInterval(() => dispatchGame({type: "COUNTDOWN"}), 1_000);
        return () => {
            clearInterval(timerId);
        };
    })

    return (
        <Container>
            <GameConsole inputHandler={(event) => dispatchGame({type: "GUESS_CHANGED", data: event.target.value})}
                         playFunction={() => dispatchGame({type: "PLAY"})}></GameConsole>
            <p></p>
            <GameStatistics></GameStatistics>
        </Container>
    );
}
