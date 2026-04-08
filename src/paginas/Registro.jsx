export default function Registro(){
    return(
        <div className="registro">
            <h1>Registro de Socios</h1>
            <p className="mb-4" style={{ color: "var(--text-muted)" }}>
                Únete a nuestra comunidad de donantes y haz una diferencia real en la vida de quienes más lo necesitan.
                Al registrarte, podrás gestionar tus donaciones, recibir reconocimientos por tus aportes, participar en iniciativas exclusivas para socios.
            </p>
            {/* RUT, Nombre completo, Correo electrónico, Contraseña, Confirmar contraseña */}
            <div className="row g-3">
                <div className="col-7">
                    <i className="bi bi-person-fill" style={{ color: "var(--accent)" }}></i>
                    <input type="text" className="form-control form-control-lg" placeholder="RUT (sin puntos ni guión)" />
                </div>
                <div className="col-7">
                    <i className="bi bi-person-fill" style={{ color: "var(--accent)" }}></i>
                    <input type="text" className="form-control form-control-lg" placeholder="Nombre completo" />
                </div>
                <div className="col-7">
                    <i className="bi bi-envelope-fill" style={{ color: "var(--accent)" }}></i>
                    <input type="email" className="form-control form-control-lg" placeholder="Correo electrónico" />
                </div>
                <div className="col-12 col-md-6">
                    <i className="bi bi-lock-fill" style={{ color: "var(--accent)" }}></i>
                    <input type="password" className="form-control form-control-lg" placeholder="Contraseña" />
                </div>
                <div className="col-12 col-md-6">
                    <i className="bi bi-lock-fill" style={{ color: "var(--accent)" }}></i>
                    <input type="password" className="form-control form-control-lg" placeholder="Confirmar contraseña" />
                </div>

                    <button className="btn btn-primary btn-lg w-100">
                        <i className="bi bi-person-plus-fill me-2"></i>Registrarse
                    </button>
                </div>
            </div>
    );
}