import { useState } from "react";

const donacionesEjemplo = [
    { id: "DON-001", tipo: "Alimentos no perecibles", cantidad: "50 kg", origen: "Empresa Sodimac", centro: "Santiago Centro", fecha: "2026-04-01", estado: "Entregado" },
    { id: "DON-002", tipo: "Ropa y abrigo", cantidad: "3 cajas", origen: "Municipalidad de Maipú", centro: "Maipú", fecha: "2026-04-03", estado: "En tránsito" },
    { id: "DON-003", tipo: "Insumos médicos", cantidad: "20 unidades", origen: "Persona particular", centro: "Puente Alto", fecha: "2026-04-05", estado: "En acopio" },
];

const necesidadesEjemplo = [
    { id: "NEC-001", recurso: "Alimentos no perecibles", cantidad: "200 kg", ubicacion: "Sector Las Rosas, Concepción", fecha: "2026-04-05", urgencia: "Alta", estado: "Pendiente", reportadoPor: "Municipalidad de Concepción" },
    { id: "NEC-002", recurso: "Frazadas y ropa de abrigo", cantidad: "50 unidades", ubicacion: "Albergue Municipal, Talca", fecha: "2026-04-04", urgencia: "Media", estado: "Asignado", reportadoPor: "Voluntario en terreno" },
    { id: "NEC-003", recurso: "Medicamentos básicos", cantidad: "30 unidades", ubicacion: "Campamento El Pino, Valparaíso", fecha: "2026-04-03", urgencia: "Alta", estado: "Pendiente", reportadoPor: "Centro médico local" },
    { id: "NEC-004", recurso: "Artículos de higiene", cantidad: "80 kits", ubicacion: "Sector Cerro Alegre, Valparaíso", fecha: "2026-04-02", urgencia: "Baja", estado: "Cubierto", reportadoPor: "Voluntario en terreno" },
];

const urgenciaColor = { "Alta": "danger", "Media": "warning", "Baja": "secondary" };
const estadoColor = { "Pendiente": "danger", "Asignado": "warning", "Cubierto": "success", "Entregado": "success", "En tránsito": "warning", "En acopio": "info" };



export default function BackOffice() {
    const [filtroUrgencia, setFiltroUrgencia] = useState("Todas");
    const [filtroEstado, setFiltroEstado] = useState("Todos");
    const necesidadesFiltradas = necesidadesEjemplo.filter((n) => {
        const matchUrgencia = filtroUrgencia === "Todas" || n.urgencia === filtroUrgencia;
        const matchEstado = filtroEstado === "Todos" || n.estado === filtroEstado;
        return matchUrgencia && matchEstado;
    });

    return (
        <div className="backoffice">
            <h1>Back Office - Administración Interna</h1>
            <p className="mb-4" style={{ color: "var(--text-muted)" }}>
                Accede a las herramientas de gestión interna de Donatón: administra solicitudes, monitorea, etc.
            </p>

            <p className="small mt-1" style={{ color: "var(--text-muted)" }}>
                <i className="bi bi-info-circle me-1"></i>
                Los datos mostrados son de ejemplo. Aquí se listarán las donaciones y necesidades obtenidas desde la API.
            </p>

            {/* Tabla de donaciones */}
            <div className="col-12 col-lg-12">
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
                </div>
            </div>


            {/* Tabla de necesidades */}
            <div className="col-12 col-lg-12 mt-4">
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
                </div>
            </div>
        </div>
    );
}