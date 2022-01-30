import {CardComponent} from "../card/CardComponent";
import {css} from "@emotion/css";
import React, {useState} from "react";
import {CryptoDetailChart} from "./CryptoDetailChart";
import {CRYPTO_KEYS} from "../../config/Configuration";
import {ContentNavigationBar} from "../navigation/ContentNavigationBar";


interface CryptoOverviewProps {
    selectedCurrency: string
    setSelectedCurrency: (value: string) => void;
    setShowModal: (show: boolean) => void;
    showModal:boolean;
}

const CRYPTO_DETAIL_STYLE = css`
    display: flex;
    flex-direction: column;
`

const CRYPTO_CONTENT_STYLE = css`
    margin:16px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`

export function CryptoOverview(props: CryptoOverviewProps) {
    const [cryptoDetail, setCryptoDetail] = useState("")
    function resetDetailRoute() {
        setCryptoDetail("")
    }

    function onClickShowDetail(cryptoKey: string) {
        setCryptoDetail(cryptoKey);
    }

    const content = cryptoDetail === "" ? (
        CRYPTO_KEYS.map(cryptoKey => <CardComponent
            showModal={props.showModal}
            setShowModal={props.setShowModal}
            onClickShowDetail={onClickShowDetail} key={cryptoKey}
            cryptoKey={cryptoKey} title={cryptoKey}
            selectedCurrency={props.selectedCurrency}/>)
    ) : <CryptoDetailChart cryptoKey={cryptoDetail}/>

    return (<div className={CRYPTO_DETAIL_STYLE}>
        <ContentNavigationBar onPressBack={resetDetailRoute} onCurrencyChange={props.setSelectedCurrency}
                              showBackButton={cryptoDetail != ""}/>
        <div className={CRYPTO_CONTENT_STYLE}>
            {content}
        </div>
    </div>)
}
