import Container from "./component/common/container";
import CardHeader from "./component/common/card-header";
import CardBody from "./component/common/card-body";
import Card from "./component/common/card";
import SelectBox from "./component/common/select-box";
import {useState} from "react";
import Table from "./component/common/table";
import TableHead from "./component/common/table-head";
import TableBody from "./component/common/table-body";

function App() {
  const [marketData, setMarketData] = useState({
    "windowSize": 25,
    "tickers": []
  });
  function handleInputChange(event){
    const newMarketData = {...marketData};
    newMarketData.windowSize = Number(event.target.value);
    setMarketData(newMarketData);
  }

  return (
    <Container>
      <p></p>
      <Card>
          <CardHeader title="Market Data" />
          <CardBody>
              <SelectBox options={[10,25,50,100]}
                         value={marketData.windowSize}
                         changeHandler={handleInputChange}
                         id="windowSize"
                         label="Window Size"></SelectBox>
              <Table>
                <TableHead columns="No,Price,Quantity,Timestamp,Event ID" />
                <TableBody>
                  {
                    marketData.tickers.map( (ticker,index) =>
                      <tr key={ticker.id}>
                        <td>{index+1}</td>
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
