import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DonatonLogo } from "./Logos.jsx";

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <nav className="navbar navbar-expand-md w-100">
        <Link to="/" className="navbar-brand logo-link">
          <DonatonLogo variante="pequeño" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarContent"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse${menuOpen ? " show" : ""}`} id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to="/" className={`nav-link${pathname === "/" ? " active" : ""}`}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nosotros" className={`nav-link${pathname === "/nosotros" ? " active" : ""}`}>
                Acerca de Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/centros" className={`nav-link${pathname === "/centros" ? " active" : ""}`}>
                Nuestros Centros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/necesidades" className={`nav-link${pathname === "/necesidades" ? " active" : ""}`}>
                Necesidades
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/transparencia" className={`nav-link${pathname === "/transparencia" ? " active" : ""}`}>
                Transparencia
              </Link>
            </li>
          </ul>

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
        </div>
      </nav>
    </header>
  );
}
