import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { ShoppingCart } from "lucide-react"
import styles from "../styles/CartSummary.module.css"

export default function CartSummary() {
  const { cart } = useCart()

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Link to="/cart" className={styles.cartSummary}>
      <div className={styles.cartIcon}>
        <ShoppingCart size={20} />
        {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
      </div>
      <span className={styles.cartText}>Carrinho</span>
    </Link>
  )
}
