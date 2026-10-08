import './style.css'
import { renderHeader } from './header/header'
import { renderProducts } from './pages/products'
import './cart/cart'

// Variables 
const app = document.getElementById('app')

renderProducts()
renderHeader()
