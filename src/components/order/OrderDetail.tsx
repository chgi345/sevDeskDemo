import {OrderType} from "../button/OrderButton";
import {getPriceByOrderType} from "../../util/OrderUtil";
import {css} from "@emotion/css";

const ORDER_CONTAINER_STYLE = css`
    display:flex;
    flex-direction:column;
        padding:32px;


`

const ORDER_STYLE = css`
    display:flex;
    flex-direction:column;
`
const INC_DEC_STYLE = css`
width:36px;
height:inherit;
color:#111;
font-weight:bold;
`

interface OrderDetailProps {
    cryptoKey: string;
    cryptoValue: number;
    orderType: OrderType;
}

export function OrderDetail(props: OrderDetailProps) {

    const title = `${props.orderType === OrderType.BUY ? "BUY" : "SELL"} ${props.cryptoKey}`
    const cryptoValue = getPriceByOrderType(props.orderType, props.cryptoValue);
    return (<div className={ORDER_CONTAINER_STYLE}>
        <div className={ORDER_STYLE}>
            <div>{title}</div>
            <div style={{fontWeight: "bold"}}>{cryptoValue}</div>
        </div>
        <div style={{display: "flex", flexDirection: "row", padding: "16px"}}>
            <div>Amount</div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <input></input>
            </div>
        </div>

    </div>)

}