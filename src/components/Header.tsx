import { Link } from "react-router-dom"
import { Store, Search, User, Heart } from "lucide-react"
import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Store size={24} />
          <span className={styles.logoText}>VShop</span>
        </Link>

        <div className={styles.searchBar}>
          <Search size={20} className={styles.searchIcon} />
          <input type="text" placeholder="Buscar produtos..." className={styles.searchInput} />
        </div>

        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            Início
          </Link>
        </nav>

        <div className={styles.userActions}>
          <button className={styles.actionBtn}>
            <Heart size={20} />
          </button>
          <button className={styles.actionBtn}>
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
