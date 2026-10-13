import { products } from "../data/products";
import { formatPrice } from "../utils/currency";

const app = document.getElementById("app");

export function renderProducts() {
  app.innerHTML = /*html*/ `<div id="container" class="m-10 grid w-[calc(100% - 2.5rem)] grid-cols-3 gap-5 gap-y-8 h-[calc(100% - 2.5rem)] md:grid-cols-4 lg:grid-cols-5"></div>`;
  const container = document.getElementById("container");
  container.innerHTML = products
    .map(
      (product) => /*html*/ `
    <div data-id='${product.id}' class="flex w-auto min-h-fit flex-col items-center justify-around gap-4 py-5 rounded-2xl bg-amazon-gray-100 lg:h-100">
        <img src=${product.image} alt="${product.name}" class='aspect-square h-[50%] w-auto'>
        <h2 class="font-bold">${formatPrice(product.price)}</h2>
        <h1 class="cursor-pointer text-left text-lg text-amazon-blue-600 hover:text-amazon-orange">${product.name}</h1>
        <button id='addBtn' type='button' data-action='add' data-id='${product.id}' class='mt-auto h-10 w-[80%] cursor-pointer rounded-full bg-amazon-yellow hover:bg-amazon-orange-faded'>Add to Cart</button>
    </div>
`,
    )
    .join("");
}
