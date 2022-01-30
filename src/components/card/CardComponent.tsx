import {Card} from "react-bootstrap";
import {CardLineChart} from "./CardLineChart";
import {css} from "@emotion/css";
import {useEffect, useState} from "react";
import {convertCurrency, getTypoOfCurrency} from "../../util/ConverterUtil";
import {OrderButton, OrderType} from "../button/OrderButton";

const ORDER_STYLE = css`
 display:flex;
 flex-direction:row;
 border-top:1px solid lightgray;
     justify-content: space-between;
  `

const CARD_STYLE = css`
        margin:8px 0px;
        borderRadius: 4px;
        width: 320px;
        margin-right:16px;
        &:hover {
        cursor:pointer;
      }
`

const CARD_TITLE_STYLE = css`
padding:8px;
font-weight:bold;
`

export interface CardComponentProps {
    cryptoKey: string;
    title: string;
    selectedCurrency: string;
    onClickShowDetail: (cryptoKey: string) => void
    setShowModal: (show: boolean) => void;
    showModal:boolean;
}

export function CardComponent(props: CardComponentProps) {
    const [cryptoValue, setCryptoValue] = useState<number>(0)
    const [failedOnFetch, setFailedOnFetch] = useState(false)
    const fetchCryptoPrice = async () => {
        const response: any = await fetch("https://api.blockchain.com/v3/exchange/tickers/" + props.cryptoKey + "-USD")

        if (!response.ok) {
            setFailedOnFetch(true)
            return {}
        } else {
            setFailedOnFetch(false)
            return response.json();
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            fetchCryptoPrice().then((json) => {
                setCryptoValue(convertCurrency(json.last_trade_price,props.selectedCurrency));
            })
        }, 4000);
        fetchCryptoPrice().then((json) => {
            setCryptoValue(convertCurrency(json.last_trade_price,props.selectedCurrency))
        })
        return () => clearInterval(interval);
    }, [props.selectedCurrency]);

    const title = `${props.cryptoKey}-${props.selectedCurrency}     ${cryptoValue} ${getTypoOfCurrency(props.selectedCurrency)}`;
    return failedOnFetch ? <div/> :
        <Card className={CARD_STYLE}>
            <Card.Body>
                <div onClick={() => props.onClickShowDetail(props.cryptoKey)}>
                    <div className={CARD_TITLE_STYLE}>
                        {title}
                    </div>
                    <div style={{width: 'inherit', margin: "auto", height: '100px', backgroundColor: "#ababab"}}>
                        <CardLineChart scale={"900"} showXAxis={false} showYAxis={true} selectedCurrency={props.selectedCurrency}
                                       cryptoKey={props.title}/>
                    </div>
                </div>
                <div className={ORDER_STYLE}>
                    <OrderButton showModal={props.showModal} setShowModal={props.setShowModal}  orderType={OrderType.BUY}/>
                </div>
            </Card.Body>
        </Card>
}
