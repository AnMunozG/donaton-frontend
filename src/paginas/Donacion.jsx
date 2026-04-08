import { useState } from "react";

const tiposRecurso = [
  "Alimentos no perecibles",
  "Insumos médicos",
  "Artículos de higiene",
  "Ropa y abrigo",
  "Donación Monetaria",
];

const unidadesPorTipo = {
  "Alimentos no perecibles": ["kg", "unidades"],
  "Insumos médicos": ["unidades", "cajas"],
  "Artículos de higiene": ["unidades", "cajas"],
  "Ropa y abrigo": ["unidades", "cajas"],
  "Donación Monetaria": ["CLP"],
};

export default function Donacion() {
  const [form, setForm] = useState({
    tipo: "",
    cantidad: "",
    unidad: "",
    origen: "",
    tipoOrigen: "persona",
    centro: "",
    fecha: "",
    notas: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleTipoChange = (e) => {
    const nuevoTipo = e.target.value;
    const unidades = unidadesPorTipo[nuevoTipo] || [];

    setForm({
      ...form,
      tipo: nuevoTipo,
      unidad: unidades[0] || "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);

    setTimeout(() => setEnviado(false), 4000);

    setForm({
      tipo: "",
      cantidad: "",
      unidad: "",
      origen: "",
      tipoOrigen: "persona",
      centro: "",
      fecha: "",
      notas: "",
    });
  };

  const unidadesDisponibles = unidadesPorTipo[form.tipo] || [];

  return (
    <div className="donacion">
      <h1>Gestión de Donaciones</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        Registra tu donación y haz seguimiento del flujo completo.
      </p>

      <div className="row g-4">
        {/* Formulario */}
        <div className="col-12 col-lg-12">
          <div className="p-4 rounded-4" style={{ border: "1.5px solid var(--border)", background: "var(--surface)" }}>
            <h2 className="fw-bold mb-3 fs-5">
              <i className="bi bi-gift-fill me-2" style={{ color: "var(--primary)" }}></i>
              Nueva donación
            </h2>

            {enviado && (
              <div className="alert alert-success d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill"></i>
                ¡Donación registrada!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Tipo donante */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Tipo de donante</label>
                <select name="tipoOrigen" className="form-select" value={form.tipoOrigen} onChange={handleChange}>
                  <option value="persona">Persona</option>
                  <option value="empresa">Empresa</option>
                  <option value="municipalidad">Municipalidad</option>
                </select>
              </div>

              {/* RUT */}
              <div className="mb-3">
                <label className="form-label fw-semibold">RUT (sin puntos ni guion)</label>
                <input type="text" name="origen" className="form-control" placeholder="123456789" value={form.origen} onChange={handleChange} required />
              </div>

              {/* Tipo recurso */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Tipo de recurso</label>
                <select name="tipo" className="form-select" value={form.tipo} onChange={handleTipoChange} required>
                  <option value="">Selecciona...</option>
                  {tiposRecurso.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Cantidad + unidad */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Cantidad</label>
                <div className="input-group">
                  <input
                    type="number"
                    name="cantidad"
                    className="form-control"
                    placeholder="Ej: 10"
                    min="1"
                    value={form.cantidad}
                    onChange={handleChange}
                    required
                  />

                  <select
                    name="unidad"
                    className="form-select"
                    style={{ maxWidth: 110 }}
                    value={form.unidad}
                    onChange={handleChange}
                    disabled={!form.tipo}
                  >
                    {unidadesDisponibles.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notas */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Observaciones</label>
                <textarea
                  name="notas"
                  className="form-control"
                  rows={2}
                  placeholder="Opcional"
                  value={form.notas}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                <i className="bi bi-send-fill me-2"></i>Registrar donación
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}