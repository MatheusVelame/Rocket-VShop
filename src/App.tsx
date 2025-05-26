import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./components/Cart"
import CartSummary from "./components/CartSummary"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./globals.css"

export default function App() {
  return (
    <div className="app">
      <Header />
      <CartSummary />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
