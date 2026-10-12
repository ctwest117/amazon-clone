import { cart } from "../cart/cart";
import { app } from "../main";
import { formatPrice } from "../utils/currency";

export function renderCart() {
  const totalItems = cart.reduce((t, v) => t + v.count, 0);
  app.innerHTML = /*html*/ `
    <div class="flex justify-center items-start min-h-full w-full gap-5 bg-amazon-gray-200">
        <div id='cart-card' class='w-[65%] h-fit mt-30 bg-white'>
            <h1 class="min-h-fit w-[80%] ml-10 text-4xl lg:text-5xl border-b border-b-gray-200 px-5 py-10 ">Shopping Cart</h1>
            <ol id="shopping-cart" class='min-h-fit w-[80%] pb-5 ml-10 flex flex-col gap-5'><li class='border-b border-b-gray-200 py-10'>Cart is Empty</li></ol>
        </div>
        <div id="total-card" class='sticky top-30 w-[30%] min-h-30 mt-30 bg-white'>
            <p class='p-10 text-xl' >${totalItems} items in Cart</p>
        </div>
    </div>
  `;
  const shoppingCard = document.getElementById("shopping-cart");
  const totalCart = document.getElementById("total-card");
  if (cart.length > 0) {
    shoppingCard.innerHTML = cart
      .map((product) => {
        return /*html*/ `
                <li class="flex border-b border-gray-200 py-10 h-60 w-full">
                    <img src="${product.image}" class='h-full w-auto aspect-square mr-10'>
                    <div class="flex flex-col flex-1 justify-between">
                      <div class='flex justify-between'>
                        <h1>${product.name}</h1>
                        <span>${formatPrice(product.count * product.price)}</span>
                      </div>
                      <div class="text-amazon-blue-600">${formatPrice(product.price)} each</div>
                      <div class="flex gap-5">
                        <div class="flex justify-between w-fit font-bold rounded-2xl border-amazon-yellow border-2 ">
                          <button type='button' data-id="${product.id}" data-action="subtract" class="cursor-pointer hover:text-amazon-orange hover:bg-amazon-gray-200 px-3 m-0 rounded-full">${product.count > 1 ? "-" : "&#10005;"}</button>
                          <p class="px-3">${product.count}</p>
                          <button type='button' data-id="${product.id}" data-action="add" class="cursor-pointer hover:text-amazon-orange hover:bg-amazon-gray-200 px-3 m-0 rounded-full">+</button>
                        </div>
                        <button type='button' data-id="${product.id}" data-action="delete" class="cursor-pointer hover:text-red-500 hover:bg-amazon-gray-200 px-3 m-0 rounded-full" >Delete</button>
                        </div>
                    </div>
                </li>
            `;
      })
      .join("");
    const totalCost = cart.reduce((t, v) => t + v.price * v.count, 0);

    totalCart.innerHTML = /*html*/ `
      <p class='p-10 text-xl'>${totalItems} items in Cart: <span class='text-orange-600'>${formatPrice(totalCost)}</span></p>
      <button type='button' data-action='checkout' class='h-12 w-[50%] my-5 px-3 translate-x-[50%] bg-amazon-yellow hover:bg-amazon-orange-faded cursor-pointer rounded-full'>Proceed to Checkout</button>
      `;
  }
}
