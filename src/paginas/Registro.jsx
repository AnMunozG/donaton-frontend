import { useState } from "react";

export default function Registro() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <div className="registro d-flex justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 300px)" }}>
      <div className="row g-0 align-items-center" style={{ maxWidth: 1000, width: "100%" }}>

        {/* IMAGEN */}
        <div className="col-md-5 d-none d-md-block">
          <div className="img-placeholder rounded-4" style={{ backgroundImage: "url(https://www.chile.gob.cl/yakarta/site/artic/20241007/imag/foto_0000000220241007120604/Fiestas_Patrias.jpeg)" }}></div>
        </div>

        {/* FORMULARIO */}
        <div className="col-md-7">
          <div className="text-center mb-4">
            <h1 className="fw-bold mb-1 c-heading">Registro de Socios</h1>

            <p className="c-muted">Únete a nuestra comunidad de donantes y haz la diferencia.</p>
          </div>

          <div className="p-4 rounded-4 mx-auto card-surface" style={{ maxWidth: 500 }}>
            {enviado && (
              <div className="alert alert-success d-flex align-items-center gap-2 small py-2">
                <i className="bi bi-check-circle-fill"></i>¡Registro exitoso! Bienvenido a Donatón.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label fw-semibold small">RUT (sin puntos ni guión)</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                    <input type="text" className="form-control" placeholder="123456789" required />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Nombre completo</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                    <input type="text" className="form-control" placeholder="Juan Pérez" required />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Correo electrónico</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                    <input type="email" className="form-control" placeholder="correo@ejemplo.cl" required />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Contraseña</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                    <input type="password" className="form-control" placeholder="Mínimo 8 caracteres" required />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Confirmar contraseña</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                    <input type="password" className="form-control" placeholder="Repite la contraseña" required />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="terms" required />
                    <label className="form-check-label small c-muted" htmlFor="terms">
                      Acepto los <a href="#" style={{ color: "var(--primary)" }}>términos y condiciones</a>.
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                <i className="bi bi-person-plus-fill me-2"></i>Registrarse
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
