import "./style.css";
import { renderHeader } from "./header/header";
import { renderProducts } from "./pages/products";
import { cart, loadCart, saveCart } from "./cart/cart";
import { products } from "./data/products";

// Variables
const app = document.getElementById("app");

// Event Listeners

app.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  const card = btn.closest("div");
  if (btn) {
    const prod = products.find((a) => a.id == card.dataset.id);
    if (!prod) return;
    if (cart.some((item) => item.id === prod.id)) {
      prod.count++;
      console.log(prod);
    } else {
      prod.count = 1;
      cart.push(prod);
    }
    const added = setTimeout(() => {
      btn.innerText = "Add to Cart";
    }, 700);
    added;
    btn.innerText = "Added!";
    renderHeader();
  }
});

// window.addEventListener("beforeunload", saveCart());

if (localStorage.getItem("CART-KEYS")) loadCart();
renderProducts();
renderHeader();
