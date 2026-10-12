import { cart, add } from "../cart/cart";
import { addListener } from "../main";

const header = document.querySelector("header");

export const renderHeader = () => {
  header.innerHTML = /*html*/ `
        <div class="flex justify-between items-center h-[clamp(3.5rem,3.5rem,4rem)] min-w-full bg-amazon-blue-900">
                <img id='logo' src='src/assets/amazon-logo-transparent-white.png' alt='AMAZON' class="h-[clamp(2rem,2.5rem,3rem)] min-w-20 py-1 px-5 mx-5  hover:outline rounded hover:outline-white hover:-translate-y-0.5 cursor-pointer">
            <div id='search' class="relative flex justify-center items-center py-3 px-5 w-[clamp(25rem,60rem,62rem)]">
                <input id='searchbar' class="w-[80%] h-[clamp(2.5rem,2.5rem,3rem)] bg-white text-black p-3 rounded-l outline-none" type="text" placeholder="Search Amazon">
                <button class="bg-amazon-orange-faded h-[clamp(2.5rem,2.5rem,3rem)] w-12 bg-[url(src/assets/search-icon.png)] bg-center bg-size-[80%] bg-no-repeat rounded-r hover:bg-amazon-orange-hover cursor-pointer"></button>
                <ol id='search-list' class="absolute w-[80%] max-h-fit top-full">
                </ol>
            </div>
            <button type='button' id='cartBtn' class="flex justify-center items-center mx-5 hover:outline rounded hover:outline-white cursor-pointer hover:-translate-y-0.5">
                <div class="flex justify-center items-start px-5 h-[clamp(2.5rem,2.5rem,3rem)] w-15 bg-[url(src/assets/nav-sprite-cart.png)] bg-no-repeat bg-center bg-size-[80%] text-amazon-orange text-left">${cart.reduce((t, v) => t + v.count, 0)}</div>
                <span class="text-white p-0 mt-auto -translate-x-3">Cart</span>
            </button>
            
        </div>
        `;
  addListener();
};
