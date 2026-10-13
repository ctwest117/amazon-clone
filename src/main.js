import "./style.css";
import { renderHeader } from "./header/header";
import { renderProducts } from "./pages/products";
import {
  loadCart,
  cartRendered,
  setCartRendered,
  subtract,
  add,
  remove,
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
    remove(btn.dataset.id);
    return;
  }
  if (btn.dataset.action == "subtract") {
    subtract(btn.dataset.id);
    return;
  }
  if (btn.dataset.action == "add") {
    add(btn.dataset.id);
    btn.innerText = "Added!";
    setTimeout(() => {
      if (btn.isConnected) {
        btn.innerText = cartRendered ? "+" : "Add to Cart";
      }
    }, 700);
    return;
  }
  if (btn.dataset.action == "checkout") {
    event.preventDefault();
    renderCheckout();
    return;
  }
});

export function addListener() {
  const cartBtn = document.getElementById("cartBtn");
  cartBtn.addEventListener("click", () => {
    // console.log(cartBtn);
    const showCart = !cartRendered;
    if (showCart) {
      renderCart();
    } else {
      renderProducts();
    }
    setCartRendered(showCart);
  });
  const logoBtn = document.getElementById("logo");
  logoBtn.addEventListener("click", () => {
    setCartRendered(false);
    window.location.href = "./index.html";
  });

  const searchInput = document.getElementById("searchbar");
  const searchList = document.getElementById("search-list");
  if (!searchInput || !searchList) {
    throw new Error("Expected the search input and search list in the header");
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest("#search")) {
      searchList.innerHTML = "";
    }
  });

  searchList.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const suggestionButton = event.target.closest("button[data-id]");
    if (!suggestionButton) return;
    add(suggestionButton.dataset.id);
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
      <li class="flex w-full justify-between border-b border-b-amazon-gray-100 bg-white px-5">
        <button type='button' data-id="${product.id}" class="h-20 cursor-pointer hover:text-amazon-orange">${product.name}</button>
        <span class="flex items-center text-red-700">Price: ${formatPrice(product.price)}</span>
      </li>
    `;
      })
      .join("");
  });
}
if (localStorage.getItem("CART-KEYS")) loadCart();
renderHeader(cart.reduce((total, product) => total + product.count, 0));
addListener();
if (cartRendered) {
  renderCart();
} else {
  renderProducts();
}
