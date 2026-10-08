import { products } from "../data/products"

const app = document.getElementById('app')

export function renderProducts(){
    app.innerHTML = /*html*/`<div id="container" class="w-full h-full grid grid-cols-3 grid-rows-2"></div>`
    const container = document.getElementById('container')
    container.innerHTML = products.map(product => /*html*/`
    <div class="flex flex-col justify-center items-center w-auto h-60">
        <img src=${product.image} alt="${product.name}" class='w-auto h-[50%] aspect-square'>
        <h1>${product.name}</h1>
    </div>
`).join('')}