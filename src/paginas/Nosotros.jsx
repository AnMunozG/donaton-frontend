const equipo = [
  { nombre: "Angel Exzequiel Muñoz González", rol: "Desarrollador Frontend", icono: "bi-code-slash" },
  { nombre: "Yasser Antonio Yamil Illanes", rol: "Desarrollador Backend", icono: "bi-code-slash" },
  { nombre: "Martin Ignacio Pizarro Estay", rol: "Desarrollador Backend", icono: "bi-code-slash" },
];

const valores = [
  { icon: "bi-transparency", titulo: "Transparencia", texto: "Cada donación es rastreable desde el origen hasta su entrega. Nadie queda en la oscuridad." },
  { icon: "bi-shield-check", titulo: "Seguridad", texto: "Protegemos los datos de donantes y beneficiarios con autenticación centralizada y acceso controlado." },
  { icon: "bi-arrow-repeat", titulo: "Sostenibilidad", texto: "Nuestra arquitectura modular permite crecer sin comprometer la operación actual de la organización." },
  { icon: "bi-people-fill", titulo: "Coordinación", texto: "Conectamos donantes, empresas, municipalidades y equipos logísticos en un único sistema integrado." },
];

export default function Nosotros() {
  return (
    <div className="nosotros">
      <h1>Acerca de Donatón</h1>

      {/* Misión */}
      <div className="p-4 rounded-4 mb-4" style={{ background: "var(--primary)", color: "#fff" }}>
        <div className="row align-items-center g-3">
          <div className="col-12 col-md-8">
            <h2 className="fw-bold mb-2" style={{ color: "#FFDCDC" }}>Nuestra misión</h2>
            <p style={{ color: "#FFDCDC", margin: 0 }}>
              Donatón nació para resolver el caos logístico que ocurre durante emergencias y desastres naturales.
              Nuestra misión es centralizar la gestión de donaciones y necesidades, garantizando que cada recurso
              llegue a quien más lo necesita, en el menor tiempo posible y con total trazabilidad.
            </p>
          </div>
          <div className="col-12 col-md-4 text-center">
            <i className="bi bi-heart-pulse-fill" style={{ fontSize: "5rem", color: "#FFDCDC", opacity: 0.7 }}></i>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="mb-4">
        <h2 className="fw-bold mb-3">Nuestros principios</h2>
        <div className="row g-3">
          {valores.map((v, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-3">
              <div className="p-4 rounded-4 h-100 text-center" style={{ border: "1.5px solid var(--border)", background: "var(--surface)" }}>
                <i className={`bi ${v.icon} fs-2 mb-2`} style={{ color: "var(--accent)" }}></i>
                <div className="fw-bold mb-1" style={{ color: "var(--text-h)" }}>{v.titulo}</div>
                <div className="small" style={{ color: "var(--text-muted)" }}>{v.texto}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipo */}
      <div className="mb-2">
        <h2 className="fw-bold mb-3">Equipo de desarrollo</h2>
        <div className="row g-3">
          {equipo.map((p, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className="p-4 rounded-4 text-center h-100" style={{ border: "1.5px solid var(--border)", background: "var(--surface)" }}>
                <div className="mb-2 mx-auto d-flex align-items-center justify-content-center rounded-circle"
                  style={{ width: 56, height: 56, background: "var(--primary)", color: "#fff", fontSize: "1.5rem" }}>
                  <i className={`bi ${p.icono}`}></i>
                </div>
                <div className="fw-bold" style={{ color: "var(--text-h)" }}>{p.nombre}</div>
                <div className="small" style={{ color: "var(--text-muted)" }}>{p.rol}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}