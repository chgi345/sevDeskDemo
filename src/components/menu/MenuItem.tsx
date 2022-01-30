import {css} from "@emotion/css";
import {FaChartLine} from "react-icons/all";
import {IconType} from "react-icons";

export interface MenuItem{
    icon:JSX.Element
    title:string
}

const MENU_ITEM_STYLE= css`
    display:flex;
    flex-direction:row;
`

export function Menu(menuItems:MenuItem[])
{
    return menuItems.map((item)=>( <div key={item.title} className={MENU_ITEM_STYLE}> {item.icon} <div>{item.title}</div></div>))

}
