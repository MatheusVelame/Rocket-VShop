import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./components/Cart"
import CartSummary from "./components/CartSummary"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Buscar from "./pages/Buscar"
import AboutUs from "./pages/AboutUs"
import Pedidos from "./pages/Pedidos"
import "./globals.css"

export default function App() {
  return (
    <div className="app">
      <Header />
      <CartSummary />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
