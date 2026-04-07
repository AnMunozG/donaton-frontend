import { useState } from "react";

const necesidadesEjemplo = [
  { id: "NEC-001", recurso: "Alimentos no perecibles", cantidad: "200 kg", ubicacion: "Sector Las Rosas, Concepción", fecha: "2026-04-05", urgencia: "Alta", estado: "Pendiente", reportadoPor: "Municipalidad de Concepción" },
  { id: "NEC-002", recurso: "Frazadas y ropa de abrigo", cantidad: "50 unidades", ubicacion: "Albergue Municipal, Talca", fecha: "2026-04-04", urgencia: "Media", estado: "Asignado", reportadoPor: "Voluntario en terreno" },
  { id: "NEC-003", recurso: "Medicamentos básicos", cantidad: "30 unidades", ubicacion: "Campamento El Pino, Valparaíso", fecha: "2026-04-03", urgencia: "Alta", estado: "Pendiente", reportadoPor: "Centro médico local" },
  { id: "NEC-004", recurso: "Artículos de higiene", cantidad: "80 kits", ubicacion: "Sector Cerro Alegre, Valparaíso", fecha: "2026-04-02", urgencia: "Baja", estado: "Cubierto", reportadoPor: "Voluntario en terreno" },
];

const urgenciaColor = { "Alta": "danger", "Media": "warning", "Baja": "secondary" };
const estadoColor = { "Pendiente": "danger", "Asignado": "warning", "Cubierto": "success" };

const tiposRecurso = [
  "Alimentos no perecibles", "Insumos médicos", "Artículos de higiene",
  "Ropa y abrigo", "Utensilios del hogar", "Agua potable", "Otro",
];

export default function Necesidades() {
  const [filtroUrgencia, setFiltroUrgencia] = useState("Todas");
  const [filtroEstado, setFiltroEstado] = useState("Todos");
  const [form, setForm] = useState({ recurso: "", cantidad: "", unidad: "kg", ubicacion: "", urgencia: "Media", descripcion: "", reportadoPor: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setForm({ recurso: "", cantidad: "", unidad: "kg", ubicacion: "", urgencia: "Media", descripcion: "", reportadoPor: "" });
  };

  const necesidadesFiltradas = necesidadesEjemplo.filter((n) => {
    const matchUrgencia = filtroUrgencia === "Todas" || n.urgencia === filtroUrgencia;
    const matchEstado = filtroEstado === "Todos" || n.estado === filtroEstado;
    return matchUrgencia && matchEstado;
  });

  return (
    <div className="necesidades">
      <h1>Necesidades en Terreno</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        Registra y consulta las necesidades reportadas desde los sectores afectados. Esta información permite que el equipo logístico de Donatón priorice los envíos de forma eficiente.
      </p>

      <div className="row g-4">
        {/* Formulario de reporte */}
        <div className="col-12 col-lg-4">
          <div className="p-4 rounded-4" style={{ border: "1.5px solid var(--border)", background: "var(--surface)" }}>
            <h2 className="fw-bold fs-5 mb-3">
              <i className="bi bi-flag-fill me-2" style={{ color: "var(--primary)" }}></i>
              Reportar necesidad
            </h2>

            {enviado && (
              <div className="alert alert-success d-flex align-items-center gap-2 small" role="alert">
                <i className="bi bi-check-circle-fill"></i>
                Necesidad reportada. El equipo logístico revisará la solicitud a la brevedad.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Reportado por</label>
                <input type="text" name="reportadoPor" className="form-control" placeholder="Municipalidad, voluntario, albergue..." value={form.reportadoPor} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Recurso necesitado</label>
                <select name="recurso" className="form-select" value={form.recurso} onChange={handleChange} required>
                  <option value="">Selecciona el recurso...</option>
                  {tiposRecurso.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Cantidad requerida</label>
                <div className="input-group">
                  <input type="number" name="cantidad" className="form-control" placeholder="Ej: 100" min="1" value={form.cantidad} onChange={handleChange} required />
                  <select name="unidad" className="form-select" style={{ maxWidth: 100 }} value={form.unidad} onChange={handleChange}>
                    <option value="kg">kg</option>
                    <option value="unidades">unidades</option>
                    <option value="cajas">cajas</option>
                    <option value="kits">kits</option>
                    <option value="litros">litros</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Ubicación geográfica</label>
                <input type="text" name="ubicacion" className="form-control" placeholder="Sector, ciudad, región..." value={form.ubicacion} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nivel de urgencia</label>
                <select name="urgencia" className="form-select" value={form.urgencia} onChange={handleChange}>
                  <option value="Alta">Alta — Requiere atención inmediata</option>
                  <option value="Media">Media — Puede esperar 24-48 hrs</option>
                  <option value="Baja">Baja — No es urgente</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Descripción adicional</label>
                <textarea name="descripcion" className="form-control" rows={2} placeholder="Contexto de la emergencia, condiciones del lugar, etc." value={form.descripcion} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                <i className="bi bi-send-fill me-2"></i>Enviar reporte
              </button>
            </form>
          </div>
        </div>

        {/* Tabla de necesidades */}
        <div className="col-12 col-lg-8">
          <div className="p-4 rounded-4" style={{ border: "1.5px solid var(--border)", background: "var(--surface)" }}>
            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
              <h2 className="fw-bold fs-5 mb-0">
                <i className="bi bi-list-check me-2" style={{ color: "var(--accent)" }}></i>
                Necesidades activas
              </h2>
              <div className="d-flex gap-2 flex-wrap">
                <select className="form-select form-select-sm" style={{ width: "auto" }} value={filtroUrgencia} onChange={(e) => setFiltroUrgencia(e.target.value)}>
                  <option value="Todas">Urgencia: Todas</option>
                  <option value="Alta">Alta</option>
                  <option value="Media">Media</option>
                  <option value="Baja">Baja</option>
                </select>
                <select className="form-select form-select-sm" style={{ width: "auto" }} value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}>
                  <option value="Todos">Estado: Todos</option>
                  <option value="Pendiente">Pendiente</option>
                  <option value="Asignado">Asignado</option>
                  <option value="Cubierto">Cubierto</option>
                </select>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border)" }}>
                    <th>ID</th>
                    <th>Recurso</th>
                    <th>Cantidad</th>
                    <th>Ubicación</th>
                    <th>Reportado por</th>
                    <th>Urgencia</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {necesidadesFiltradas.length === 0 ? (
                    <tr><td colSpan={7} className="text-center py-4" style={{ color: "var(--text-muted)" }}>No hay necesidades con los filtros seleccionados.</td></tr>
                  ) : necesidadesFiltradas.map((n) => (
                    <tr key={n.id}>
                      <td><span className="badge" style={{ background: "var(--border)", color: "var(--text)" }}>{n.id}</span></td>
                      <td>{n.recurso}</td>
                      <td>{n.cantidad}</td>
                      <td className="small">{n.ubicacion}</td>
                      <td className="small">{n.reportadoPor}</td>
                      <td><span className={`badge bg-${urgenciaColor[n.urgencia]}`}>{n.urgencia}</span></td>
                      <td><span className={`badge bg-${estadoColor[n.estado]}`}>{n.estado}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="small mt-1" style={{ color: "var(--text-muted)" }}>
              <i className="bi bi-info-circle me-1"></i>
              Los datos mostrados son de ejemplo. Aquí se listarán las necesidades obtenidas desde la API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}