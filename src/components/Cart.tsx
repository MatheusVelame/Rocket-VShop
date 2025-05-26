"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import { useCart } from "../context/CartContext"
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag, CheckCircle } from "lucide-react"
import styles from "../styles/Cart.module.css"

export default function Cart() {
  const { cart, removeFromCart, addToCart, clearCart, total } = useCart()
  const [purchaseComplete, setPurchaseComplete] = useState(false)

  const handleCheckout = () => {
    setPurchaseComplete(true)
    clearCart()
  }

  if (cart.length === 0 && !purchaseComplete) {
    return (
      <div className={styles.emptyCart}>
        <ShoppingBag className={styles.emptyIcon} />
        <h2>Seu carrinho está vazio</h2>
        <p>Adicione alguns produtos para começar suas compras!</p>
      </div>
    )
  }

  if (purchaseComplete) {
    return (
      <div className={styles.emptyCart}>
        <CheckCircle className={styles.successIcon} />
        <h2>Compra realizada com sucesso!</h2>
        <p>Obrigado por comprar com a gente.</p>
        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={16} />
          Voltar para loja
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <h2>Carrinho de Compras</h2>
        <span className={styles.itemCount}>
          {cart.length} {cart.length === 1 ? "item" : "itens"}
        </span>
      </div>

      <div className={styles.cartItems}>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.itemInfo}>
              <h3 className={styles.itemName}>{item.name}</h3>
              <p className={styles.itemPrice}>R$ {item.price.toFixed(2)}</p>
            </div>

            <div className={styles.quantityControls}>
              <button
                className={styles.quantityBtn}
                onClick={() => removeFromCart(item.id)}
                aria-label="Diminuir quantidade"
              >
                <Minus size={16} />
              </button>
              <span className={styles.quantity}>{item.quantity}</span>
              <button className={styles.quantityBtn} onClick={() => addToCart(item)} aria-label="Aumentar quantidade">
                <Plus size={16} />
              </button>
            </div>

            <div className={styles.itemTotal}>
              <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cartFooter}>
        <div className={styles.totalSection}>
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total:</span>
            <span className={styles.totalAmount}>R$ {total.toFixed(2)}</span>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button className={styles.clearBtn} onClick={clearCart}>
            <Trash2 size={16} />
            Limpar Carrinho
          </button>
          <button className={styles.checkoutBtn} onClick={handleCheckout}>
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  )
}
