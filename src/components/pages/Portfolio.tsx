import {Table} from "react-bootstrap";
import moment from "moment";
import {OrderButton, OrderType} from "../button/OrderButton";
import {BaseProps} from "../../App";

export interface PortfolioCrypto {
    cryptoKey: string;
    amountOfShares: number;
    priceOfShares: number;
    dateOfPurchase: string;
}

export interface PortfolioInformation {
    cryptoPortfolio: PortfolioCrypto[]
}


export function Portfolio(props: BaseProps) {
    const cryptoPortfolio: PortfolioCrypto[] = props.portfolio.cryptoPortfolio

    function createTableRow() {
        return cryptoPortfolio.map(order => (<tr>
            <td>{order.cryptoKey}</td>
            <td>{order.amountOfShares}</td>
            <td>{moment(order.dateOfPurchase, "x").format("DD MMM YYYY")}</td>
            <td>{order.priceOfShares}</td>
            <td>{order.amountOfShares * 1.4}</td>
            <td><OrderButton showModal={props.showModal} orderType={OrderType.BUY}
                             setShowModal={() => props.setShowModal(true)}/></td>
            <td><OrderButton showModal={props.showModal} orderType={OrderType.SELL}
                             setShowModal={() => props.setShowModal(true)}/></td>
        </tr>))
    }

    return <div>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Market</th>
                <th>Units</th>
                <th>Opened at</th>
                <th>Profit</th>
                <th>Value</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {createTableRow()}
            </tbody>
        </Table>
    </div>
}
