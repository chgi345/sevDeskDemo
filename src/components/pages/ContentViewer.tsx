import React from "react";
import {css} from "@emotion/css";
import {CryptoOverview} from "./CryptoOverview";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    DASHBOARD_VIEW_ID,
    HELP_VIEW_ID,
    LOGOUT_VIEW_ID,
    NEWS_VIEW_ID,
    PORTFOLIO_VIEW_ID,
    SETTINGS_VIEW_ID
} from "../../config/Configuration";
import {Dashboard} from "./Dashboard";
import {Portfolio} from "./Portfolio";
import {NewsFeed} from "./NewsFeed";
import {Settings} from "./Settings";
import {Help} from "./Help";
import {BaseProps} from "../../App";

const CONTENT_DETAILS = css`
    
    `
const CONTENT_CONTAINER = css`
    flex: 6;
     display:flex;
     flex-direction:column;
      background-color: #ffffff;
    `


export function ContentViewer(props: BaseProps) {


    function contentByRoute() {
        switch (props.route) {
            case DASHBOARD_VIEW_ID:
                return <CryptoOverview
                    showModal={props.showModal}
                    setShowModal={props.setShowModal}
                    setSelectedCurrency={props.setCurrency}
                    selectedCurrency={props.currency}/>
            case PORTFOLIO_VIEW_ID:
                return <Portfolio {...props}/>
            case NEWS_VIEW_ID:
                return <NewsFeed/>
            case SETTINGS_VIEW_ID:
                return <Settings/>
            case HELP_VIEW_ID:
                return <Help/>
            case LOGOUT_VIEW_ID:
                return <div/>
            default:
                return <Dashboard/>

        }
    }

    return (
        <div className={CONTENT_CONTAINER}>

            <div className={CONTENT_DETAILS}>
                {contentByRoute()}
            </div>
        </div>
    )
}
