import { products } from "../data/products";
import { formatPrice } from "../utils/currency";

const app = document.getElementById("app");

export function renderProducts() {
  app.innerHTML = /*html*/ `<div id="container" class="w-[calc(100% - 2.5rem)] h-[calc(100% - 2.5rem)] m-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-8"></div>`;
  const container = document.getElementById("container");
  container.innerHTML = products
    .map(
      (product) => /*html*/ `
    <div data-id='${product.id}' class="flex flex-col justify-around items-center w-auto lg:h-100 min-h-fit bg-amazon-gray-100 gap-4 py-5 rounded-2xl">
        <img src=${product.image} alt="${product.name}" class='w-auto h-[50%] aspect-square'>
        <h2 class="font-bold">${formatPrice(product.price)}</h2>
        <h1 class="text-amazon-blue-600 hover:text-amazon-orange cursor-pointer text-lg  text-left">${product.name}</h1>
        <button id='addBtn' type='button' data-action='add' data-id='${product.id}' class='w-[80%] h-10 mt-auto rounded-full bg-amazon-yellow hover:bg-amazon-orange-faded cursor-pointer'>Add to Cart</button>
    </div>
`,
    )
    .join("");
}
