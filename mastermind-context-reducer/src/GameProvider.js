import {createContext, useContext, useReducer} from "react";
import gameReducer from "./reducer/game-reducer";
import createSecret from "./utility/mastermind-utility";
import Mastermind from "./mastermind";
import statisticsReducer from "./reducer/statistics-reducer";

export const gameInitialState = { // Model
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

export const statisticsInitialState = {
    wins: 20,
    loses: 10
};
export const GameContext = createContext(null);
export const StatisticsContext = createContext(null);

export default function GameProvider(){
    const [game, dispatchGame] = useReducer(gameReducer, gameInitialState);
    const [statistics, dispatchStatistics] = useReducer(statisticsReducer, statisticsInitialState);

    return (
        <GameContext.Provider value={{game,dispatchGame}}>
            <StatisticsContext.Provider value={{statistics, dispatchStatistics}}>
                <Mastermind></Mastermind>
            </StatisticsContext.Provider>
        </GameContext.Provider>
    );
}

export function useStatistics(){
    const {statistics} = useContext(StatisticsContext);
    return statistics;
}

export function useMoves(){
    const {game} = useContext(GameContext);
    return game.moves;
}

export function useGame(){
    const {game} = useContext(GameContext);
    return game;
}