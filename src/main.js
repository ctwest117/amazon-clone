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
  cart,
} from "./cart/cart";
import { products } from "./data/products";
import { renderCart } from "./pages/cart";
import { formatPrice } from "./utils/currency";
import { renderCheckout } from "./pages/checkout";

// Variables
export const app = document.getElementById("app");

// Event Listeners

app.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;

  if (btn.dataset.action == "delete") {
    const item = cart.find((a) => a.id == btn.dataset.id);
    item.count = 0;
    subtract(btn.dataset.id);
    return;
  }
  if (btn.dataset.action == "subtract") {
    subtract(btn.dataset.id);
    return;
  }
  if (btn.dataset.action == "add") {
    add(btn.dataset.id);
    const added = setTimeout(() => {
      btn.innerText = cartRendered ? "+" : "Add to Cart";
    }, 700);
    added;
    btn.innerText = "Added!";
    return;
  }
  if (btn.dataset.action == "checkout") {
    renderCheckout();
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

  const searchInput = document.getElementById("searchbar");
  const searchList = document.getElementById("search-list");
  searchList.addEventListener("click", (event) => {
    const btn = event.target.closest("BUTTON");
    add(btn.dataset.id);
  });
  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.trim().toLowerCase();
    const matches = products.filter((product) =>
      product.name.toLowerCase().includes(query),
    );
    if (query.length < 1) {
      searchList.innerHTML = "";
      return;
    }

    searchList.innerHTML = matches
      .map((product) => {
        return /* html */ `
      <li class="w-full flex justify-between bg-white border-b border-b-amazon-gray-100 px-5"><button type='button' data-id="${product.id}" class="h-20 cursor-pointer hover:text-amazon-orange">${product.name}<button><span class="text-red-700">Price: ${formatPrice(product.price)}</span></li>
    `;
      })
      .join("");
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
