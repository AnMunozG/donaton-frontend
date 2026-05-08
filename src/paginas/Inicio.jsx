import { useState, useEffect } from "react";
import { DonatonLogo } from "../componentes/Logos.jsx";
import { getCategoriasDonacion, getPasosFuncionamiento } from "../api.js";

export default function Inicio() {
  const [categorias, setCategorias] = useState([]);
  const [pasos, setPasos] = useState([]);

  useEffect(() => {
    getCategoriasDonacion().then(setCategorias);
    getPasosFuncionamiento().then(setPasos);
  }, []);

  const items = [...categorias, ...categorias];

  return (
    <div className="inicio">

      {/* ── HERO ── */}
      <div className="hero-banner">
        <div className="hero-banner-content">
          <DonatonLogo variante="banner" />

          <h2>Coordinando la ayuda donde más se necesita</h2>

          <p>
            Donatón conecta a donantes, empresas, municipalidades y equipos logísticos
            para llevar ayuda humanitaria de forma transparente y eficiente a quienes más lo necesitan.
          </p>

          <div className="d-flex gap-3 justify-content-center mt-4 flex-wrap">
            <a href="/donacion" className="btn btn-primary btn-lg px-4">
              <i className="bi bi-heart-fill me-2"></i>Hacer una donación
            </a>
            <a href="/necesidades" className="btn btn-outline-accent btn-lg px-4">
              <i className="bi bi-flag-fill me-2"></i>Reportar una necesidad
            </a>
          </div>
        </div>
      </div>

      {/* ── TRANSPARENCIA ── */}
      <div className="mb-5 p-4 rounded-4" style={{ border: "2px solid var(--accent)", background: "var(--surface)" }}>
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="fw-bold mb-3 c-heading">
              <i className="bi bi-shield-check-fill me-2 c-accent"></i>
              Transparencia en cada donación
            </h2>

            <p className="c-muted">
              En Donatón creemos que la transparencia es fundamental. Cada donación, cada peso y cada recurso
              es rastreado y documentado. Puedes ver exactamente dónde va tu ayuda y cómo es utilizada.
            </p>
          </div>

          <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
            <a href="/transparencia" className="btn btn-accent btn-lg px-4">
              <i className="bi bi-info-circle-fill me-2"></i>Saber más
            </a>
          </div>
        </div>
      </div>

      {/* ── IMAGEN + ESTADÍSTICAS ── */}
      <div className="row g-4 mb-5 align-items-center">
        <div className="col-md-5">
          <div className="img-placeholder rounded-4" style={{ backgroundImage: `url("https://www.worldvision.cl/hs-fs/hubfs/Ecuador/EC-Blog/P%C3%8DA%201.jpg?width=600&name=P%C3%8DA%201.jpg")` }}></div>
        </div>

        <div className="col-md-7">
          <div className="row row-cols-2 g-3">
            {[
              { icono: "bi-heart-fill", valor: "12.400+", texto: "Donaciones recibidas" },
              { icono: "bi-house-fill", valor: "38", texto: "Centros de acopio activos" },
              { icono: "bi-people-fill", valor: "5.200+", texto: "Familias beneficiadas" },
              { icono: "bi-truck", valor: "920", texto: "Envíos completados" },
            ].map((s, i) => (
              <div key={i} className="col">
                <div className="text-center p-3 rounded-4 h-100 card-surface">
                  <i className={`bi ${s.icono} fs-2 mb-1 c-primary`}></i>

                  <div className="fw-bold fs-4 c-primary">{s.valor}</div>

                  <div className="small c-muted">{s.texto}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CARRUSEL + IMAGEN ── */}
      <div className="row g-4 mb-5 align-items-center">
        <div className="col-md-7">
          <h2 className="fw-bold mb-1">¿Qué puedes donar?</h2>

          <p className="mb-3 c-muted">
            Aceptamos distintos tipos de recursos según las necesidades reportadas en terreno.
          </p>

          <div className="carrusel-outer" style={{ margin: 0 }}>
            <div className="carrusel-track">
              {items.map((cat, i) => (
                <div key={i} className="carrusel-card">
                  <i className={`bi ${cat.icon} fs-2 mb-3 d-block c-accent`}></i>

                  <div className="fw-semibold mb-1 c-heading">{cat.nombre}</div>

                  <div className="small c-muted">{cat.descripcion}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="img-placeholder rounded-4" style={{ backgroundImage: "url(https://chile.iom.int/sites/g/files/tmzbdl906/files/styles/card_format/public/banner/37_0.jpg?itok=EVAQURnR)" }}></div>
        </div>
      </div>

      {/* ── CÓMO FUNCIONA ── */}
      <div className="mb-5">
        <h2 className="fw-bold mb-1">¿Cómo funciona Donatón?</h2>

        <p className="mb-4 c-muted">
          Un proceso simple, transparente y trazable de principio a fin.
        </p>

        <div className="row g-3">
          {pasos.map((paso, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <div className="p-4 rounded-4 h-100 d-flex flex-column gap-2 card-surface">
                <div className="d-flex align-items-center gap-3 mb-1">
                  <span className="fw-bold fs-5 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 36, height: 36, background: "var(--primary)", color: "#fff", flexShrink: 0 }}>
                    {paso.num}
                  </span>

                  <i className={`bi ${paso.icon} fs-4 c-accent`}></i>
                </div>

                <div className="fw-semibold c-heading">{paso.titulo}</div>

                <div className="small c-muted">{paso.texto}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="text-center p-4 p-md-5 rounded-4" style={{ background: "var(--primary)" }}>
        <h2 className="fw-bold mb-2 c-white">¿Listo para marcar la diferencia?</h2>

        <p className="mb-4" style={{ color: "#FFDCDC" }}>
          Cada donación, por pequeña que sea, puede cambiarle la vida a una familia en situación de emergencia.
        </p>

        <a href="/donacion" className="btn btn-light btn-lg px-5" style={{ color: "var(--primary)", fontWeight: 600 }}>
          <i className="bi bi-heart-fill me-2"></i>Donar ahora
        </a>
      </div>

    </div>
  );
}
