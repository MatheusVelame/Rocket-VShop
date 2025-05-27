import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "../styles/Orders.module.css"
import { ArrowLeft } from "lucide-react"

interface Pedido {
  id: string
  items: {
    name: string
    price: number
    quantity: number
  }[]
  total: number
  date?: string
}

export default function Pedidos() {
  const [orders, setOrders] = useState<Pedido[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("orders")
    if (stored) setOrders(JSON.parse(stored))
  }, [])

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        <ArrowLeft size={16} /> Voltar para a loja
      </Link>

      <div className={styles.ordersContainer}>
        {orders.length === 0 ? (
          <div className={styles.emptyOrders}>
            <h2>Você ainda não fez nenhum pedido</h2>
          </div>
        ) : (
          <>
            <h2>Meus Pedidos</h2>
            {orders.map((order) => (
              <div key={order.id} className={styles.orderCard}>
                <h3>Pedido #{order.id}</h3>
                <p><strong>Data da compra:</strong> {order.date ?? "Desconhecida"}</p>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.quantity}x {item.name} - R$ {(item.price * item.quantity).toFixed(2)}
                    </li>
                  ))}
                </ul>
                <strong>Total: R$ {order.total.toFixed(2)}</strong>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
} 
