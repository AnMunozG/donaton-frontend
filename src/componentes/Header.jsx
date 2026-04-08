import { Link } from "react-router-dom";
import { DonatonLogo } from "./Logos.jsx";

export default function Header() {
  return (
    <header>
      {/* Logo */}
      <Link to="/" className="logo-link">
        <DonatonLogo variante="pequeño" />
      </Link>

      {/* Navegación */}
      <nav>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/nosotros" className="nav-link">Acerca de Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link to="/centros" className="nav-link">Nuestros Centros</Link>
          </li>
          <li className="nav-item">
            <Link to="/necesidades" className="nav-link">Necesidades</Link>
          </li>
        </ul>

        {/* Botones de acción */}
        <div className="header-actions">
          <Link to="/donacion" className="btn btn-outline-accent">
            <i className="bi bi-heart-fill me-1"></i>Donar
          </Link>
          <Link to="/registro" className="btn btn-primary">
            Hacerse socio
          </Link>
          <Link to="/login" className="btn btn-outline-secondary">
            Iniciar sesión
          </Link>
        </div>
      </nav>
    </header>
  );
}