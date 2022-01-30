export function getTypoOfCurrency(currency: string) {
    switch (currency) {
        case "USD":
        case "NZD":
        case "AUD":
            return "$";
        case "EUR":
            return "€";
        default:
            return "";
    }
}

export function convertCurrency(cryptoValue: number, currency: string): number {
    switch (currency) {
        case "GPB":
            return cryptoValue * 0.75;
        case "EUR":
            return cryptoValue * 0.90;
        case "NZD":
            return cryptoValue * 1.53;
        case "AUD":
            return cryptoValue * 1.43;
        default:
            return cryptoValue;
    }
}

export function getStartOfScale(scale: string): string {
    switch (scale) {
        case "900":
            return "1643410800"
        case "3600":
            return "1642892400"
        case "7200":
            return "1640905200"
        default:
            return "1643410800"
    }
}
