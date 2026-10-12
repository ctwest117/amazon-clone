import "./style.css";
import { renderHeader } from "./header/header";
import { renderProducts } from "./pages/products";
import {
  loadCart,
  cartRendered,
  cartIsRendered,
  subtract,
  add,
  toggleCartRendered,
  saveCart,
} from "./cart/cart";
import { products } from "./data/products";
import { renderCart } from "./pages/cart";

// Variables
export const app = document.getElementById("app");

// Event Listeners

app.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;

  if (btn.dataset.action == "subtract") {
    console.log(btn.dataset.id, btn.dataset.action);
    subtract(btn.dataset.id);
    return;
  }
  if (btn.dataset.action == "add") {
    console.log(btn.dataset.id, btn.dataset.action);
    add(btn.dataset.id);
    const added = setTimeout(() => {
      btn.innerText = cartRendered ? "+" : "Add to Cart";
    }, 700);
    added;
    btn.innerText = "Added!";
    return;
  }
});

export function addListener() {
  const cartBtn = document.getElementById("cartBtn");
  cartBtn.addEventListener("click", () => {
    // console.log(cartBtn);
    if (cartRendered) {
      renderProducts();
    } else {
      renderCart();
    }
    toggleCartRendered();
    cartIsRendered();
  });
  const logoBtn = document.getElementById("logo");
  logoBtn.addEventListener("click", () => {
    if (cartRendered) toggleCartRendered();
    cartIsRendered();
    window.location.href = "./index.html";
  });
}

if (localStorage.getItem("CART-KEYS")) loadCart();
renderHeader();
if (cartRendered) {
  renderCart();
} else {
  renderProducts();
}
window.products = products;
console.log(cartRendered);
