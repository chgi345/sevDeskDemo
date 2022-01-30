import {css} from "@emotion/css";
import {SECONDARY_LIGHT_COLOR} from "../../config/ColorSheet";
import {IoIosArrowBack} from "react-icons/io";
import Form from 'react-bootstrap/Form'
import {AVAILABLE_CURRENCIES} from "../../config/Configuration";

const CONTENT_NAVIGATION_STYLE = css`
height:64px;
border-bottom:2px solid #efefef;
width:100%;
flex-direction:row;
    display:flex;
`


const BACK_BUTTON_STYLE = css`
    padding-top: 8px;
    font-size: 28px;
    padding-left:16px;
    width: 140px;
    height: 100%;
    border-right: 1px solid  #efefef;
color${SECONDARY_LIGHT_COLOR};
&:hover{
    cursor:pointer;
}
`

const DROPDOWN_STYLE = css`
width:180px;
align-items: center;
flex-direction:row;
    display:flex;
`


interface ContentNavigationBarProps {
    showBackButton: boolean;
    onCurrencyChange: (currency: string) => void
    onPressBack:()=>void;
}

export function ContentNavigationBar(props: ContentNavigationBarProps) {
    const backButton = props.showBackButton ? <div onClick={props.onPressBack} className={BACK_BUTTON_STYLE}><IoIosArrowBack/> Back</div> : <div/>
    return <div className={CONTENT_NAVIGATION_STYLE}>
        {backButton}
        <div className={DROPDOWN_STYLE}>
            <span style={{margin:"0px 8px"}}>Currency:</span>
            <Form.Control as="select" onChange={(event)=>props.onCurrencyChange(event.target.value)}>
                {AVAILABLE_CURRENCIES.map(currency => <option key={currency}
                                                              value={currency}>{currency}</option>)}
            </Form.Control>
        </div>
    </div>
}
