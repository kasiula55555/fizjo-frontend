import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from '../style/Navbar.module.css';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Zamykamy menu po kliknięciu
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navbar}`}>
      <div className="container">
        <Link className={`navbar-brand ${styles['navbar-brand']}`} to="/" onClick={closeMenu}>
          Fizjoterapia
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div 
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} ${isMenuOpen ? styles['menu-enter'] : ''}`} 
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={closeMenu}>
                Strona Główna
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/o-mnie' ? 'active' : ''}`} to="/o-mnie" onClick={closeMenu}>
                O mnie
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/uslugi' ? 'active' : ''}`} to="/uslugi" onClick={closeMenu}>
                Usługi
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/opinie' ? 'active' : ''}`} to="/opinie" onClick={closeMenu}>
                Opinie
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/kontakt' ? 'active' : ''}`} to="/kontakt" onClick={closeMenu}>
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary" to="/rezerwacja" onClick={closeMenu}>
                Umów wizytę
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
