"use client"

import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { ShoppingCart, Eye } from "lucide-react"
import type { Product } from "../types/Product"
import styles from "../styles/ProductCard.module.css"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={`/placeholder.svg?height=200&width=200`} alt={product.name} className={styles.image} />
        <div className={styles.overlay}>
          <Link to={`/product/${product.id}`} className={styles.viewBtn}>
            <Eye size={16} />
            Ver detalhes
          </Link>
        </div>
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>R$ {product.price.toFixed(2)}</p>

        <button className={styles.addToCartBtn} onClick={() => addToCart(product)}>
          <ShoppingCart size={16} />
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
