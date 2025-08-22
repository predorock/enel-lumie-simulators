export const priceFormatter = (price, currency = 'EUR', locale = 'it-IT') => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(price);
};
