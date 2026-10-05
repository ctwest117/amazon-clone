const currencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

export function formatPrice(cents){
    return currencyFormat.format(cents / 100);
} 