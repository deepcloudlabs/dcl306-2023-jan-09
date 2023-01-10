import Card from "../common/card";
import CardHeader from "../common/card-header";
import CardBody from "../common/card-body";
import Badge from "../common/badge";

export default function GameStatistics({stats}){
    return (
        <Card>
            <CardHeader title="Game Statistics" />
            <CardBody>
                <Badge id="wins" label="Wins" bgColor="bg-success" value={stats.wins}></Badge>
                <Badge id="loses" label="Loses" bgColor="bg-danger" value={stats.wins}></Badge>
            </CardBody>
        </Card>
    );
}