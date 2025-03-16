import { NavLink } from 'react-router-dom';
import styles from '../style/Navbar.module.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Fizjoterapia</NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName={styles.active}>Strona Główna</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/o-mnie" activeClassName={styles.active}>O mnie</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/uslugi" activeClassName={styles.active}>Usługi</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/kontakt" activeClassName={styles.active}>Kontakt</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-primary" to="/rezerwacja">Umów wizytę</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
