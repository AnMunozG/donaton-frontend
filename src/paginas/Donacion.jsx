import { useState } from "react";

const centros = [
  "Centro de Acopio Santiago Centro",
  "Centro de Acopio Puente Alto",
  "Centro de Acopio Maipú",
  "Centro de Acopio Valparaíso",
  "Centro de Acopio Concepción",
];

const tiposRecurso = [
  "Alimentos no perecibles",
  "Insumos médicos",
  "Artículos de higiene",
  "Ropa y abrigo",
  "Utensilios del hogar",
  "Monetaria",
];

const donacionesEjemplo = [
  { id: "DON-001", tipo: "Alimentos no perecibles", cantidad: "50 kg", origen: "Empresa Sodimac", centro: "Santiago Centro", fecha: "2026-04-01", estado: "Entregado" },
  { id: "DON-002", tipo: "Ropa y abrigo", cantidad: "3 cajas", origen: "Municipalidad de Maipú", centro: "Maipú", fecha: "2026-04-03", estado: "En tránsito" },
  { id: "DON-003", tipo: "Insumos médicos", cantidad: "20 unidades", origen: "Persona particular", centro: "Puente Alto", fecha: "2026-04-05", estado: "En acopio" },
];

const estadoColor = { "Entregado": "success", "En tránsito": "warning", "En acopio": "info" };

export default function Donacion() {
  const [form, setForm] = useState({ tipo: "", cantidad: "", unidad: "kg", origen: "", tipoOrigen: "persona", centro: "", fecha: "", notas: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setForm({ tipo: "", cantidad: "", unidad: "kg", origen: "", tipoOrigen: "persona", centro: "", fecha: "", notas: "" });
  };

  return (
    <div className="donacion">
      <h1>Gestión de Donaciones</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        Registra tu donación y haz seguimiento del flujo completo desde el origen hasta la entrega final.
      </p>

      <div className="row g-4">
        {/* Formulario */}
        <div className="col-12 col-lg-5">
          <div className="p-4 rounded-4" style={{ border: "1.5px solid var(--border)", background: "var(--surface)" }}>
            <h2 className="fw-bold mb-3 fs-5">
              <i className="bi bi-gift-fill me-2" style={{ color: "var(--primary)" }}></i>
              Nueva donación
            </h2>

            {enviado && (
              <div className="alert alert-success d-flex align-items-center gap-2" role="alert">
                <i className="bi bi-check-circle-fill"></i>
                ¡Donación registrada exitosamente! Te notificaremos cuando sea asignada a un centro.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Tipo de donante</label>
                <select name="tipoOrigen" className="form-select" value={form.tipoOrigen} onChange={handleChange}>
                  <option value="persona">Persona particular</option>
                  <option value="empresa">Empresa</option>
                  <option value="municipalidad">Municipalidad</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nombre / Razón social</label>
                <input type="text" name="origen" className="form-control" placeholder="Ej: Juan Pérez o Empresa XYZ" value={form.origen} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Tipo de recurso</label>
                <select name="tipo" className="form-select" value={form.tipo} onChange={handleChange} required>
                  <option value="">Selecciona un tipo...</option>
                  {tiposRecurso.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Cantidad</label>
                <div className="input-group">
                  <input type="number" name="cantidad" className="form-control" placeholder="Ej: 25" min="1" value={form.cantidad} onChange={handleChange} required />
                  <select name="unidad" className="form-select" style={{ maxWidth: 100 }} value={form.unidad} onChange={handleChange}>
                    <option value="kg">kg</option>
                    <option value="unidades">unidades</option>
                    <option value="cajas">cajas</option>
                    <option value="litros">litros</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Centro de acopio destino</label>
                <select name="centro" className="form-select" value={form.centro} onChange={handleChange} required>
                  <option value="">Selecciona un centro...</option>
                  {centros.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Fecha estimada de entrega</label>
                <input type="date" name="fecha" className="form-control" value={form.fecha} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Observaciones (opcional)</label>
                <textarea name="notas" className="form-control" rows={2} placeholder="Condiciones especiales, instrucciones de manejo, etc." value={form.notas} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                <i className="bi bi-send-fill me-2"></i>Registrar donación
              </button>
            </form>
          </div>
        </div>

        {/* Tabla de donaciones */}
        <div className="col-12 col-lg-7">
          <div className="p-4 rounded-4" style={{ border: "1.5px solid var(--border)", background: "var(--surface)" }}>
            <h2 className="fw-bold mb-3 fs-5">
              <i className="bi bi-list-ul me-2" style={{ color: "var(--accent)" }}></i>
              Donaciones registradas
            </h2>
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border)" }}>
                    <th>ID</th>
                    <th>Recurso</th>
                    <th>Cantidad</th>
                    <th>Origen</th>
                    <th>Centro</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {donacionesEjemplo.map((d) => (
                    <tr key={d.id}>
                      <td><span className="badge" style={{ background: "var(--border)", color: "var(--text)" }}>{d.id}</span></td>
                      <td>{d.tipo}</td>
                      <td>{d.cantidad}</td>
                      <td className="small">{d.origen}</td>
                      <td className="small">{d.centro}</td>
                      <td className="small">{d.fecha}</td>
                      <td><span className={`badge bg-${estadoColor[d.estado]}`}>{d.estado}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="small mt-2" style={{ color: "var(--text-muted)" }}>
              <i className="bi bi-info-circle me-1"></i>
              Los datos mostrados son de ejemplo. Aquí se listarán las donaciones obtenidas desde la API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}