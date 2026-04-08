var cuentas=[
    { rut: "123456789", password: "admin" },
    { rut: "987654321", password: "user" },]

function ingresar(){
    var rut = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

    var cuentaValida = cuentas.some(cuenta => cuenta.rut === rut && cuenta.password === password);
    if(cuentaValida){
        window.location.href = "/dashboard";
    }
    else{
        alert("RUT o contraseña incorrectos");
    }
}
export default function Login(){
    return(
        <div className="login">
            <h1>Iniciar sesión</h1>
            <p className="mb-4" style={{ color: "var(--text-muted)" }}>
                Accede a tu cuenta para gestionar tus donaciones y ver el impacto de tu generosidad.
            </p>
            <div className="row g-3">
                <div className="col-12 col-md-12">
                    <input type="text" className="form-control form-control-lg" placeholder="RUT (sin puntos ni guión)" />
                </div>
                <div className="col-12 col-md-12">
                    <input type="password" className="form-control form-control-lg" placeholder="Contraseña" />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary btn-lg w-100" onClick={ingresar}>
                        <i className="bi bi-box-arrow-in-right me-2"></i>Iniciar sesión
                    </button>
                </div>
            </div>
        </div>
    );
}