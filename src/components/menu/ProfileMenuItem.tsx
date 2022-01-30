import {css} from "@emotion/css";
import Image from 'react-bootstrap/Image'
import {PROFILE_NAME} from "../../config/MocketProfileInformation";

interface ProfileMenuItemProps {

}

const PROFILE_ITEM_STYLE = css`
    display:flex;
    flex-direction:row;
    height:100px;
    width:100%;
    padding:8px;
`

const IMAGE_STYLE = css`
    height:80px !important;
    width:80px !important;  
`
const PROFILE_TEXT_STYLE = css`
    font-size:22px;
    color:white;
`

const PROFILE_NAME_STYLE = css`
    ${PROFILE_TEXT_STYLE}
    font-weight:bold;
`

const PROFILE_CONTAINER_STYLE = css`
    display:flex;
    flex-direction:column;
    padding:0px 16px;
`


export function ProfileMenuItem(props: ProfileMenuItemProps) {

    return <div className={PROFILE_ITEM_STYLE}>
        <Image className={IMAGE_STYLE} thumbnail={true} rounded={true}/>
        <div className={PROFILE_CONTAINER_STYLE}>
            <div className={PROFILE_TEXT_STYLE}>Welcome</div>
            <div className={PROFILE_NAME_STYLE}>{PROFILE_NAME}</div>
        </div>
    </div>
}
