import "./style.css";
import { renderHeader } from "./header/header";
import { renderProducts } from "./pages/products";
import { cart, saveCart } from "./cart/cart";
import { products } from "./data/products";

// Variables
const app = document.getElementById("app");

// Event Listeners
app.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (btn) {
    const prod = products.find((a) => a.id == btn.dataset.id);
    if (!prod) return;
    if (cart.some((item) => item.id === prod.id)) {
      prod.count++;
    } else {
      prod.count = 1;
      cart.push(prod);
    }
    const added = setTimeout(() => {
      btn.innerText = "Add to Cart";
    }, 700);
    added;
    btn.innerText = "Added!";
    console.log(cart);
    renderHeader();
  }
});

window.addEventListener("beforeunload", saveCart());
renderProducts();
renderHeader();
