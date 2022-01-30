import {BUYING_FEE, SELLING_FEE} from "../config/Configuration";
import {OrderType} from "../components/button/OrderButton";

export function getPriceByOrderType(orderType: OrderType, cryptoValue:number) {
    if (orderType === OrderType.BUY)
        return cryptoValue * BUYING_FEE
    else
        return cryptoValue * SELLING_FEE
}