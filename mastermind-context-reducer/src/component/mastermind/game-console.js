import Card from "../common/card";
import CardHeader from "../common/card-header";
import CardBody from "../common/card-body";
import Badge from "../common/badge";
import FormGroup from "../common/form-group";
import ProgressBar from "../common/progress-bar";
import InputText from "../common/input-text";
import Button from "../common/button";
import Table from "../common/table";
import TableHead from "../common/table-head";
import TableBody from "../common/table-body";
import MoveEvaluation from "./move-evaluation";
import {useGame, useMoves} from "../../GameProvider";

export default function GameConsole({playFunction,inputHandler}){
    const hamleler = useMoves();
    const game = useGame();
    return (
        <Card>
            <CardHeader title="Game Console"></CardHeader>
            <CardBody>
                <Badge id="level" label="Level" bgColor="bg-success" value={game.level}></Badge>
                <Badge id="lives" label="Lives" bgColor="bg-info" value={game.lives}></Badge>
                <FormGroup className="mb-3">
                    <label className="form-label" htmlFor="level">Tries: </label>
                    <span id="level" className="badge bg-success">{game.tries}</span>
                    of
                    <span id="level" className="badge bg-danger">{game.maxTries}</span>
                </FormGroup>
                <FormGroup>
                    <label className="form-label" htmlFor="counter">Counter: </label>
                    <ProgressBar bgColor={game.pbClass} pbWidth={game.pbWidth}
                                 value={game.counter}></ProgressBar>
                </FormGroup>
                <div className="form-floating mb-3">
                    <InputText
                        id="guess"
                        value={game.guess}
                        changeHandler={inputHandler}></InputText>
                    <label className="form-label" htmlFor="guess">Guess</label>
                    <Button bgColor="btn-success" clickFunction={playFunction} label="Play"></Button>
                </div>
                <FormGroup>
                    <Table>
                        <TableHead columns="No,Guess,Message,Evaluation"></TableHead>
                        <TableBody>
                            {
                                hamleler.map((move, index) =>
                                    <tr key={move.guess * index}>
                                        <td>{index + 1}</td>
                                        <td>{move.guess}</td>
                                        <td>{move.message}</td>
                                        <td><MoveEvaluation move={move}></MoveEvaluation></td>
                                    </tr>
                                )
                            }
                        </TableBody>
                    </Table>
                </FormGroup>
            </CardBody>
        </Card>

    );
}