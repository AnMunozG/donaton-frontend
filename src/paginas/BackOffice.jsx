import { useState, useEffect, useMemo } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import { getDonaciones, getNecesidades, getCentros, estadoColor, CHART_COLORS } from "../api.js";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: "bi-speedometer2" },
  { id: "donaciones", label: "Donaciones", icon: "bi-gift-fill" },
  { id: "necesidades", label: "Necesidades", icon: "bi-exclamation-triangle-fill" },
  { id: "centros", label: "Centros", icon: "bi-building-fill" },
];

export default function BackOffice() {
  const [donaciones, setDonaciones] = useState([]);
  const [necesidades, setNecesidades] = useState([]);
  const [centros, setCentros] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [filtroEstado, setFiltroEstado] = useState("Todas");
  const [centroSeleccionado, setCentroSeleccionado] = useState(null);

  useEffect(() => {
    getDonaciones().then(setDonaciones);
    getNecesidades().then(setNecesidades);
    getCentros().then(setCentros);
  }, []);

  const donacionesFiltradas = filtroEstado === "Todas"
    ? donaciones
    : donaciones.filter((d) => d.estado === filtroEstado);

  const donacionesPorEstado = useMemo(() => {
    const counts = {};
    donaciones.forEach((d) => { counts[d.estado] = (counts[d.estado] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [donaciones]);

  const donacionesPorTipo = useMemo(() => {
    const counts = {};
    donaciones.forEach((d) => { counts[d.tipo] = (counts[d.tipo] || 0) + 1; });
    return Object.entries(counts).map(([name, cantidad]) => ({ name, cantidad }));
  }, [donaciones]);

  const necesidadesPendientes = necesidades.filter((n) => n.estado !== "Cubierto").length;
  const totalCapacidad = centros.reduce((a, c) => a + c.capacidadTotal, 0);
  const capacidadUsada = centros.reduce((a, c) => a + c.capacidadUsada, 0);

  const necesidadesPorCentro = useMemo(() => {
    const counts = {};
    necesidades.forEach((n) => {
      if (n.centroId) {
        const centro = centros.find((c) => c.id === n.centroId);
        const nombre = centro ? centro.nombre : n.centroId;
        counts[nombre] = (counts[nombre] || 0) + 1;
      }
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [necesidades, centros]);

  const estados = ["Todas", ...new Set(donaciones.map((d) => d.estado))];

  const BadgeEstado = ({ estado }) => (
    <span className="bo-badge"
      style={{
        background: `${estadoColor[estado] || "#6c757d"}18`,
        color: estadoColor[estado] || "#6c757d",
        border: `1px solid ${estadoColor[estado] || "#6c757d"}35`,
      }}>
      {estado}
    </span>
  );

  const tooltipStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    color: "var(--text)",
  };

  return (
    <div className="backoffice-page">
      <div className="bo-layout">

        {/* SIDEBAR */}
        <aside className="bo-sidebar">
          <div className="bo-sidebar-header">
            <i className="bi bi-shield-fill-check fs-4 c-primary"></i>
            <span className="fw-bold c-heading">Admin Panel</span>
          </div>

          <nav className="bo-nav">
            {tabs.map((tab) => (
              <button key={tab.id}
                className="bo-nav-btn"
                style={{
                  background: activeTab === tab.id ? "var(--primary)" : undefined,
                  color: activeTab === tab.id ? "#fff" : undefined,
                  borderLeft: activeTab === tab.id ? "3px solid #fff" : undefined,
                }}
                onClick={() => setActiveTab(tab.id)}>
                <i className={`bi ${tab.icon}`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          <div className="bo-sidebar-footer">
            <small className="c-muted">Donatón v1.0</small>
          </div>
        </aside>

        {/* MAIN */}
        <main className="bo-main">

          {/* DASHBOARD */}
          {activeTab === "dashboard" && (
            <>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="m-0 c-heading">
                  <i className="bi bi-speedometer2 me-2 c-primary"></i>Dashboard
                </h2>

                <span className="bo-date-badge">
                  <i className="bi bi-calendar3 me-1"></i>
                  {new Date().toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>

              <div className="row g-3 mb-4">
                {[
                  { icon: "bi-gift-fill", label: "Donaciones totales", value: donaciones.length, color: "#DD4444", bg: "rgba(221,68,68,0.1)" },
                  { icon: "bi-exclamation-triangle-fill", label: "Necesidades activas", value: necesidadesPendientes, color: "#FFC107", bg: "rgba(255,193,7,0.1)" },
                  { icon: "bi-building-fill", label: "Centros de acopio", value: centros.length, color: "#3AB795", bg: "rgba(58,183,149,0.1)" },
                  { icon: "bi-box-seam-fill", label: "Capacidad utilizada", value: `${Math.round((capacidadUsada / totalCapacidad) * 100)}%`, color: "#0dcaf0", bg: "rgba(13,202,240,0.1)" },
                ].map((card, i) => (
                  <div key={i} className="col-sm-6 col-xl-3">
                    <div className="bo-card" style={{ borderLeft: `4px solid ${card.color}` }}>
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <div className="bo-card-label">{card.label}</div>
                          <div className="bo-card-value">{card.value}</div>
                        </div>

                        <div className="bo-card-icon" style={{ background: card.bg, color: card.color }}>
                          <i className={`bi ${card.icon}`}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row g-3 mb-4">
                <div className="col-lg-8">
                  <div className="bo-chart-card">
                    <h5 className="mb-3 c-heading">
                      <i className="bi bi-bar-chart-fill me-2 c-primary"></i>Donaciones por tipo
                    </h5>

                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={donacionesPorTipo}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis dataKey="name" tick={{ fill: "var(--text-muted)", fontSize: 12 }} angle={-20} textAnchor="end" height={60} />
                        <YAxis tick={{ fill: "var(--text-muted)", fontSize: 12 }} />
                        <Tooltip contentStyle={tooltipStyle} />
                        <Bar dataKey="cantidad" fill="#DD4444" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="bo-chart-card h-100">
                    <h5 className="mb-3 c-heading">
                      <i className="bi bi-pie-chart-fill me-2 c-primary"></i>Estado donaciones
                    </h5>

                    <ResponsiveContainer width="100%" height={280}>
                      <PieChart>
                        <Pie data={donacionesPorEstado} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={40}>
                          {donacionesPorEstado.map((_, idx) => (
                            <Cell key={idx} fill={CHART_COLORS[idx % CHART_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={tooltipStyle} />
                        <Legend wrapperStyle={{ fontSize: 12, color: "var(--text-muted)" }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="bo-chart-card">
                <h5 className="mb-3 c-heading">
                  <i className="bi bi-geo-alt-fill me-2 c-primary"></i>Necesidades por centro
                </h5>

                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={necesidadesPorCentro} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis type="number" tick={{ fill: "var(--text-muted)", fontSize: 12 }} />
                    <YAxis type="category" dataKey="name" tick={{ fill: "var(--text-muted)", fontSize: 12 }} width={140} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Bar dataKey="value" fill="#F48080" radius={[0, 6, 6, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

            </>
          )}

          {/* DONACIONES */}
          {activeTab === "donaciones" && (
            <>

              <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <h2 className="m-0 c-heading">
                  <i className="bi bi-gift-fill me-2 c-primary"></i>Donaciones
                </h2>

                <div className="d-flex gap-2 align-items-center">
                  <label className="form-label m-0 small c-muted">Filtrar:</label>
                  <select className="form-select form-select-sm" style={{ width: "auto" }} value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}>
                    {estados.map((est) => <option key={est} value={est}>{est}</option>)}
                  </select>
                </div>
              </div>

              <div className="bo-table-wrapper">
                <table className="bo-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Tipo</th>
                      <th>Cantidad</th>
                      <th>Origen</th>
                      <th>Centro</th>
                      <th>Fecha</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donacionesFiltradas.map((d) => (
                      <tr key={d.id}>
                        <td><span className="bo-id">{d.id}</span></td>
                        <td style={{ fontWeight: 500 }}>{d.tipo}</td>
                        <td>{d.cantidad} {d.unidad}</td>
                        <td>{d.origen}</td>
                        <td>{d.centro}</td>
                        <td>{d.fecha}</td>
                        <td><BadgeEstado estado={d.estado} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </>
          )}

          {/* NECESIDADES */}
          {activeTab === "necesidades" && (
            <>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="m-0 c-heading">
                  <i className="bi bi-exclamation-triangle-fill me-2 c-primary"></i>Necesidades
                </h2>
              </div>

              <div className="bo-table-wrapper">
                <table className="bo-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Recurso</th>
                      <th>Cantidad</th>
                      <th>Centro destino</th>
                      <th>Urgencia</th>
                      <th>Estado</th>
                      <th>Reportado por</th>
                    </tr>
                  </thead>
                  <tbody>
                    {necesidades.map((n) => {
                      const centroNec = centros.find((c) => c.id === n.centroId);
                      return (
                        <tr key={n.id}>
                          <td><span className="bo-id">{n.id}</span></td>
                          <td style={{ fontWeight: 500 }}>{n.recurso}</td>
                          <td>{n.cantidad} {n.unidad}</td>
                          <td>{centroNec ? centroNec.nombre : n.ubicacion}</td>
                          <td><span className={`bo-urgencia bo-urgencia-${n.urgencia.toLowerCase()}`}>{n.urgencia}</span></td>
                          <td><BadgeEstado estado={n.estado} /></td>
                          <td>{n.reportadoPor}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

            </>
          )}

          {/* CENTROS */}
          {activeTab === "centros" && (
            <>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="m-0 c-heading">
                  <i className="bi bi-building-fill me-2 c-primary"></i>Centros de acopio
                </h2>
              </div>

              <div className="bo-table-wrapper">
                <table className="bo-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Región</th>
                      <th>Encargado</th>
                      <th>Capacidad</th>
                      <th>Uso</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {centros.map((c) => {
                      const pct = Math.round((c.capacidadUsada / c.capacidadTotal) * 100);
                      const isSelected = centroSeleccionado?.id === c.id;
                      return (
                        <tr key={c.id}
                          onClick={() => setCentroSeleccionado(isSelected ? null : c)}
                          style={{ cursor: "pointer", background: isSelected ? "rgba(221,68,68,0.06)" : undefined }}>
                          <td><span className="bo-id">{c.id}</span></td>
                          <td style={{ fontWeight: 500 }}>{c.nombre}</td>
                          <td>{c.region}</td>
                          <td>{c.encargado}</td>
                          <td>{c.capacidadTotal} unid.</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <div className="bo-progress" style={{ width: 80 }}>
                                <div className="bo-progress-bar" style={{ width: `${pct}%`, background: pct > 80 ? "#DD4444" : pct > 50 ? "#FFC107" : "#3AB795" }}></div>
                              </div>
                              <small className="c-muted">{pct}%</small>
                            </div>
                          </td>
                          <td><BadgeEstado estado={c.estado === "Activo" ? "Cubierto" : "Pendiente"} /></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {centroSeleccionado && (
                <div className="bo-chart-card mt-4">
                  <h5 className="mb-3 c-heading">
                    <i className="bi bi-box-seam-fill me-2 c-primary"></i>
                    Inventario — {centroSeleccionado.nombre}
                  </h5>

                  <div className="row g-3">
                    {centroSeleccionado.inventario.map((item, i) => (
                      <div key={i} className="col-sm-6 col-md-4 col-lg-3">
                        <div className="bo-card">
                          <div className="bo-card-label">{item.tipo}</div>
                          <div className="bo-card-value">{item.cantidad}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </>
          )}

        </main>
      </div>
    </div>
  );
}
