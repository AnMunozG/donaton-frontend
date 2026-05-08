import { useState, useEffect } from "react";
import bannerImg from "../assets/Banner.png";
import { getTeam, getValores, getHitos } from "../api.js";

export default function Nosotros() {
  const [team, setTeam] = useState([]);
  const [valores, setValores] = useState([]);
  const [hitos, setHitos] = useState([]);

  useEffect(() => {
    getTeam().then(setTeam);
    getValores().then(setValores);
    getHitos().then(setHitos);
  }, []);

  return (
    <div className="nosotros">

      {/* HERO */}
      <div className="position-relative rounded-4 overflow-hidden mb-5 d-flex align-items-center justify-content-center"
        style={{ minHeight: "35vh", background: `url(${bannerImg}) center/cover` }}>
        <div className="text-center py-5 px-3" style={{ position: "relative", zIndex: 1 }}>
          <span className="d-inline-block px-3 py-1 rounded-pill mb-3"
            style={{ background: "rgba(221,68,68,0.2)", color: "#F48080", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "2px", border: "1px solid rgba(221,68,68,0.3)" }}>
            QUIÉNES SOMOS
          </span>

          <h1 className="fw-bold mb-3 c-white" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>Acerca de Donatón</h1>

          <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto", fontSize: "1.05rem" }}>
            Una plataforma abierta que conecta donantes, centros de acopio y comunidades para llevar ayuda humanitaria de forma transparente y eficiente.
          </p>
        </div>
      </div>

      {/* IMAGEN + MISIÓN */}
      <div className="row g-4 mb-5 align-items-center">
        <div className="col-lg-5">
          <img src="https://www.agcid.gob.cl/images/08_comu25.png" alt="Nuestra misión en acción"
            className="w-100 rounded-4" style={{ aspectRatio: "4/3", objectFit: "cover" }} />
        </div>

        <div className="col-lg-7">
          <h2 className="fw-bold mb-3 c-heading">
            <i className="bi bi-bullseye me-2 c-primary"></i>
            Nuestra misión
          </h2>

          <p className="c-muted" style={{ lineHeight: 1.7, fontSize: "1.02rem" }}>
            Donatón nació para resolver el caos logístico que ocurre durante emergencias y desastres naturales.
            Nuestra misión es centralizar la gestión de donaciones y necesidades, garantizando que cada recurso
            llegue a quien más lo necesita, en el menor tiempo posible y con total trazabilidad.
          </p>

          <p className="c-muted" style={{ lineHeight: 1.7, fontSize: "1.02rem" }}>
            Trabajamos con municipalidades, empresas, voluntarios y la sociedad civil para construir
            una red de ayuda que no deje a nadie atrás.
          </p>
        </div>
      </div>

      {/* HISTORIA / HITOS */}
      <div className="mb-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-1 c-heading">Nuestra historia</h2>

          <p className="c-muted">Hitos que han marcado nuestro camino.</p>
        </div>

        <div className="position-relative" style={{ paddingLeft: "2rem" }}>
          {hitos.map((h, i) => (
            <div key={i} className="position-relative pb-4"
              style={{ borderLeft: "2px solid var(--border)", paddingLeft: "1.5rem" }}>
              <div className="position-absolute rounded-circle d-flex align-items-center justify-content-center fw-bold"
                style={{ width: 32, height: 32, left: "-16px", top: 0, background: "var(--primary)", color: "#fff", fontSize: "0.7rem" }}>
                {h.year.slice(-2)}
              </div>

              <div className="fw-bold c-heading">{h.titulo}</div>

              <div className="small c-muted">{h.texto}</div>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGEN 2 */}
      <div className="mb-5">
        <div className="row g-3">
          <div className="col-md-6">
            <img src="https://www.desarrollosocialyfamilia.gob.cl/storage/image/Enero_2026/23.01_Ayuda.jpg"
              alt="Trabajo en equipo" className="w-100 rounded-4"
              style={{ aspectRatio: "16/9", objectFit: "cover" }} />
          </div>
          <div className="col-md-6">
            <img src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/19-11-2024-WFP-Haiti-food-distribution.jpg/image770x420cropped.jpg"
              alt="Distribución de alimentos" className="w-100 rounded-4"
              style={{ aspectRatio: "16/9", objectFit: "cover" }} />
          </div>
        </div>
      </div>

      {/* VALORES */}
      <div className="mb-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-1 c-heading">Nuestros principios</h2>

          <p className="c-muted">Los valores que guían cada decisión.</p>
        </div>

        <div className="row g-3">
          {valores.map((v, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-3">
              <div className="p-4 rounded-4 h-100 text-center card-surface">
                <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-3"
                  style={{ width: 52, height: 52, background: "rgba(221,68,68,0.1)", color: "var(--primary)", fontSize: "1.3rem" }}>
                  <i className={`bi ${v.icon}`}></i>
                </div>

                <div className="fw-bold mb-1 c-heading">{v.titulo}</div>

                <div className="small c-muted">{v.texto}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EQUIPO */}
      <div className="mb-2">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-1 c-heading">Equipo de desarrollo</h2>

          <p className="c-muted">Los creadores detrás de Donatón.</p>
        </div>

        <div className="row g-3 justify-content-center">
          {team.map((p, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className="p-4 rounded-4 text-center h-100 card-surface">
                <div className="mx-auto d-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{ width: 72, height: 72, background: `linear-gradient(135deg, ${p.color}, ${p.color}88)`, color: "#fff", fontSize: "1.8rem" }}>
                  {p.nombre.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>

                <div className="fw-bold c-heading">{p.nombre}</div>

                <div className="small c-muted">{p.rol}</div>

                <div style={{ width: 40, height: 3, background: p.color, borderRadius: 99, margin: "0.75rem auto 0" }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
