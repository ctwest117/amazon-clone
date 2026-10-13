import { products } from "../data/products";
import { updateCartButton } from "../header/header";
import { renderCart } from "../pages/cart";

export let cart = [];
export let cartRendered = false;

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

export function setCartRendered(isRendered) {
  cartRendered = isRendered;
  setItem("CART-RENDERED", JSON.stringify(cartRendered));
}

try {
  const savedCartRendered = JSON.parse(localStorage.getItem("CART-RENDERED"));
  if (typeof savedCartRendered === "boolean") {
    cartRendered = savedCartRendered;
  }
} catch {
  cartRendered = false;
}

function refreshCartButton() {
  updateCartButton(cart.reduce((total, product) => total + product.count, 0));
}

function parseProductId(id) {
  if (id === null || id === undefined || String(id).trim() === "") return null;
  const productId = Number(id);
  return Number.isInteger(productId) ? productId : null;
}

export function subtract(id) {
  const productId = parseProductId(id);
  if (productId === null) return;
  const prod = cart.find((item) => item.id === productId);
  if (!prod) return;

  if (prod.count > 1) {
    prod.count--;
  } else {
    cart = cart.filter((item) => item.id !== prod.id);
  }
  refreshCartButton();
  if (cartRendered) renderCart();
  saveCart();
}

export function remove(id) {
  const productId = parseProductId(id);
  if (productId === null) return;
  const productExists = cart.some((item) => item.id === productId);
  if (!productExists) return;

  cart = cart.filter((item) => item.id !== productId);
  refreshCartButton();
  if (cartRendered) renderCart();
  saveCart();
}

export function add(id) {
  const productId = parseProductId(id);
  if (productId === null) return;
  const prod = cart.find((item) => item.id === productId);
  const fromProd = products.find((item) => item.id === productId);
  if (!fromProd) return;

  if (!prod) {
    cart.push({ ...fromProd, count: 1 });
  } else {
    prod.count++;
  }
  refreshCartButton();
  if (cartRendered) renderCart();
  saveCart();
}
