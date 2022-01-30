import {css} from "@emotion/css";
import {BUYING_FEE, SELLING_FEE} from "../../config/Configuration";
import {BUY_BUTTON_COLOR} from "../../config/ColorSheet";
import {Button} from "react-bootstrap";
import {OrderModal} from "../order/OrderModal";
import React from "react";

export enum OrderType {
    BUY, SELL
}

interface OrderButtonProps {
    orderType: OrderType ;
    setShowModal: (show: boolean) => void;
    showModal:boolean;

}

const BUTTON_CONTAINER_STYLE = css`
  width:100%;
`
const BUTTON_STYLE = css`
    background-color:${BUY_BUTTON_COLOR} !important;
    width:inherit;  
    td & {
        padding:0px;
        font-size:18px !important;
        height:32px !important;
    }
`


export function OrderButton(props: OrderButtonProps) {

    function getButtonTitle(orderType: OrderType) {
        if (orderType === OrderType.BUY)
            return "BUY"
        else
            return "SELL"
    }

    return (<div className={BUTTON_CONTAINER_STYLE}>
        <Button onClick={()=>props.setShowModal(true)} className={BUTTON_STYLE} variant={"success"}>{getButtonTitle(props.orderType)}</Button>

    </div>)
}
