import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getImpactoStats, getDistribucionFondos, getReportes, getGobernanza } from "../api.js";

export default function Transparencia() {
  const [impactoStats, setImpactoStats] = useState([]);
  const [distribucionFondos, setDistribucionFondos] = useState([]);
  const [reportes, setReportes] = useState([]);
  const [gobernanza, setGobernanza] = useState([]);

  useEffect(() => {
    getImpactoStats().then(setImpactoStats);
    getDistribucionFondos().then(setDistribucionFondos);
    getReportes().then(setReportes);
    getGobernanza().then(setGobernanza);
  }, []);

  return (
    <div className="transparencia-page">

      {/* HERO */}
      <section className="tp-hero">
        <div className="tp-hero-overlay"></div>

        <div className="tp-hero-content">
          <div className="tp-badge">COMPROMISO PÚBLICO</div>

          <h1>Transparencia</h1>

          <p>
            En Donatón creemos que la confianza se construye con información clara,
            datos abiertos y rendición de cuentas permanente.
          </p>

          <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
            <a href="#reportes" className="btn tp-btn-primary">
              <i className="bi bi-download me-2"></i>Ver reportes
            </a>
            <a href="#impacto" className="btn tp-btn-outline">
              <i className="bi bi-graph-up me-2"></i>Nuestro impacto
            </a>
          </div>
        </div>
      </section>

      {/* IMPACTO EN NÚMEROS */}
      <section id="impacto" className="tp-section">
        <div className="tp-container">
          <div className="text-center mb-5">
            <h2 className="tp-section-title">Nuestro impacto en números</h2>

            <p className="tp-section-desc">
              Cada cifra representa vidas cambiadas, comunidades fortalecidas y esperanza renovada.
            </p>
          </div>

          <div className="row g-4">
            {impactoStats.map((s, i) => (
              <div key={i} className="col-6 col-lg-4">
                <div className="tp-stat-card">
                  <div className="tp-stat-icon">
                    <i className={`bi ${s.icono}`}></i>
                  </div>

                  <div className="tp-stat-valor">{s.valor}</div>

                  <div className="tp-stat-texto">{s.texto}</div>

                  <div className="tp-stat-detalle">{s.detalle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISTRIBUCIÓN DE FONDOS */}
      <section className="tp-section tp-section-alt">
        <div className="tp-container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="tp-section-title">¿Cómo se distribuyen tus donaciones?</h2>

              <p className="tp-section-desc">
                Garantizamos que la gran mayoría de los recursos llegue directamente a quienes más lo necesitan.
              </p>

              <div className="d-flex flex-column gap-3 mt-4">
                {distribucionFondos.map((item, i) => (
                  <div key={i}>
                    <div className="d-flex justify-content-between mb-1">
                      <span style={{ fontWeight: 500 }}>{item.concepto}</span>
                      <span style={{ fontWeight: 700, color: item.color }}>{item.porcentaje}%</span>
                    </div>

                    <div className="tp-progress-bar">
                      <div className="tp-progress-fill" style={{ width: `${item.porcentaje}%`, background: item.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="tp-chart-card">
                <h5 className="mb-3 c-heading">
                  <i className="bi bi-pie-chart-fill me-2 c-primary"></i>
                  Distribución 2025
                </h5>

                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  {distribucionFondos.map((item, i) => (
                    <div key={i} className="text-center" style={{ minWidth: 100 }}>
                      <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
                        style={{ width: 80, height: 80, background: `conic-gradient(${item.color} 0deg, ${item.color} ${item.porcentaje * 3.6}deg, transparent ${item.porcentaje * 3.6}deg)`, position: "relative" }}>
                        <div className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: 55, height: 55, background: "var(--surface)", fontWeight: 700, fontSize: "0.9rem", color: item.color }}>
                          {item.porcentaje}%
                        </div>
                      </div>

                      <div className="small c-muted" style={{ maxWidth: 100, lineHeight: 1.3 }}>
                        {item.concepto}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REPORTES Y DOCUMENTOS */}
      <section id="reportes" className="tp-section">
        <div className="tp-container">
          <div className="text-center mb-5">
            <h2 className="tp-section-title">Reportes y documentos</h2>

            <p className="tp-section-desc">
              Todos nuestros informes están disponibles para descarga. La transparencia es nuestro sello.
            </p>
          </div>

          <div className="row g-4">
            {reportes.map((r, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="tp-report-card" role="button" tabIndex={0}
                  onClick={() => alert(`Descargando: ${r.titulo} (${r.size})`)}
                  onKeyDown={(e) => e.key === "Enter" && alert(`Descargando: ${r.titulo} (${r.size})`)}>
                  <div className="d-flex align-items-center gap-3">
                    <i className={`bi ${r.icono} fs-2`} style={{ color: r.color }}></i>

                    <div className="flex-grow-1 min-width-0">
                      <div className="fw-semibold text-truncate c-heading">{r.titulo}</div>

                      <div className="small c-muted">{r.fecha} &middot; {r.size}</div>
                    </div>

                    <span className={`tp-type-badge tp-type-${r.tipo.toLowerCase()}`}>{r.tipo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOBERNANZA */}
      <section className="tp-section tp-section-alt">
        <div className="tp-container">
          <div className="text-center mb-5">
            <h2 className="tp-section-title">Gobierno corporativo</h2>

            <p className="tp-section-desc">
              Conoce al equipo que lidera la gestión transparente de Donatón.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {gobernanza.map((p, i) => (
              <div key={i} className="col-sm-6 col-lg-3">
                <div className="tp-team-card text-center">
                  <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: 90, height: 90, background: "linear-gradient(135deg, var(--primary), var(--secondary))", color: "#fff", fontSize: "2rem", fontWeight: 700 }}>
                    {p.nombre.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>

                  <div className="fw-bold c-heading">{p.nombre}</div>

                  <div className="small c-muted">{p.cargo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPROMISO */}
      <section className="tp-section">
        <div className="tp-container">
          <div className="tp-commitment-card text-center">
            <i className="bi bi-shield-check-fill fs-1 mb-3 c-accent"></i>

            <h2 className="fw-bold mb-3 c-white">
              Nuestro compromiso con la transparencia
            </h2>

            <p style={{ color: "#FFDCDC", maxWidth: 700, margin: "0 auto 1.5rem" }}>
              Publicamos periódicamente auditorías externas, balances financieros e informes de impacto.
              Creemos que la rendición de cuentas no es opcional: es la base de toda ayuda humanitaria.
            </p>

            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link to="/donacion" className="btn btn-light px-4" style={{ color: "var(--primary)", fontWeight: 600 }}>
                <i className="bi bi-heart-fill me-2"></i>Hacer una donación
              </Link>
              <a href="#" className="btn tp-btn-outline-light px-4">
                <i className="bi bi-envelope me-2"></i>Contactar transparencia
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
