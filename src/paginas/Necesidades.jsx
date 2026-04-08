import { useState } from "react";
import { centrosData } from "./Centros.jsx";

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

export default function Necesidades() {
  const [form, setForm] = useState({
    recurso: "",
    cantidad: "",
    unidad: "",
    ubicacion: "",
    urgencia: "Media",
    descripcion: "",
    reportadoPor: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRecursoChange = (e) => {
    const nuevoRecurso = e.target.value;
    const unidades = unidadesPorTipo[nuevoRecurso] || [];

    setForm({
      ...form,
      recurso: nuevoRecurso,
      unidad: unidades[0] || "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);

    setTimeout(() => setEnviado(false), 4000);

    setForm({
      recurso: "",
      cantidad: "",
      unidad: "",
      ubicacion: "",
      urgencia: "Media",
      descripcion: "",
      reportadoPor: "",
    });
  };

  const unidadesDisponibles = unidadesPorTipo[form.recurso] || [];

  return (
    <div className="necesidades">
      <h1>Necesidades en Terreno</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        Registra necesidades para priorizar la ayuda.
      </p>

      <div className="row g-4">
        <div className="col-12">
          <div
            className="p-4 rounded-4"
            style={{
              border: "1.5px solid var(--border)",
              background: "var(--surface)",
            }}
          >
            <h2 className="fw-bold fs-5 mb-3">
              <i
                className="bi bi-flag-fill me-2"
                style={{ color: "var(--primary)" }}
              ></i>
              Reportar necesidad
            </h2>

            {enviado && (
              <div className="alert alert-success d-flex align-items-center gap-2 small">
                <i className="bi bi-check-circle-fill"></i>
                Necesidad reportada correctamente
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Reportado por */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Reportado por
                </label>
                <input
                  type="text"
                  name="reportadoPor"
                  className="form-control"
                  placeholder="Municipalidad, voluntario..."
                  value={form.reportadoPor}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Tipo recurso */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Recurso necesitado
                </label>
                <select
                  name="recurso"
                  className="form-select"
                  value={form.recurso}
                  onChange={handleRecursoChange}
                  required
                >
                  <option value="">Selecciona...</option>
                  {tiposRecurso.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Cantidad + unidad */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Cantidad requerida
                </label>

                <div className="input-group">
                  <input
                    type="number"
                    name="cantidad"
                    className="form-control"
                    placeholder="Ej: 100"
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
                    disabled={!form.recurso}
                  >
                    {unidadesDisponibles.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Centro de Acopio */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Centro de acopio
                </label>
                <select
                  name="centroAcopio"
                  className="form-select"
                  value={form.centroAcopio}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona...</option>
                  {centrosData.map((centro) => (
                    <option key={centro.id} value={centro.id}>
                      {centro.nombre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Urgencia */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Nivel de urgencia
                </label>
                <select
                  name="urgencia"
                  className="form-select"
                  value={form.urgencia}
                  onChange={handleChange}
                >
                  <option value="Alta">Alta</option>
                  <option value="Media">Media</option>
                  <option value="Baja">Baja</option>
                </select>
              </div>

              {/* Descripción */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Descripción
                </label>
                <textarea
                  name="descripcion"
                  className="form-control"
                  rows={2}
                  placeholder="Opcional"
                  value={form.descripcion}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                <i className="bi bi-send-fill me-2"></i>
                Enviar reporte
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}