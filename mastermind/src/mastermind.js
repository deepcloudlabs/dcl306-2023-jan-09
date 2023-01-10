// View (MVC) -> Composite Pattern
// View -> Functional Programming
// Component:
// 1. Class-based Component    -> Stateful Component
// 2. Function-based Component -> Stateless Component
// 3. Function-Based Component -- React Hooks --> Stateful Component
import React from "react";
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

// 1. Stateful Component
class Mastermind extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = { // Model
            game: {
                level: 3,
                secret: this.createSecret(3),
                tries: 0,
                maxTries: 10,
                guess: 123,
                moves: [],
                lives: 3,
                counter: 60,
                pbClass: "bg-success",
                pbWidth: "100%"
            },
            statistics: {
                wins: 0,
                loses: 0
            }
        }
    }

    componentDidMount() {
        setInterval(this.countDown, 1_000);
    }

    countDown = () => {
        const game = {...this.state.game};
        const statistics = {...this.state.statistics};
        game.counter--;
        game.pbWidth = `${Math.round(game.counter * 100 / 60)}%`;
        if (game.counter < 30) {
            game.pbClass = "bg-danger";
        } else if (game.counter < 45) {
            game.pbClass = "bg-warning";
        }
        if (game.counter <= 0) {
            statistics.loses++;
            game.lives--;
            if (game.lives === 0) {
                //TODO: Player loses the game
            } else {
                this.initGame(game);
            }
        }
        this.setState({game, statistics}, () => {
            // console.log(this.state.game.level);
        });
    }
    handleInputGuess = (event) => {
        const game = {...this.state.game};
        game.guess = Number(event.target.value);
        this.setState({game});
    }

    createRandomDigit = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    createSecret = (level) => {
        const digits = [];
        digits.push(this.createRandomDigit(1, 9));
        while (digits.length < level) {
            const digit = this.createRandomDigit(0, 9);
            if (digits.includes(digit)) continue;
            digits.push(digit);
        }
        return digits.reduce((number, digit) => 10 * number + digit, 0);
    }
    initGame = (game) => {
        game.tries = 0;
        game.counter = 60;
        game.moves = [];
        game.guess = this.createSecret(game.level);
        game.secret = this.createSecret(game.level);
    }
    play = (event) => {
        const game = {...this.state.game};
        const statistics = {...this.state.statistics};
        if (game.guess === game.secret) {
            game.level++;
            if (game.level > 10) {
                //TODO: Player wins the game
            } else {
                statistics.wins++;
                game.lives++;
                this.initGame(game);
            }
        } else {
            game.tries++;
            if (game.tries === game.maxTries) {
                statistics.loses++;
                game.lives--;
                if (game.lives === 0) {
                    //TODO: Player loses the game
                } else {
                    this.initGame(game);
                }
            } else {
                game.moves.push(new Move(game.guess, game.secret));
            }
        }
        this.setState({game, statistics});
    }

    render() { // View (js)
        return (
            <Container>
                <Card>
                    <CardHeader title="Game Console"></CardHeader>
                    <CardBody>
                        <Badge id="level" label="Level" bgColor="bg-success" value={this.state.game.level}></Badge>
                        <Badge id="lives" label="Lives" bgColor="bg-info" value={this.state.game.lives}></Badge>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="level">Tries: </label>
                            <span id="level" className="badge bg-success">{this.state.game.tries}</span>
                            of
                            <span id="level" className="badge bg-danger">{this.state.game.maxTries}</span>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="counter">Counter: </label>
                            <div className="progress">
                                <div id="counter"
                                     style={{"width": this.state.game.pbWidth}}
                                     className={"progress-bar ".concat(this.state.game.pbClass)}>{this.state.game.counter}</div>
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <InputText
                                   id="guess"
                                   value={this.state.game.guess}
                                   changeHandler={this.handleInputGuess}></InputText>
                            <label className="form-label" htmlFor="guess">Guess</label>
                            <Button bgColor="btn-success" clickFunction={this.play} label="Play"></Button>
                        </div>
                        <div className="mb-3">
                            <Table>
                                <TableHead columns="No,Guess,Message,Evaluation"></TableHead>
                                <TableBody>
                                {
                                    this.state.game.moves.map((move, index) =>
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
}

export default Mastermind;
