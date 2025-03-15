import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Fizjoterapia</Link>
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
              <Link className="nav-link" to="/">Strona Główna</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/o-mnie">O mnie</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/uslugi">Usługi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/opinie">Opinie</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kontakt">Kontakt</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary" to="/rezerwacja">Umów wizytę</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
