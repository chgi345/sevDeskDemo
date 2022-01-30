import {css} from "@emotion/css";
import logo from "../../images/logo_large.png";
import {ProfileMenuItem} from "../menu/ProfileMenuItem";
import {PRIMARY_COLOR} from "../../config/ColorSheet";
import {BaseProps} from "../../App";
import {MenuSection} from "../menu/MenuSection";

const SIDEBAR_STYLE = css`
    height: 100%;
    display: flex;
    flex: 1;
    background-color: ${PRIMARY_COLOR};
    font-size: 24px;
    flex-direction:column;
`

const LOGO_STYLE = css`
    width:inherit;
    height:60px;   
    margin-left:32px;
`
export function NavigationSideBar(props: BaseProps) {

    return <div className={SIDEBAR_STYLE}>
        <div>
            <img className={LOGO_STYLE} src={logo} alt="image"/>
        </div>
        <ProfileMenuItem/>
        <MenuSection  route={props.route} changeRoute={props.changeRoute}/>

    </div>

}
