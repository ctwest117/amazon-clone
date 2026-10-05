export const cart = []

function setItem(key,value){
    localStorage.setItem(key,value)
}

export function saveCart() {
    setItem('CART-KEYS', JSON.stringify(cart))
}

