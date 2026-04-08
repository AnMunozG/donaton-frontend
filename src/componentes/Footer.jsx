import { Link } from "react-router-dom";
import { DonatonLogo } from "./Logos.jsx";

export default function Footer() {
    return (
        <footer className="py-5 border-top" style={{ backgroundColor: '#F5F3F0' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <Link to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <DonatonLogo variante="pequeño" />
                        </Link>
                        <p style={{ color: '#194B4F' }}>
                            Conectando corazones para apoyar a quienes más lo necesitan. Tu aporte hace la diferencia en nuestra comunidad.
                        </p>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5 className="fw-bold" style={{ color: '#DD4444' }}>Navegación</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0" style={{ color: '#194B4F' }}>Inicio</Link></li>
                            <li className="nav-item mb-2"><Link to="/nosotros" className="nav-link p-0" style={{ color: '#194B4F' }}>Acerca de nosotros</Link></li>
                            <li className="nav-item mb-2"><Link to="/centros" className="nav-link p-0" style={{ color: '#194B4F' }}>Nuestros centros</Link></li>
                            <li className="nav-item mb-2"><Link to="/necesidades" className="nav-link p-0" style={{ color: '#194B4F' }}>Necesidades</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3 mb-3">
                        <h5 className="fw-bold" style={{ color: '#DD4444' }}>Contacto</h5>
                        <ul className="nav flex-column" style={{ color: '#194B4F' }}>
                            <li className="mb-2"><i className="bi bi-geo-alt-fill me-2" style={{ color: '#3AB795' }}></i>Antonio Varas 666, Providencia, Región Metropolitana</li>
                            <li className="mb-2"><i className="bi bi-telephone-fill me-2" style={{ color: '#3AB795' }}></i>+56 9 1234 5678</li>
                            <li className="mb-2"><i className="bi bi-envelope-fill me-2" style={{ color: '#3AB795' }}></i>contacto@donaton.cl</li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h5 className="fw-bold" style={{ color: '#DD4444' }}>Síguenos</h5>
                        <div className="d-flex gap-3 fs-4">
                            <a href="#" style={{ color: '#3AB795', textDecoration: 'none' }}><i className="bi bi-facebook"></i></a>
                            <a href="#" style={{ color: '#3AB795', textDecoration: 'none' }}><i className="bi bi-instagram"></i></a>
                            <a href="#" style={{ color: '#3AB795', textDecoration: 'none' }}><i className="bi bi-twitter-x"></i></a>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4" style={{ borderTop: '1px solid #F48080' }}>
                    <p style={{ color: '#194B4F' }}>© 2026 <a href="https://www.duoc.cl" target="_blank" rel="noopener noreferrer">Duoc UC</a>, Org. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}