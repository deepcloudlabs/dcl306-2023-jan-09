// View (MVC) -> Composite Pattern
// View -> Functional Programming
// Component:
// 1. Class-based Component    -> Stateful Component
// 2. Function-based Component -> Stateless Component
// 3. Function-Based Component -- React Hooks --> Stateful Component
import React from "react";

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
                counter: 60
            },
            statistics: {
                wins: 0,
                loses: 0
            }
        }
        setInterval(() => {
            const game = {...this.state.game};
            game.counter--;
            //TODO: if counter is less than zero than time is out!
            this.setState({game}, () => {
                // console.log(this.state.game.level);
            });
        }, 1_000);
    }

    handleInputGuess = (event) => {
        const game = {...this.state.game};
        game.guess = event.target.value;
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

    play = (event) => {
        const game = {...this.state.game};


        this.setState({game});
    }

    render() { // View (js)
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Game Console</h4>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="level">Game Level: </label>
                            <span id="level" className="badge bg-success">{this.state.game.level}</span>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="lives">Lives: </label>
                            <span id="lives" className="badge bg-info">{this.state.game.lives}</span>
                        </div>
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
                                     style={{"width": "100%"}}
                                     className="progress-bar bg-primary">{this.state.game.counter}</div>
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text"
                                   id="guess"
                                   name="guess"
                                   value={this.state.game.guess}
                                   onChange={this.handleInputGuess}
                                   className="form-control"></input>
                            <label className="form-label" htmlFor="guess">Guess</label>
                            <button className="btn btn-success" onClick={this.play}>Play</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mastermind;
