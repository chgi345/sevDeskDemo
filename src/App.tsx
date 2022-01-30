import React, {useEffect, useState} from 'react';
import './App.css';
import {MOCK_PORTFOLIO} from "./config/MocketProfileInformation";
import {PortfolioInformation} from "./components/pages/Portfolio";
import {NavigationSideBar} from "./components/navigation/NavigationSideBar";
import {ContentViewer} from "./components/pages/ContentViewer";
import {css} from "@emotion/css";
import {OrderModal} from "./components/order/OrderModal";
import {DASHBOARD_VIEW_ID} from "./config/Configuration";

const MAIN = css`
width:100%;
height:100%;
display:flex;
flex-direction: row;
`

export interface BaseProps {
    setShowModal: (show: boolean) => void;
    showModal: boolean;
    currency: string;
    route: string;
    portfolio: PortfolioInformation;
    setPortfolioInformation: (portfolioInformation: PortfolioInformation) => void
    setCurrency: (currency: string) => void;
    changeRoute: (route: string) => void
    onPressBack: () => void;
}

function App() {
    const [showModal, setShowModal] = useState(false)
    const [currency, setCurrency] = useState("USD")
    const [portfolio, setPortfolio] = useState(
        localStorage.getItem('portfolio') || JSON.stringify(MOCK_PORTFOLIO)
    );
    useEffect(() => {
        localStorage.setItem('portfolio', portfolio);
    }, [portfolio]);

    const [route, setRoute] = useState(DASHBOARD_VIEW_ID)

    const resetRoute = () => setRoute(DASHBOARD_VIEW_ID)

    function getPortfolioInformation(portfolioInformation: string): PortfolioInformation {
        return JSON.parse(portfolioInformation) as PortfolioInformation
    }

    const onChangePortfolio = (portfolioInformation: PortfolioInformation) => setPortfolio(JSON.stringify(portfolioInformation));

    function curchange(currency: string) {
        setCurrency(currency)
    }

    const baseProps: BaseProps = {
        portfolio: getPortfolioInformation(portfolio),
        route: route,
        currency: currency,
        setPortfolioInformation: onChangePortfolio,
        setShowModal: setShowModal,
        setCurrency: curchange,
        changeRoute: setRoute,
        onPressBack: resetRoute,
        showModal: showModal
    }
    return (
        <div className={MAIN}>
            <NavigationSideBar {...baseProps}/>
            <ContentViewer {...baseProps}/>
            <OrderModal showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )


}

export default App;
