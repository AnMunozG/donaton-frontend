import { Link } from "react-router-dom";
import { DonatonLogo } from "./Logos.jsx";

export default function Header(){
    return(
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3" style={{ backgroundColor: '#F5F3F0', borderBottom: '2px solid #F48080' }}>
            <div className="col-md-3 mb-2 mb-md-0 ms-md-auto">
                <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                    <DonatonLogo variante="pequeño" />
                </Link>
            </div>
            <nav className="navbar d-flex align-items-center justify-content-center flex-grow-1 flex-wrap gap-3">
                <ul className="navbar-nav flex-row justify-content-center mb-2 mb-md-0">
                    <li className="nav-item"><Link to="/" className="nav-link px-2 link-secondary">Inicio</Link></li>
                    <li className="nav-item"><Link to="/nosotros" className="nav-link px-2 link-secondary">Acerca de Nosotros</Link></li>
                    <li className="nav-item"><Link to="/centros" className="nav-link px-2 link-secondary">Nuestros Centros</Link></li>
                    <li className="nav-item"><Link to="/necesidades" className="nav-link px-2 link-secondary">Necesidades</Link></li>
                </ul>
                <div className="d-flex gap-2 flex-nowrap ms-md-4 mt-2 mt-md-0">
                    <Link to="/donacion" className="btn btn-outline-accent">Donar</Link>
                    <Link to="/registro" className="btn btn-primary">Hacerse socio</Link>
                    <Link to="/login" className="btn btn-outline-secondary">Iniciar sesión</Link>
                </div>
            </nav>
        </header>
    );
}