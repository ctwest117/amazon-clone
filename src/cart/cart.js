export let cart = [];

function setItem(key, value) {
  localStorage.setItem(key, value);
}

function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function saveCart() {
  setItem("CART-KEYS", JSON.stringify(cart));
}

export function loadCart() {
  cart = getItem("CART-KEYS");
}
