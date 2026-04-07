import { useState } from "react";

const centrosData = [
  {
    id: "CA-001", nombre: "Centro de Acopio Santiago Centro", region: "Metropolitana",
    direccion: "Av. Libertador Bernardo O'Higgins 1234, Santiago",
    encargado: "Carolina Méndez", telefono: "+56 9 8765 4321",
    capacidadTotal: 5000, capacidadUsada: 3200,
    inventario: [
      { tipo: "Alimentos", cantidad: "1.200 kg" },
      { tipo: "Ropa y abrigo", cantidad: "8 cajas" },
      { tipo: "Insumos médicos", cantidad: "45 unidades" },
    ],
    enviosPendientes: 3, estado: "Activo",
  },
  {
    id: "CA-002", nombre: "Centro de Acopio Puente Alto", region: "Metropolitana",
    direccion: "Calle Los Quillayes 456, Puente Alto",
    encargado: "Roberto Soto", telefono: "+56 9 7654 3210",
    capacidadTotal: 3000, capacidadUsada: 2800,
    inventario: [
      { tipo: "Alimentos", cantidad: "900 kg" },
      { tipo: "Artículos de higiene", cantidad: "120 unidades" },
    ],
    enviosPendientes: 5, estado: "Capacidad crítica",
  },
  {
    id: "CA-003", nombre: "Centro de Acopio Maipú", region: "Metropolitana",
    direccion: "Av. Pajaritos 789, Maipú",
    encargado: "Valentina Rojas", telefono: "+56 9 6543 2109",
    capacidadTotal: 4000, capacidadUsada: 1500,
    inventario: [
      { tipo: "Ropa y abrigo", cantidad: "15 cajas" },
      { tipo: "Utensilios del hogar", cantidad: "30 unidades" },
    ],
    enviosPendientes: 1, estado: "Activo",
  },
  {
    id: "CA-004", nombre: "Centro de Acopio Valparaíso", region: "Valparaíso",
    direccion: "Av. Argentina 321, Valparaíso",
    encargado: "Felipe Araya", telefono: "+56 9 5432 1098",
    capacidadTotal: 3500, capacidadUsada: 700,
    inventario: [
      { tipo: "Alimentos", cantidad: "300 kg" },
      { tipo: "Insumos médicos", cantidad: "18 unidades" },
    ],
    enviosPendientes: 0, estado: "Activo",
  },
];

const estadoBadge = {
  "Activo": "success",
  "Capacidad crítica": "danger",
};

