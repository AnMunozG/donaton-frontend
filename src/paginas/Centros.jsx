import { useState, useEffect } from "react";
import { getCentros, getNecesidades, urgenciaColorMap, estadoNecColorMap } from "../api.js";
import Mapa from "../componentes/Mapa";
import banner2Img from "../assets/Banner2.png";

export default function Centros() {
  const [centros, setCentros] = useState([]);
  const [necesidades, setNecesidades] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);
  const [filtroRegion, setFiltroRegion] = useState("Todas");

  useEffect(() => {
    getCentros().then(setCentros);
    getNecesidades().then(setNecesidades);
  }, []);

  const regiones = ["Todas", ...new Set(centros.map((c) => c.region))];

  const centrosFiltrados = filtroRegion === "Todas"
    ? centros
    : centros.filter((c) => c.region === filtroRegion);

  const necesidadesDelCentro = seleccionado
    ? necesidades.filter((n) => n.centroId === seleccionado.id)
    : [];

  return (
    <div className="centros">

      {/* BANNER */}
      <div className="position-relative rounded-4 overflow-hidden mb-4 d-flex align-items-center"
        style={{ minHeight: "25vh", backgroundImage: `url(${banner2Img})`, backgroundSize: "cover" }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(135deg, rgba(18,18,18,0.85) 0%, rgba(26,58,62,0.7) 100%)" }}></div>

        <div className="py-4 px-4" style={{ position: "relative", zIndex: 1 }}>
          <span className="d-inline-block px-3 py-1 rounded-pill mb-2"
            style={{ background: "rgba(221,68,68,0.2)", color: "#F48080", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "1px", border: "1px solid rgba(221,68,68,0.3)" }}>
            {centros.length} CENTROS ACTIVOS
          </span>

          <h1 className="fw-bold mb-1 c-white" style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)" }}>Centros de Acopio</h1>

          <p className="m-0" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
            Consulta la capacidad y las necesidades asignadas a cada centro de acopio activo.
          </p>
        </div>
      </div>

      {/* FILTROS */}
      <div className="d-flex gap-2 flex-wrap mb-4">
        {regiones.map((r) => (
          <button key={r}
            className="btn btn-sm"
            style={{
              background: filtroRegion === r ? "var(--primary)" : "transparent",
              color: filtroRegion === r ? "#fff" : "var(--text)",
              border: `1.5px solid ${filtroRegion === r ? "var(--primary)" : "var(--border)"}`,
              borderRadius: 50, fontWeight: 500, padding: "0.3rem 1rem",
            }}
            onClick={() => setFiltroRegion(r)}>
            {r}
          </button>
        ))}
      </div>

      <div className="row g-4">

        {/* LISTA */}
        <div className="col-12 col-lg-4">
          <div className="d-flex flex-column gap-3 centros-list">
            {centrosFiltrados.map((c) => {
              const pct = Math.round((c.capacidadUsada / c.capacidadTotal) * 100);
              const barColor = pct >= 85 ? "#DD4444" : pct >= 60 ? "#FFC107" : "#3AB795";
              const necesidadesCount = necesidades.filter((n) => n.centroId === c.id).length;

              return (
                <div key={c.id}
                  className="p-3 rounded-4 bg-surface"
                  style={{
                    border: `1.5px solid ${seleccionado?.id === c.id ? "var(--primary)" : "var(--border)"}`,
                    cursor: "pointer", transition: "all 0.2s",
                  }}
                  onClick={() => setSeleccionado(seleccionado?.id === c.id ? null : c)}>

                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span className="small" style={{ fontFamily: "var(--mono)", color: "var(--text-muted)" }}>{c.id}</span>
                        <span className="d-inline-block px-2 py-0 rounded-pill"
                          style={{ fontSize: "0.65rem", fontWeight: 600, background: barColor + "18", color: barColor }}>{pct}%</span>
                      </div>

                      <div className="fw-bold c-heading" style={{ fontSize: "0.95rem" }}>{c.nombre}</div>

                      <div className="small c-muted">
                        <i className="bi bi-geo-alt-fill me-1 c-accent"></i>{c.region}
                      </div>
                    </div>

                    <div className="d-flex flex-column align-items-end gap-1" style={{ flexShrink: 0 }}>
                      <span className={`badge ${c.estado === "Activo" ? "bg-success" : "bg-danger"}`}>{c.estado}</span>
                      {necesidadesCount > 0 && (
                        <span className="d-inline-flex align-items-center gap-1 px-2 py-0 rounded-pill"
                          style={{ background: "rgba(255,193,7,0.15)", color: "#CC9900", fontSize: "0.65rem", fontWeight: 600 }}>
                          <i className="bi bi-flag-fill"></i>{necesidadesCount} neces.
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="small d-flex justify-content-between mb-1">
                    <span className="c-muted">Capacidad usada</span>
                    <span className="fw-semibold" style={{ fontSize: "0.78rem" }}>{c.capacidadUsada.toLocaleString()} / {c.capacidadTotal.toLocaleString()} kg</span>
                  </div>

                  <div className="progress" style={{ height: 6 }}>
                    <div className="progress-bar" style={{ width: `${pct}%`, background: barColor, borderRadius: 99 }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MAPA + DETALLE */}
        <div className="col-12 col-lg-8">
          <div className="mb-3">
            <Mapa centros={centrosFiltrados} seleccionado={seleccionado} onSelect={setSeleccionado} />
          </div>

          {seleccionado ? (
            <div className="p-4 rounded-4 card-surface">
              <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <div>
                  <span className="small" style={{ fontFamily: "var(--mono)", color: "var(--text-muted)" }}>{seleccionado.id}</span>

                  <h2 className="fw-bold fs-5 mb-0 c-heading">{seleccionado.nombre}</h2>
                </div>

                <span className={`badge ${seleccionado.estado === "Activo" ? "bg-success" : "bg-danger"}`}>{seleccionado.estado}</span>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-12">
                  <div className="small c-muted">
                    <i className="bi bi-geo-alt-fill me-1 c-accent"></i>{seleccionado.direccion}
                  </div>
                </div>

                <div className="col-6">
                  <div className="small c-muted"><i className="bi bi-person-fill me-1 c-accent"></i>Encargado/a</div>
                  <div className="fw-semibold">{seleccionado.encargado}</div>
                </div>

                <div className="col-6">
                  <div className="small c-muted"><i className="bi bi-telephone-fill me-1 c-accent"></i>Contacto</div>
                  <div className="fw-semibold">{seleccionado.telefono}</div>
                </div>
              </div>

              <h3 className="fs-6 fw-bold mb-3 c-heading">
                <i className="bi bi-flag-fill me-2 c-primary"></i>Necesidades asignadas
              </h3>

              {necesidadesDelCentro.length === 0 ? (
                <div className="p-3 rounded-3 d-flex align-items-center gap-2" style={{ background: "rgba(58,183,149,0.08)" }}>
                  <i className="bi bi-check-circle-fill c-accent"></i>
                  <span className="small c-muted">No hay necesidades asignadas a este centro actualmente.</span>
                </div>
              ) : (
                <div className="d-flex flex-column gap-2">
                  {necesidadesDelCentro.map((n) => (
                    <div key={n.id} className="p-3 rounded-3 d-flex justify-content-between align-items-start flex-wrap gap-2 bg-page b-card">
                      <div>
                        <div className="fw-semibold small c-heading">{n.recurso} — {n.cantidad} {n.unidad}</div>
                        <div className="small c-muted"><i className="bi bi-geo-alt me-1"></i>{n.ubicacion}</div>
                        <div className="small c-muted"><i className="bi bi-person me-1"></i>{n.reportadoPor}</div>
                      </div>

                      <div className="d-flex gap-1 flex-wrap">
                        <span className={`badge bg-${urgenciaColorMap[n.urgencia]}`}>{n.urgencia}</span>
                        <span className={`badge bg-${estadoNecColorMap[n.estado]}`}>{n.estado}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="p-5 rounded-4 d-flex flex-column align-items-center justify-content-center text-center b-card-dashed bg-surface" style={{ minHeight: 200 }}>
              <i className="bi bi-building fs-1 mb-3" style={{ color: "var(--border)" }}></i>
              <p className="c-muted">Selecciona un centro en el mapa o en la lista para ver su detalle.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
