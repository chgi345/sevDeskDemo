import {PortfolioInformation} from "../components/pages/Portfolio";

export const PROFILE_NAME: string = "Chris"
export const DATE_OF_REGISTRATIONS: number = 1433479433787


//price default given in dollar

export const MOCK_PORTFOLIO: PortfolioInformation = {
    cryptoPortfolio: [
        {
            cryptoKey: "BTC",
            amountOfShares: 23.421,
            priceOfShares: 142345.32,
            dateOfPurchase: "1543479433787"
        }, {
            cryptoKey: "BTC",
            amountOfShares: 67.76,
            priceOfShares: 42069.32,
            dateOfPurchase: "1443479433787"
        }, {
            cryptoKey: "DOGE",
            amountOfShares: 1342.3,
            priceOfShares: 1.32,
            dateOfPurchase: "1493479433787"
        }, {
            cryptoKey: "LTC",
            amountOfShares: 1342.3,
            priceOfShares: 14953.32,
            dateOfPurchase: "1643479433787"
        }
    ]
}
