import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as apiLogin } from "../api.js";
import { useAuth } from "../componentes/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = await apiLogin(rut, password);
      login(user.rut);
      navigate("/dashboard");
    } catch (err) {
      setError("RUT o contraseña incorrectos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login d-flex justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 300px)" }}>
      <div className="row g-0 align-items-center" style={{ maxWidth: 900, width: "100%" }}>

        {/* IMAGEN */}
        <div className="col-md-5 d-none d-md-block">
          <div className="img-placeholder rounded-4" style={{ backgroundImage: "url(src/assets/login.png)" }}></div>
        </div>

        {/* FORMULARIO */}
        <div className="col-md-7">
          <div className="text-center mb-4">
            <h1 className="fw-bold mb-1 c-heading">Iniciar sesión</h1>

            <p className="c-muted">Accede a tu cuenta para gestionar tus donaciones.</p>
          </div>

          <div className="p-4 rounded-4 mx-auto card-surface" style={{ maxWidth: 420 }}>
            {error && (
              <div className="alert alert-danger d-flex align-items-center gap-2 small py-2">
                <i className="bi bi-exclamation-circle-fill"></i>{error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold small">RUT (sin puntos ni guión)</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                  <input type="text" className="form-control" placeholder="123456789" value={rut} onChange={(e) => setRut(e.target.value)} required />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold small">Contraseña</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                  <input type="password" className="form-control" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                <i className="bi bi-box-arrow-in-right me-2"></i>{loading ? "Validando..." : "Iniciar sesión"}
              </button>
            </form>

            <div className="text-center mt-3">
              <small className="c-muted">
                ¿No tienes cuenta? <a href="/registro" className="c-primary" style={{ fontWeight: 600 }}>Regístrate aquí</a>
              </small>
            </div>

            <div className="text-center mt-2 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
              <small className="c-muted">
                <strong className="c-heading">Prueba:</strong> RUT 123456789 / Pass admin
              </small>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
