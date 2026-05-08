import { useState, useEffect } from "react";
import { getTiposRecurso, getUnidadesPorTipo, getCamposPorTipo, getCentros } from "../api.js";
import RichTextEditor from "../componentes/RichTextEditor";

export default function Donacion() {
  const [tiposRecurso, setTiposRecurso] = useState([]);
  const [unidadesPorTipo, setUnidadesPorTipo] = useState({});
  const [camposPorTipo, setCamposPorTipo] = useState({});
  const [centros, setCentros] = useState([]);

  const [form, setForm] = useState({
    tipo: "", cantidad: "", unidad: "", origen: "", tipoOrigen: "persona",
    centroId: "", notas: "", detalles: {},
  });
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    getTiposRecurso().then(setTiposRecurso);
    getUnidadesPorTipo().then(setUnidadesPorTipo);
    getCamposPorTipo().then(setCamposPorTipo);
    getCentros().then(setCentros);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleTipoChange = (e) => {
    const nuevoTipo = e.target.value;
    const unidades = unidadesPorTipo[nuevoTipo] || [];
    setForm({ ...form, tipo: nuevoTipo, unidad: unidades[0] || "", detalles: {} });
  };

  const handleDetalleChange = (name, value) => {
    setForm({ ...form, detalles: { ...form.detalles, [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setForm({ tipo: "", cantidad: "", unidad: "", origen: "", tipoOrigen: "persona", centroId: "", notas: "", detalles: {} });
  };

  const unidadesDisponibles = unidadesPorTipo[form.tipo] || [];
  const camposAdicionales = camposPorTipo[form.tipo] || [];

  return (
    <div className="donacion">

      {/* HEADER */}
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 gap-3">
        <div>
          <h1 className="fw-bold mb-1">Gestión de Donaciones</h1>

          <p className="m-0 c-muted">Registra tu donación y haz seguimiento del flujo completo.</p>
        </div>

        <span className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill"
          style={{ background: "rgba(221,68,68,0.1)", color: "var(--primary)", fontSize: "0.78rem", fontWeight: 600, border: "1px solid rgba(221,68,68,0.2)" }}>
          <i className="bi bi-gift-fill"></i>
          {tiposRecurso.length} tipos de recurso
        </span>
      </div>

      <div className="row g-4">

        {/* FORMULARIO */}
        <div className="col-12 col-lg-7">
          <div className="p-4 rounded-4 card-surface">
            <h2 className="fw-bold mb-3 fs-5 c-heading">
              <i className="bi bi-gift-fill me-2 c-primary"></i>
              Nueva donación
            </h2>

            {enviado && (
              <div className="alert alert-success d-flex align-items-center gap-2 small py-2">
                <i className="bi bi-check-circle-fill"></i>
                ¡Donación registrada exitosamente!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Tipo de donante</label>
                  <select name="tipoOrigen" className="form-select" value={form.tipoOrigen} onChange={handleChange}>
                    <option value="persona">Persona particular</option>
                    <option value="empresa">Empresa</option>
                    <option value="municipalidad">Municipalidad</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold small">RUT (sin puntos ni guion)</label>
                  <input type="text" name="origen" className="form-control" placeholder="123456789" value={form.origen} onChange={handleChange} required />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Tipo de recurso</label>
                  <select name="tipo" className="form-select" value={form.tipo} onChange={handleTipoChange} required>
                    <option value="">Selecciona un tipo...</option>
                    {tiposRecurso.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Cantidad</label>
                  <div className="input-group">
                    <input type="number" name="cantidad" className="form-control" placeholder="Ej: 10" min="1" value={form.cantidad} onChange={handleChange} required />
                    <select name="unidad" className="form-select" style={{ maxWidth: 110 }} value={form.unidad} onChange={handleChange} disabled={!form.tipo}>
                      {unidadesDisponibles.map((u) => <option key={u} value={u}>{u}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Campos adicionales */}
              {camposAdicionales.length > 0 && (
                <div className="mt-3 p-3 rounded-3 bg-page b-card">
                  <h3 className="fs-6 fw-bold mb-2 c-heading">
                    <i className="bi bi-info-circle-fill me-2 c-primary"></i>
                    Detalles adicionales
                  </h3>

                  <div className="row g-2">
                    {camposAdicionales.map((campo) => (
                      <div key={campo.name} className="col-md-6">
                        <label className="form-label fw-semibold small">{campo.label}</label>

                        {campo.type === "select" ? (
                          <select className="form-select form-select-sm" value={form.detalles[campo.name] || ""} onChange={(e) => handleDetalleChange(campo.name, e.target.value)}>
                            <option value="">Selecciona...</option>
                            {campo.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                          </select>
                        ) : campo.type === "textarea" ? (
                          <RichTextEditor content={form.detalles[campo.name] || ""} onChange={(value) => handleDetalleChange(campo.name, value)} placeholder={`Escribe ${campo.label.toLowerCase()}...`} />
                        ) : (
                          <input type={campo.type === "date" ? "date" : "text"} className="form-control form-control-sm" placeholder={campo.placeholder || ""} value={form.detalles[campo.name] || ""} onChange={(e) => handleDetalleChange(campo.name, e.target.value)} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Centro destino */}
              <div className="mt-3">
                <label className="form-label fw-semibold small">Centro de acopio destino</label>
                <select name="centroId" className="form-select" value={form.centroId} onChange={handleChange} required>
                  <option value="">Selecciona un centro...</option>
                  {centros.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.nombre} — {c.region}
                      {c.estado === "Capacidad crítica" ? " ⚠️ Capacidad crítica" : ""}
                    </option>
                  ))}
                </select>

                {form.centroId && (() => {
                  const centro = centros.find((c) => c.id === form.centroId);
                  if (!centro) return null;
                  const pct = Math.round((centro.capacidadUsada / centro.capacidadTotal) * 100);
                  const color = pct >= 85 ? "#DD4444" : pct >= 60 ? "#FFC107" : "#3AB795";
                  return (
                    <div className="mt-2 small p-2 rounded-3 bg-page b-card">
                      <i className="bi bi-geo-alt-fill me-1 c-accent"></i>
                      {centro.direccion}

                      <div className="mt-1 d-flex align-items-center gap-2">
                        <div className="progress flex-grow-1" style={{ height: 6 }}>
                          <div className="progress-bar" style={{ width: `${pct}%`, background: color, borderRadius: 99 }}></div>
                        </div>
                        <span className="c-muted">{pct}% ocupado</span>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Notas */}
              <div className="mt-3">
                <label className="form-label fw-semibold small">Observaciones</label>
                <RichTextEditor content={form.notas} onChange={(value) => setForm({ ...form, notas: value })} placeholder="Escribe observaciones adicionales..." />
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                <i className="bi bi-send-fill me-2"></i>Registrar donación
              </button>
            </form>
          </div>
        </div>

        {/* IMAGEN LATERAL */}
        <div className="col-12 col-lg-5">
          <div className="img-placeholder rounded-4" style={{ backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/618ac2f3b0b4d00cad7be26b/ff8cb020-626b-4e28-bd2a-b1bdd61799c2/FOTO+SOCIOS+ABCHILE+DONACIONES.png)" }}></div>
        </div>

      </div>
    </div>
  );
}
