import {MenuItem} from "../components/menu/MenuItem";
import {BiHelpCircle, BiLineChart, BiLogOut, BiPieChartAlt2} from 'react-icons/bi';
import {FaRegNewspaper} from "react-icons/fa";
import {FiSettings} from "react-icons/fi";

interface CryptoListItem {
    cryptoId: string
}

export const CRYPTO_KEYS: string[] = ["BTC", "ETH", "LTC",  "BCH"]

export const AVAILABLE_CURRENCIES: string[] = ["USD", "EUR", "GPD", "NZD", "AUD"]
export const DEFAULT_CURRENCY: string = "USD"

export const BUYING_FEE = 1.015;
export const SELLING_FEE = 0.989;

export const DASHBOARD_VIEW_ID = "Dashboard"
export const PORTFOLIO_VIEW_ID = "Portfolio"
export const NEWS_VIEW_ID = "Crypto News"
export const SETTINGS_VIEW_ID = "Settings"
export const HELP_VIEW_ID = "Help"
export const LOGOUT_VIEW_ID = "Logout"


export const UPPER_MENU_ITEMS: MenuItem[] = [
    {title: DASHBOARD_VIEW_ID, icon: <BiLineChart/>},
    {title: PORTFOLIO_VIEW_ID, icon: <BiPieChartAlt2/>},
    {title: NEWS_VIEW_ID, icon: <FaRegNewspaper/>}
]
export const LOWER_MENU_ITEMS: MenuItem[] = [
    {title: SETTINGS_VIEW_ID, icon: <FiSettings/>},
    {title: HELP_VIEW_ID, icon: <BiHelpCircle/>},
    {title: LOGOUT_VIEW_ID, icon: <BiLogOut/>}]
