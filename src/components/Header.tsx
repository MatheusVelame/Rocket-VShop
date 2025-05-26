import { Link, useNavigate } from "react-router-dom"
import { Search, Heart } from "lucide-react"
import { useState } from "react"
import styles from "../styles/Header.module.css"
import logoImg from '../images/Vlogo.png';

export default function Header() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/buscar?query=${encodeURIComponent(query)}`)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={logoImg} alt="Logo VShop" className={styles.logoImage} />
            <span className={styles.logoText}>VShop</span>
          </div>
        </Link>

        <form onSubmit={handleSearch} className={styles.searchBar}>
          <Search size={20} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className={styles.searchInput}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            Início
          </Link>
          <Link to="/about" className={styles.navLink}>
            Sobre Nós
          </Link>
        </nav>

        <div className={styles.userActions}>
          <button className={styles.actionBtn}>
            <Heart size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
