import { app } from "../main";
import { cart } from "../cart/cart";
import { formatPrice } from "../utils/currency";

export function renderCheckout() {
  const totalItems = cart.reduce((total, product) => total + product.count, 0);
  const totalCost = cart.reduce(
    (total, product) => total + product.price * product.count,
    0,
  );

  app.innerHTML = /*html*/ `
    <div class="min-h-full w-full bg-amazon-gray-200 py-10">
      <div class="mx-auto flex w-[90%] max-w-6xl flex-col items-start gap-5 md:flex-row">
        <section class="w-full bg-white p-8 md:w-[65%]">
          <h1 class="mb-8 border-b border-gray-200 pb-5 text-4xl">Checkout</h1>
          <form class="flex flex-col gap-5">
            <h2 class="text-2xl">Shipping address</h2>
            <label class="flex flex-col gap-2">
              Full name
              <input name="name" type="text" autocomplete="name" required class="h-11 rounded border border-gray-400 px-3">
            </label>
            <label class="flex flex-col gap-2">
              Address
              <input name="address" type="text" autocomplete="street-address" required class="h-11 rounded border border-gray-400 px-3">
            </label>
            <div class="flex flex-col gap-5 sm:flex-row">
              <label class="flex flex-1 flex-col gap-2">
                City
                <input name="city" type="text" autocomplete="address-level2" required class="h-11 rounded border border-gray-400 px-3">
              </label>
              <label class="flex flex-1 flex-col gap-2">
                ZIP code
                <input name="postalCode" type="text" autocomplete="postal-code" required class="h-11 rounded border border-gray-400 px-3">
              </label>
            </div>
            <button type="submit" class="mt-3 h-12 rounded-full bg-amazon-yellow hover:bg-amazon-orange-faded cursor-pointer">
              Place your order
            </button>
          </form>
        </section>
        <aside class="w-full bg-white p-8 md:w-[35%]">
          <h2 class="mb-5 border-b border-gray-200 pb-4 text-2xl">Order summary</h2>
          <p class="mb-3">${totalItems} items</p>
          <p class="text-xl">Order total: <span class="text-orange-600">${formatPrice(totalCost)}</span></p>
        </aside>
      </div>
    </div>
  `;
}
