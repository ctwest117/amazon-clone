const header = document.querySelector("header");
if (!header) {
  throw new Error("Expected a <header> element in index.html");
}

export const renderHeader = (cartCount = 0) => {
  header.innerHTML = /*html*/ `
        <div class="flex min-w-full items-center justify-between h-[clamp(3.5rem,3.5rem,4rem)] bg-amazon-blue-900">
                <img id='logo' src='src/assets/amazon-logo-transparent-white.png' alt='AMAZON' class="h-[clamp(2rem,2.5rem,3rem)] min-w-20 mx-5 rounded px-5 py-1 cursor-pointer hover:-translate-y-0.5 hover:outline hover:outline-white">
            <div id='search' class="relative flex w-[clamp(25rem,60rem,62rem)] items-center justify-center px-5 py-3">
                <input id='searchbar' class="w-[80%] h-[clamp(2.5rem,2.5rem,3rem)] bg-white p-3 text-black rounded-l outline-none" type="text" placeholder="Search Amazon">
                <button class="w-12 h-[clamp(2.5rem,2.5rem,3rem)] bg-amazon-orange-faded bg-[url(src/assets/search-icon.png)] bg-center bg-size-[80%] bg-no-repeat rounded-r cursor-pointer hover:bg-amazon-orange-hover"></button>
                <ol id='search-list' class="absolute top-full max-h-fit w-[80%]">
                </ol>
            </div>
            <button type='button' id='cartBtn' class="mx-5 flex items-center justify-center rounded cursor-pointer hover:-translate-y-0.5 hover:outline hover:outline-white">
                <div id="cart-count" class="flex w-15 h-[clamp(2.5rem,2.5rem,3rem)] items-start justify-center bg-[url(src/assets/nav-sprite-cart.png)] bg-center bg-size-[80%] bg-no-repeat px-5 text-left text-amazon-orange">${cartCount}</div>
                <span class="mt-auto -translate-x-3 p-0 text-white">Cart</span>
            </button>
            
        </div>
        `;
};

export const updateCartButton = (cartCount) => {
  const cartCountElement = header.querySelector("#cart-count");
  if (cartCountElement) cartCountElement.textContent = cartCount;
};
