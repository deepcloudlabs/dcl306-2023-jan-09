import Card from "../common/card";
import CardHeader from "../common/card-header";
import CardBody from "../common/card-body";
import Badge from "../common/badge";
import {useStatistics} from "../../GameProvider";

export default function GameStatistics(){
    const statistics = useStatistics();

    return (
        <Card>
            <CardHeader title="Game Statistics" />
            <CardBody>
                <Badge id="wins" label="Wins" bgColor="bg-success" value={statistics.wins}></Badge>
                <Badge id="loses" label="Loses" bgColor="bg-danger" value={statistics.loses}></Badge>
            </CardBody>
        </Card>
    );
}