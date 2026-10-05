import { cart } from "../cart/cart"
const header = document.querySelector('header')

export const renderHeader = () => {
    header.innerHTML = /*html*/`
        <div class="flex justify-between items-center h-[clamp(3.5rem,3.5rem,4rem)] min-w-full bg-amazon-blue-900">
            <a href='../../index.html'>
                <img src='src/assets/amazon-logo-transparent-white.png' alt='AMAZON' class="h-[clamp(2.5rem,2.5rem,3rem)] py-1 px-5 mx-5  hover:outline-2 hover:outline-white hover:-translate-y-1 cursor-pointer">
            </a>
            <div id='search' class="flex justify-center items-center py-3 px-5 w-[clamp(25rem,60rem,62rem)]">
                <input class="w-[80%] h-[clamp(2.5rem,2.5rem,3rem)] bg-white text-black p-1 rounded-l" type="text" placeholder="Search Amazon">
                <button class="bg-amazon-orange-faded h-[clamp(2.5rem,2.5rem,3rem)] w-10 bg-[url(src/assets/search-icon.png)] bg-center bg-size-[80%] bg-no-repeat rounded-r cursor-pointer"></button>
            </div>
            <button type='button' class="flex justify-center items-center mx-5 hover:outline-2 hover:outline-white cursor-pointer">
                <div class="flex justify-center items-start h-[clamp(2.5rem,2.5rem,3rem)] w-20 bg-[url(src/assets/nav-sprite-cart.png)] bg-no-repeat bg-center bg-size-[80%] text-amazon-orange">${cart.length}</div>
                <span class="text-white pr-5 mt-auto">cart</span>
            </button>
            
        </div>
    `
}