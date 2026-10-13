import { cart } from "../cart/cart";
import { app } from "../main";
import { formatPrice } from "../utils/currency";

export function renderCart() {
  const totalItems = cart.reduce((t, v) => t + v.count, 0);
  app.innerHTML = /*html*/ `
    <div class="flex min-h-full w-full items-start justify-center gap-5 bg-amazon-gray-200">
        <div id='cart-card' class='mt-30 h-fit w-[65%] bg-white'>
            <h1 class="ml-10 min-h-fit w-[80%] border-b border-b-gray-200 px-5 py-10 text-4xl lg:text-5xl">Shopping Cart</h1>
            <ol id="shopping-cart" class='ml-10 flex min-h-fit w-[80%] flex-col gap-5 pb-5'><li class='border-b border-b-gray-200 py-10'>Cart is Empty</li></ol>
        </div>
        <div id="total-card" class='sticky top-30 mt-30 min-h-30 w-[30%] bg-white'>
            <p class='p-10 text-xl'>${totalItems} items in Cart</p>
        </div>
    </div>
  `;
  const shoppingCard = document.getElementById("shopping-cart");
  const totalCart = document.getElementById("total-card");
  if (cart.length > 0) {
    shoppingCard.innerHTML = cart
      .map((product) => {
        return /*html*/ `
                <li class="flex h-60 w-full border-b border-gray-200 py-10">
                        <img src="${product.image}" alt="${product.name}" class='mr-10 aspect-square h-full w-auto'>
                    <div class="flex flex-1 flex-col justify-between">
                      <div class='flex justify-between'>
                        <p>${product.name}</p>
                        <span>${formatPrice(product.count * product.price)}</span>
                      </div>
                      <div class="text-amazon-blue-600">${formatPrice(product.price)} each</div>
                      <div class="flex gap-5">
                        <div class="flex w-fit justify-between rounded-2xl border-2 border-amazon-yellow font-bold">
                          <button type='button' data-id="${product.id}" data-action="subtract" class="m-0 cursor-pointer rounded-full px-3 hover:bg-amazon-gray-200 hover:text-amazon-orange">${product.count > 1 ? "-" : "&#10005;"}</button>
                          <p class="px-3">${product.count}</p>
                          <button type='button' data-id="${product.id}" data-action="add" class="m-0 cursor-pointer rounded-full px-3 hover:bg-amazon-gray-200 hover:text-amazon-orange">+</button>
                        </div>
                        <button type='button' data-id="${product.id}" data-action="delete" class="m-0 cursor-pointer rounded-full px-3 hover:bg-amazon-gray-200 hover:text-red-500">Delete</button>
                        </div>
                    </div>
                </li>
            `;
      })
      .join("");
    const totalCost = cart.reduce((t, v) => t + v.price * v.count, 0);

    totalCart.innerHTML = /*html*/ `
      <p class='p-10 text-xl'>${totalItems} items in Cart: <span class='text-orange-600'>${formatPrice(totalCost)}</span></p>
      <button type='button' data-action='checkout' class='my-5 h-12 w-[50%] translate-x-[50%] cursor-pointer rounded-full bg-amazon-yellow px-3 hover:bg-amazon-orange-faded'>Proceed to Checkout</button>
      `;
  }
}
