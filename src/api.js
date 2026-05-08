// API Service Layer
// Currently returns mock data from Datos.jsx.
// When the Django REST Framework backend is ready, replace each function body
// with a real fetch() call to the corresponding endpoint.

import {
  centrosData,
  donacionesEjemplo,
  necesidadesEjemplo,
  enviosEjemplo,
  tiposRecurso,
  unidadesPorTipo,
  camposPorTipo,
  categoriasDonacion,
  cuentas,
  team,
  valores,
  hitos,
  impactoStats,
  distribucionFondos,
  reportes,
  gobernanza,
  pasosFuncionamiento,
  estadoColor,
  CHART_COLORS,
  urgenciaColorMap,
  estadoNecColorMap,
} from "./componentes/Datos.jsx";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

async function request(endpoint, options = {}) {
  // TODO: Replace mock with real fetch when backend is ready
  // const response = await fetch(`${BASE_URL}${endpoint}`, {
  //   headers: { "Content-Type": "application/json", ...options.headers },
  //   ...options,
  // });
  // if (!response.ok) throw new Error(`API error: ${response.status}`);
  // return response.json();
  throw new Error("API not connected — using mock data");
}

// ── Centros ──────────────────────────────────────────────────

export async function getCentros() {
  return Promise.resolve(centrosData);
}

export async function getCentroById(id) {
  return Promise.resolve(centrosData.find((c) => c.id === id) || null);
}

// ── Donaciones ───────────────────────────────────────────────

export async function getDonaciones() {
  return Promise.resolve(donacionesEjemplo);
}

export async function crearDonacion(data) {
  return Promise.resolve({ id: "DON-" + Date.now(), ...data, estado: "En acopio" });
}

// ── Necesidades ──────────────────────────────────────────────

export async function getNecesidades() {
  return Promise.resolve(necesidadesEjemplo);
}

export async function crearNecesidad(data) {
  return Promise.resolve({ id: "NEC-" + Date.now(), ...data, estado: "Pendiente" });
}

// ── Envíos ───────────────────────────────────────────────────

export async function getEnvios() {
  return Promise.resolve(enviosEjemplo);
}

// ── Catálogos / Estáticos ───────────────────────────────────

export async function getTiposRecurso() {
  return Promise.resolve(tiposRecurso);
}

export async function getUnidadesPorTipo() {
  return Promise.resolve(unidadesPorTipo);
}

export async function getCamposPorTipo() {
  return Promise.resolve(camposPorTipo);
}

export async function getCategoriasDonacion() {
  return Promise.resolve(categoriasDonacion);
}

export async function getPasosFuncionamiento() {
  return Promise.resolve(pasosFuncionamiento);
}

// ── Transparencia ────────────────────────────────────────────

export async function getImpactoStats() {
  return Promise.resolve(impactoStats);
}

export async function getDistribucionFondos() {
  return Promise.resolve(distribucionFondos);
}

export async function getReportes() {
  return Promise.resolve(reportes);
}

export async function getGobernanza() {
  return Promise.resolve(gobernanza);
}

// ── Nosotros ─────────────────────────────────────────────────

export async function getTeam() {
  return Promise.resolve(team);
}

export async function getValores() {
  return Promise.resolve(valores);
}

export async function getHitos() {
  return Promise.resolve(hitos);
}

// ── Login ─────────────────────────────────────────────────────

export async function login(rut, password) {
  // Simula validación local; reemplazar con POST al backend
  const valida = cuentas.some((c) => c.rut === rut && c.password === password);
  if (!valida) throw new Error("Credenciales inválidas");
  return Promise.resolve({ rut, nombre: "Usuario Donatón", token: "mock-token" });
}

// ── Constantes exportadas directamente ────────────────────────

export {
  estadoColor,
  CHART_COLORS,
  urgenciaColorMap,
  estadoNecColorMap,
};

export default request;
