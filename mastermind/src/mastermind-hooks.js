import React, {useState} from "react";
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
    const [game, setGame] = useState(gameInitialState);
    const [statistics, setStatistics] = useState(statisticsInitialState);

    const countDown = function(){
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


    function initGame(game){
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
            <Card>
                <CardHeader title="Game Console"></CardHeader>
                <CardBody>
                    <Badge id="level" label="Level" bgColor="bg-success" value={game.level}></Badge>
                    <Badge id="lives" label="Lives" bgColor="bg-info" value={game.lives}></Badge>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="level">Tries: </label>
                        <span id="level" className="badge bg-success">{game.tries}</span>
                        of
                        <span id="level" className="badge bg-danger">{game.maxTries}</span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="counter">Counter: </label>
                        <ProgressBar bgColor={game.pbClass} pbWidth={game.pbWidth}
                                     value={game.counter}></ProgressBar>
                    </div>
                    <div className="form-floating mb-3">
                        <InputText
                            id="guess"
                            value={game.guess}
                            changeHandler={handleInputGuess}></InputText>
                        <label className="form-label" htmlFor="guess">Guess</label>
                        <Button bgColor="btn-success" clickFunction={play} label="Play"></Button>
                    </div>
                    <div className="mb-3">
                        <Table>
                            <TableHead columns="No,Guess,Message,Evaluation"></TableHead>
                            <TableBody>
                                {
                                    game.moves.map((move, index) =>
                                        <tr key={move.guess}>
                                            <td>{index + 1}</td>
                                            <td>{move.guess}</td>
                                            <td>{move.message}</td>
                                            <td><MoveEvaluation move={move}></MoveEvaluation></td>
                                        </tr>
                                    )
                                }
                            </TableBody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Container>
    );
}
