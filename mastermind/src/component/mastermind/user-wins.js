import Container from "../common/container";
import CardHeader from "../common/card-header";
import Card from "../common/card";
import CardBody from "../common/card-body";
import {Link} from "react-router-dom";

export default function UserWins({}){
    return (
        <Container>
            <p></p>
            <Card>
                <CardHeader title="Good Game!"></CardHeader>
                <CardBody>
                    <Link to="/">Would you like to play again?</Link>
                </CardBody>
            </Card>
        </Container>
    )
}