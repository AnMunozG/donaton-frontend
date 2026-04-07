import { DonatonLogo } from "../componentes/Logos.jsx";

export default function Inicio() {

  return (
    <div className="inicio">
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

      <div className="row row-cols-2 row-cols-md-4 g-3 mb-5">
        {[
          { icono: "bi-heart-fill", valor: "12.400+", texto: "Donaciones recibidas" },
          { icono: "bi-house-fill", valor: "38", texto: "Centros de acopio activos" },
          { icono: "bi-people-fill", valor: "5.200+", texto: "Familias beneficiadas" },
          { icono: "bi-truck", valor: "920", texto: "Envíos completados" },
        ].map((s, i) => (
          <div key={i} className="col">
            <div className="text-center p-4 rounded-4 h-100" style={{ border: "1.5px solid var(--border)", background: "var(--surface)" }}>
              <i className={`bi ${s.icono} fs-2 mb-2`} style={{ color: "var(--primary)" }}></i>
              <div className="fw-bold fs-4" style={{ color: "var(--primary)" }}>{s.valor}</div>
              <div className="small" style={{ color: "var(--text-muted)" }}>{s.texto}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-5">
        <h2 className="fw-bold mb-1">¿Cómo funciona Donatón?</h2>
        <p className="mb-4" style={{ color: "var(--text-muted)" }}>Un proceso simple, transparente y trazable de principio a fin.</p>
        <div className="row g-3">
          {[
            { num: "1", icon: "bi-gift-fill", titulo: "Realizas tu donación", texto: "Registras el tipo de recurso, cantidad y datos del origen. Todo queda documentado en el sistema." },
            { num: "2", icon: "bi-building-fill", titulo: "Asignación al centro", texto: "La plataforma asigna tu donación al centro de acopio más cercano a la zona de necesidad." },
            { num: "3", icon: "bi-truck", titulo: "Logística y traslado", texto: "El equipo logístico de Donatón gestiona el transporte y la distribución a los damnificados." },
            { num: "4", icon: "bi-check-circle-fill", titulo: "Confirmación de entrega", texto: "Recibirás confirmación cuando tu donación llegue al destino final." },
          ].map((paso, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <div className="p-4 rounded-4 h-100 d-flex flex-column gap-2" style={{ border: "1.5px solid var(--border)", background: "var(--surface)" }}>
                <div className="d-flex align-items-center gap-3 mb-1">
                  <span className="fw-bold fs-5 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 36, height: 36, background: "var(--primary)", color: "#fff", flexShrink: 0 }}>
                    {paso.num}
                  </span>
                  <i className={`bi ${paso.icon} fs-4`} style={{ color: "var(--accent)" }}></i>
                </div>
                <div className="fw-semibold" style={{ color: "var(--text-h)" }}>{paso.titulo}</div>
                <div className="small" style={{ color: "var(--text-muted)" }}>{paso.texto}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h2 className="fw-bold mb-1">¿Qué puedes donar?</h2>
        <p className="mb-4" style={{ color: "var(--text-muted)" }}>Aceptamos distintos tipos de recursos según las necesidades reportadas en terreno.</p>
        <div className="row g-3">
          {[
            { icon: "bi-basket2-fill", nombre: "Alimentos", descripcion: "Alimentos no perecibles, conservas y productos básicos de primera necesidad." },
            { icon: "bi-bandaid-fill", nombre: "Insumos médicos", descripcion: "Medicamentos, material de curación y equipos de primeros auxilios." },
            { icon: "bi-droplet-fill", nombre: "Higiene", descripcion: "Artículos de aseo personal, pañales, papel higiénico y jabón." },
            { icon: "bi-bag-fill", nombre: "Ropa y abrigo", descripcion: "Ropa de todo tipo, frazadas, sleeping y artículos de abrigo." },
            { icon: "bi-currency-dollar", nombre: "Donaciones monetarias", descripcion: "Donaciones monetarias que permiten compras directas según necesidades específicas." },
          ].map((categorias, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-3">
              <div className="p-4 rounded-4 h-100" style={{ border: "1.5px solid var(--border)", background: "var(--surface)" }}>
                <i className={`bi ${categorias.icon} fs-2 mb-3`} style={{ color: "var(--accent)" }}></i>
                <div className="fw-semibold mb-1" style={{ color: "var(--text-h)" }}>{categorias.nombre}</div>
                <div className="small" style={{ color: "var(--text-muted)" }}>{categorias.descripcion}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div className="text-center p-5 rounded-4" style={{ background: "var(--primary)" }}>
        <h2 className="fw-bold mb-2" style={{ color: "#fff" }}>¿Listo para marcar la diferencia?</h2>
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