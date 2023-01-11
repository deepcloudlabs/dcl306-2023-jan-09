import Container from "./component/common/container";
import CardHeader from "./component/common/card-header";
import CardBody from "./component/common/card-body";
import Card from "./component/common/card";
import SelectBox from "./component/common/select-box";
import {useEffect, useState} from "react";
import Table from "./component/common/table";
import TableHead from "./component/common/table-head";
import TableBody from "./component/common/table-body";
import io from "socket.io-client";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

export const options = {
    responsive: true,
    animation: false,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'BINANCE Market Data',
        },
    },
};

const socket = io("ws://localhost:5555")

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function App() {
    const [windowSize, setWindowSize] = useState(25);
    const [trades, setTrades] = useState([]);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{
            label: 'BTC-USDT Price',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }]
    });

    function handleInputChange(event) {
        setWindowSize(Number(event.target.value));
    }

    useEffect(() => {
        socket.on("ticker", (trade) => {
            setTrades(trades => {
                let newTrades = [...trades, trade];
                if (newTrades.length > windowSize) {
                    const index = newTrades.length - windowSize;
                    newTrades = newTrades.slice(index);
                }
                return newTrades;
            });
            setChartData(chartData => {
                let newChartData = {...chartData};
                newChartData.datasets = [...chartData.datasets];
                newChartData.labels = [...chartData.labels, trade.timestamp];
                if (newChartData.labels.length > windowSize) {
                    let index = newChartData.labels.length - windowSize;
                    newChartData.labels = newChartData.labels.slice(index);
                }
                newChartData.datasets[0].data = [...chartData.datasets[0].data, Number(trade.price)];
                if (newChartData.datasets[0].data.length > windowSize) {
                    let index = newChartData.datasets[0].data.length - windowSize;
                    newChartData.datasets[0].data = newChartData.datasets[0].data.slice(index);
                }
                return newChartData;
            });
        });
        return () => {
            socket.off("ticker");
        }
    });
    return (
        <Container>
            <p></p>
            <Card>
                <CardHeader title="Market Chart Data"/>
                <CardBody>
                    <Line data={chartData}
                          width={720}
                          height={480}
                          options={options}>

                    </Line>
                </CardBody>
            </Card>
            <p></p>
            <Card>
                <CardHeader title="Market Data"/>
                <CardBody>
                    <SelectBox options={[10, 25, 50, 100]}
                               value={windowSize}
                               changeHandler={handleInputChange}
                               id="windowSize"
                               label="Window Size"></SelectBox>
                    <Table>
                        <TableHead columns="No,Price,Quantity,Timestamp,Event ID"/>
                        <TableBody>
                            {
                                trades.map((ticker, index) =>
                                    <tr key={ticker.id}>
                                        <td>{index + 1}</td>
                                        <td>{ticker.price}</td>
                                        <td>{ticker.quantity}</td>
                                        <td>{ticker.timestamp}</td>
                                        <td>{ticker.id}</td>
                                    </tr>
                                )
                            }
                        </TableBody>
                    </Table>
                </CardBody>
            </Card>
        </Container>
    );
}

export default App;