export default function Centros() {
  const [seleccionado, setSeleccionado] = useState(null);
  const [filtroRegion, setFiltroRegion] = useState("Todas");

  const regiones = ["Todas", ...new Set(centrosData.map((c) => c.region))];
  const centrosFiltrados = filtroRegion === "Todas" ? centrosData : centrosData.filter((c) => c.region === filtroRegion);

  return (
    <div className="centros">
      <h1>Centros de Acopio</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        Administra los centros de acopio de Donatón: consulta su inventario actual, capacidad disponible y los envíos pendientes de cada uno.
      </p>

      {/* Filtro por región */}
      <div className="d-flex gap-2 flex-wrap mb-4">
        {regiones.map((r) => (
          <button key={r}
            className={`btn btn-sm ${filtroRegion === r ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setFiltroRegion(r)}>
            {r}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {/* Lista de centros */}
        <div className="col-12 col-lg-5">
          <div className="d-flex flex-column gap-3">
            {centrosFiltrados.map((c) => {
              const pct = Math.round((c.capacidadUsada / c.capacidadTotal) * 100);
              const barColor = pct >= 85 ? "danger" : pct >= 60 ? "warning" : "success";
              return (
                <div key={c.id}
                  className="p-4 rounded-4"
                  style={{
                    border: `1.5px solid ${seleccionado?.id === c.id ? "var(--primary)" : "var(--border)"}`,
                    background: "var(--surface)",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                  onClick={() => setSeleccionado(seleccionado?.id === c.id ? null : c)}>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <span className="small fw-semibold" style={{ color: "var(--text-muted)" }}>{c.id}</span>
                      <div className="fw-bold" style={{ color: "var(--text-h)" }}>{c.nombre}</div>
                      <div className="small" style={{ color: "var(--text-muted)" }}>
                        <i className="bi bi-geo-alt-fill me-1" style={{ color: "var(--accent)" }}></i>{c.region}
                      </div>
                    </div>
                    <span className={`badge bg-${estadoBadge[c.estado]}`}>{c.estado}</span>
                  </div>
                  <div className="mb-1 small d-flex justify-content-between">
                    <span>Capacidad usada</span>
                    <span className="fw-semibold">{c.capacidadUsada.toLocaleString()} / {c.capacidadTotal.toLocaleString()} kg</span>
                  </div>
                  <div className="progress" style={{ height: 8 }}>
                    <div className={`progress-bar bg-${barColor}`} style={{ width: `${pct}%` }}></div>
                  </div>
                  <div className="d-flex justify-content-between mt-2 small" style={{ color: "var(--text-muted)" }}>
                    <span><i className="bi bi-truck me-1"></i>{c.enviosPendientes} envíos pendientes</span>
                    <span>{pct}% ocupado</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detalle del centro seleccionado */}
        <div className="col-12 col-lg-7">
          {seleccionado ? (
            <div className="p-4 rounded-4 h-100" style={{ border: "1.5px solid var(--border)", background: "var(--surface)" }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="fw-bold fs-5 mb-0">{seleccionado.nombre}</h2>
                <span className={`badge bg-${estadoBadge[seleccionado.estado]}`}>{seleccionado.estado}</span>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-12">
                  <div className="small" style={{ color: "var(--text-muted)" }}>
                    <i className="bi bi-geo-alt-fill me-1" style={{ color: "var(--accent)" }}></i>{seleccionado.direccion}
                  </div>
                </div>
                <div className="col-6">
                  <div className="small" style={{ color: "var(--text-muted)" }}>
                    <i className="bi bi-person-fill me-1" style={{ color: "var(--accent)" }}></i>Encargado/a
                  </div>
                  <div className="fw-semibold">{seleccionado.encargado}</div>
                </div>
                <div className="col-6">
                  <div className="small" style={{ color: "var(--text-muted)" }}>
                    <i className="bi bi-telephone-fill me-1" style={{ color: "var(--accent)" }}></i>Contacto
                  </div>
                  <div className="fw-semibold">{seleccionado.telefono}</div>
                </div>
              </div>

              <h3 className="fs-6 fw-bold mb-2" style={{ color: "var(--text-h)" }}>
                <i className="bi bi-box-seam-fill me-2"></i>Inventario actual
              </h3>
              <table className="table table-sm mb-4">
                <thead>
                  <tr>
                    <th>Tipo de recurso</th>
                    <th>Cantidad disponible</th>
                  </tr>
                </thead>
                <tbody>
                  {seleccionado.inventario.map((item, i) => (
                    <tr key={i}>
                      <td>{item.tipo}</td>
                      <td className="fw-semibold">{item.cantidad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h3 className="fs-6 fw-bold mb-2" style={{ color: "var(--text-h)" }}>
                <i className="bi bi-truck me-2"></i>Envíos pendientes
              </h3>
              {seleccionado.enviosPendientes === 0 ? (
                <div className="alert alert-success py-2 small">No hay envíos pendientes para este centro.</div>
              ) : (
                <div className="alert alert-warning py-2 small">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  Este centro tiene <strong>{seleccionado.enviosPendientes}</strong> envío(s) pendiente(s) de despacho.
                </div>
              )}
            </div>
          ) : (
            <div className="p-5 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center text-center"
              style={{ border: "1.5px dashed var(--border)", background: "var(--surface)" }}>
              <i className="bi bi-building fs-1 mb-3" style={{ color: "var(--border)" }}></i>
              <p style={{ color: "var(--text-muted)" }}>Selecciona un centro de acopio para ver su detalle, inventario y envíos pendientes.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}