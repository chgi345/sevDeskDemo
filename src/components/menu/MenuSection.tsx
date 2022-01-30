import {LOWER_MENU_ITEMS, UPPER_MENU_ITEMS} from "../../config/Configuration";
import {css} from "@emotion/css";
import {PRIMARY_LIGHT_COLOR, SECONDARY_COLOR} from "../../config/ColorSheet";


const MENU_ITEM_STYLE = css`
    height: 48px;
    align-items: center;
    margin: 0px 8px;
    color:white;
    padding: 8px;
    flex-direction:row;
    display:flex;
    cursor:pointer;
    &:hover {
        background-color:${PRIMARY_LIGHT_COLOR};
    }
  
`

const LOWER_MENU_STYLE = css`
justify-self: flex-end;
`

const ICON_CONTAINER_STYLE = css`
    margin-right: 8px;
    margin-bottom: 8px;
`

const MENU_SECTION_STYLE = css`
    margin:16px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

`
const SELECTED_MENU_ITEM = css`
    height: 48px;
    align-items: center;
    margin: 0px 8px;
    color:white;
    padding: 8px;
    flex-direction:row;
    display:flex;
    background-color:${SECONDARY_COLOR};
     &:hover {
        background-color:${SECONDARY_COLOR};
        cursor:pointer;
      }
`

interface MenuSectionProps{
    changeRoute:(route:string)=>void;
    route:string
}

export function MenuSection(props:MenuSectionProps){
    return (<div className={MENU_SECTION_STYLE}>
        <div>
            {UPPER_MENU_ITEMS.map((item) => (
                <div onClick={() => props.changeRoute(item.title)} key={item.title}

                     className={ item.title === props.route ? SELECTED_MENU_ITEM : MENU_ITEM_STYLE}>
                    <div className={ICON_CONTAINER_STYLE}>{item.icon}</div>
                    <div>{item.title}</div>
                </div>))}
        </div>
        <div className={LOWER_MENU_STYLE}>
            {LOWER_MENU_ITEMS.map((item) => (<div onClick={() => props.changeRoute(item.title)} key={item.title}
                                                  className={item.title === props.route ? SELECTED_MENU_ITEM : MENU_ITEM_STYLE}>
                <div
                    className={ICON_CONTAINER_STYLE}>{item.icon}</div>
                <div>{item.title}</div>
            </div>))}
        </div>
    </div>)
}