export default function Registro(){
    return(
        <div className="registro">
            <h1>Registro de Socios</h1>
            <p className="mb-4" style={{ color: "var(--text-muted)" }}>
                Únete a nuestra comunidad de donantes y haz una diferencia real en la vida de quienes más lo necesitan.
            </p>
            <div className="row g-3">
                <div className="col-12 col-md-6">
                    <input type="text" className="form-control form-control-lg" placeholder="Nombre completo" />
                </div>
                <div className="col-12 col-md-6">
                    <input type="email" className="form-control form-control-lg" placeholder="Correo electrónico" />
                </div>
                <div className="col-12 col-md-6">
                    <input type="password" className="form-control form-control-lg" placeholder="Contraseña" />
                </div>
                <div className="col-12 col-md-6">
                    <input type="password" className="form-control form-control-lg" placeholder="Confirmar contraseña" />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary btn-lg w-100">
                        <i className="bi bi-person-plus-fill me-2"></i>Registrarse
                    </button>
                </div>
            </div>
        </div>
    );
}