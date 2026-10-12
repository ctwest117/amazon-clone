import { products } from "../data/products";
import { renderHeader } from "../header/header";
import { renderCart } from "../pages/cart";

export let cart = [];
export let cartRendered = false;

export function toggleCartRendered() {
  cartRendered = !cartRendered;
}

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

export function cartIsRendered() {
  setItem("CART-RENDERED", JSON.stringify(cartRendered));
}

export function getCartIsRendered() {
  return getItem("CART-RENDERED");
}

const savedCartRendered = getCartIsRendered();
if (savedCartRendered !== null) cartRendered = savedCartRendered;

export function subtract(id) {
  if (!id) return;
  const prod = cart.find((a) => a.id == id);
  if (prod.count > 1) {
    prod.count--;
  } else {
    cart = cart.filter((a) => a.id !== prod.id);
  }
  renderHeader();
  if (cartRendered) renderCart();
  saveCart();
  window.cart = cart;
}

export function add(id) {
  if (!id) return;
  const prod = cart.find((a) => a.id == id);
  const fromProd = products.find((a) => a.id == id);
  if (!prod) {
    cart.push(fromProd);
    cart.find((a) => a.id == id).count++;
  } else {
    prod.count++;
  }
  renderHeader();
  if (cartRendered) renderCart();
  saveCart();
  window.cart = cart;
}
