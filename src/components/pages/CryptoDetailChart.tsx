import {css} from "@emotion/css";
import {CardLineChart} from "../card/CardLineChart";
import {useState} from "react";
import Form from "react-bootstrap/Form";
import {Table} from "react-bootstrap";
import moment from "moment";

interface CryptoDetailChartProps {
    cryptoKey: string;
}

const DETAIL_STYLE = css`
display:flex;
flex-direction:column;
flex:auto;
`

const CHART_CONTAINER_STYLE = css`

    width:inherit;
    height:500px;
    margin :24px;
`

const CHART_INFORMATION_STYLE = css`
display:flex;
flex-direction:column;
flex:auto;
margin:32px;
Table &{
border:none
}
`

export function CryptoDetailChart(props: CryptoDetailChartProps) {

    const [scale, setScale] = useState("900")

    return (
        <div className={DETAIL_STYLE}>
            <Form.Control as="select" onChange={(event) => setScale(event.target.value)}>
                <option key={900} value={900}>1 Day</option>
                <option key={3600} value={3600}>7 Days</option>
                <option key={7200} value={7200}>30 Days</option>
            </Form.Control>
            <div className={CHART_CONTAINER_STYLE}>
                <CardLineChart scale={scale} showXAxis={true} showYAxis={true} selectedCurrency={"USD"}
                               cryptoKey={props.cryptoKey}/>
            </div>
            <div className={CHART_INFORMATION_STYLE}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Marketcap</th>
                        <th>24h transactions</th>
                        <th>Hashrate</th>
                        <th>Difficulty</th>
                    </tr>
                    </thead>
                    <tbody>
                    <td>222</td>
                    <td>22222</td>
                    <td>22424</td>
                    <td>67456</td>
                    </tbody>
                </Table>
            </div>
        </div>)
}
