// DATOS DE EJEMPLO 
export const centrosData = [
  {
    id: "CA-001",
    nombre: "Centro de Acopio Santiago Centro",
    region: "Metropolitana",
    direccion: "Av. Libertador Bernardo O'Higgins 1234, Santiago",
    coordenadas: { lat: -33.4489, lng: -70.6693 },
    encargado: "Carolina Méndez",
    telefono: "+56 9 8765 4321",
    capacidadTotal: 5000,
    capacidadUsada: 3200,
    inventario: [
      { tipo: "Alimentos", cantidad: "1.200 kg" },
      { tipo: "Ropa y abrigo", cantidad: "8 cajas" },
      { tipo: "Insumos médicos", cantidad: "45 unidades" },
    ],
    estado: "Activo",
  },
  {
    id: "CA-002",
    nombre: "Centro de Acopio Puente Alto",
    region: "Metropolitana",
    direccion: "Calle Los Quillayes 456, Puente Alto",
    coordenadas: { lat: -33.5929, lng: -70.5759 },
    encargado: "Roberto Soto",
    telefono: "+56 9 7654 3210",
    capacidadTotal: 3000,
    capacidadUsada: 2800,
    inventario: [
      { tipo: "Alimentos", cantidad: "900 kg" },
      { tipo: "Artículos de higiene", cantidad: "120 unidades" },
    ],
    estado: "Capacidad crítica",
  },
  {
    id: "CA-003",
    nombre: "Centro de Acopio Maipú",
    region: "Metropolitana",
    direccion: "Av. Pajaritos 789, Maipú",
    coordenadas: { lat: -33.5113, lng: -70.7567 },
    encargado: "Valentina Rojas",
    telefono: "+56 9 6543 2109",
    capacidadTotal: 4000,
    capacidadUsada: 1500,
    inventario: [
      { tipo: "Ropa y abrigo", cantidad: "15 cajas" },
      { tipo: "Utensilios del hogar", cantidad: "30 unidades" },
    ],
    estado: "Activo",
  },
  {
    id: "CA-004",
    nombre: "Centro de Acopio Valparaíso",
    region: "Valparaíso",
    direccion: "Av. Argentina 321, Valparaíso",
    coordenadas: { lat: -33.0458, lng: -71.6197 },
    encargado: "Felipe Araya",
    telefono: "+56 9 5432 1098",
    capacidadTotal: 3500,
    capacidadUsada: 700,
    inventario: [
      { tipo: "Alimentos", cantidad: "300 kg" },
      { tipo: "Insumos médicos", cantidad: "18 unidades" },
    ],
    estado: "Activo",
  },
];

export const donacionesEjemplo = [
  {
    id: "DON-001",
    tipo: "Alimentos no perecibles",
    cantidad: "50",
    unidad: "kg",
    origen: "Empresa Sodimac",
    centroId: "CA-001",
    centro: "Santiago Centro",
    fecha: "2026-04-01",
    estado: "Entregado",
    detalles: {
      marca: "Marca Propia",
      fechaVencimiento: "2027-12-31",
      tipoAlimento: "Granos y legumbres",
      pesoUnitario: "1 kg",
      condicionesAlmacenamiento: "Lugar seco y fresco"
    }
  },
  {
    id: "DON-002",
    tipo: "Ropa y abrigo",
    cantidad: "15",
    unidad: "prendas",
    origen: "Municipalidad de Maipú",
    centroId: "CA-003",
    centro: "Maipú",
    fecha: "2026-04-03",
    estado: "En tránsito",
    detalles: {
      categoria: "Abrigo",
      tallas: ["S", "M", "L", "XL"],
      genero: "Unisex",
      estadoPrenda: "Nueva",
      material: "Poliéster y algodón",
      temporada: "Invierno"
    }
  },
  {
    id: "DON-003",
    tipo: "Insumos médicos",
    cantidad: "20",
    unidad: "unidades",
    origen: "Persona particular",
    centroId: "CA-002",
    centro: "Puente Alto",
    fecha: "2026-04-05",
    estado: "En acopio",
    detalles: {
      tipoInsumo: "Material de curación",
      descripcion: "Vendas, gasas y esparadrapos",
      fechaVencimiento: "2028-06-30",
      esterilizado: true,
      marca: "3M",
      lote: "MED-2026-04"
    }
  },
  {
    id: "DON-004",
    tipo: "Artículos de higiene",
    cantidad: "30",
    unidad: "kits",
    origen: "Fundación Aplicar",
    centroId: "CA-001",
    centro: "Santiago Centro",
    fecha: "2026-04-07",
    estado: "En acopio",
    detalles: {
      tipoKit: "Higiene personal completo",
      contenido: ["Jabón", "Shampoo", "Pasta dental", "Toalla", "Pañales"],
      destinatario: "Familias con niños",
      marca: "Varias"
    }
  },
  {
    id: "DON-005",
    tipo: "Ropa y abrigo",
    cantidad: "25",
    unidad: "prendas",
    origen: "Empresa Textil",
    centroId: "CA-004",
    centro: "Valparaíso",
    fecha: "2026-04-08",
    estado: "En tránsito",
    detalles: {
      categoria: "Ropa interior térmica",
      tallas: ["XS", "S", "M"],
      genero: "Femenino",
      estadoPrenda: "Nueva",
      material: "Algodón térmico",
      temporada: "Invierno"
    }
  },
];

export const necesidadesEjemplo = [
  {
    id: "NEC-001",
    recurso: "Alimentos no perecibles",
    cantidad: "200",
    unidad: "kg",
    ubicacion: "Sector Las Rosas, Concepción",
    coordenadas: { lat: -36.8262, lng: -73.0498 },
    fecha: "2026-04-05",
    urgencia: "Alta",
    estado: "Asignado",
    centroId: "CA-001",
    reportadoPor: "Municipalidad de Concepción",
    detalles: {
      tipoAlimento: "Granos, legumbres y aceite",
      beneficiarios: "Familias damnificadas por incendios",
      fechaEstimadaEntrega: "2026-04-10"
    }
  },
  {
    id: "NEC-002",
    recurso: "Frazadas y ropa de abrigo",
    cantidad: "50",
    unidad: "unidades",
    ubicacion: "Albergue Municipal, Talca",
    coordenadas: { lat: -35.4264, lng: -71.6553 },
    fecha: "2026-04-04",
    urgencia: "Media",
    estado: "Asignado",
    centroId: "CA-002",
    reportadoPor: "Voluntario en terreno",
    detalles: {
      tallasNecesarias: ["S", "M", "L", "XL"],
      tipoPrenda: "Frazadas y parkas",
      beneficiarios: "Personas mayores en albergue",
      temporada: "Invierno"
    }
  },
  {
    id: "NEC-003",
    recurso: "Medicamentos básicos",
    cantidad: "30",
    unidad: "unidades",
    ubicacion: "Campamento El Pino, Valparaíso",
    coordenadas: { lat: -33.0458, lng: -71.6197 },
    fecha: "2026-04-03",
    urgencia: "Alta",
    estado: "Pendiente",
    centroId: null,
    reportadoPor: "Centro médico local",
    detalles: {
      tipoMedicamento: "Analgésicos, antibióticos y antipiréticos",
      restricciones: "No vencidos, cajas cerradas",
      beneficiarios: "Familias del campamento"
    }
  },
  {
    id: "NEC-004",
    recurso: "Artículos de higiene",
    cantidad: "80",
    unidad: "kits",
    ubicacion: "Sector Cerro Alegre, Valparaíso",
    coordenadas: { lat: -33.0472, lng: -71.6167 },
    fecha: "2026-04-02",
    urgencia: "Baja",
    estado: "Cubierto",
    centroId: "CA-004",
    reportadoPor: "Voluntario en terreno",
    detalles: {
      contenidoKit: ["Jabón", "Shampoo", "Pasta dental", "Toallas húmedas"],
      destinatario: "Niños y adultos mayores",
      frecuencia: "Entrega única"
    }
  },
  {
    id: "NEC-005",
    recurso: "Alimentos no perecibles",
    cantidad: "120",
    unidad: "kg",
    ubicacion: "Población San Joaquín, Santiago",
    coordenadas: { lat: -33.4935, lng: -70.6322 },
    fecha: "2026-04-06",
    urgencia: "Alta",
    estado: "Asignado",
    centroId: "CA-001",
    reportadoPor: "Junta de vecinos",
    detalles: {
      tipoAlimento: "Leche en polvo, enlatados y cereales",
      beneficiarios: "Familias con niños pequeños",
      fechaEstimadaEntrega: "2026-04-12"
    }
  },
];

export const enviosEjemplo = [
  {
    id: "ENV-001",
    donacionId: "DON-001",
    centroId: "CA-001",
    centro: "Santiago Centro",
    destino: "Sector Las Rosas, Concepción",
    fechaSalida: "2026-04-02",
    fechaEntrega: "2026-04-03",
    estado: "Entregado",
    transportista: "Flota Donatón Norte",
  },
  {
    id: "ENV-002",
    donacionId: "DON-002",
    centroId: "CA-003",
    centro: "Maipú",
    destino: "Albergue Municipal, Talca",
    fechaSalida: "2026-04-04",
    fechaEntrega: null,
    estado: "En tránsito",
    transportista: "Flota Donatón Sur",
  },
  {
    id: "ENV-003",
    donacionId: "DON-003",
    centroId: "CA-002",
    centro: "Puente Alto",
    destino: "Campamento El Pino, Valparaíso",
    fechaSalida: null,
    fechaEntrega: null,
    estado: "Pendiente despacho",
    transportista: null,
  },
];

export const tiposRecurso = [
  "Alimentos no perecibles",
  "Insumos médicos",
  "Artículos de higiene",
  "Ropa y abrigo",
  "Donación Monetaria",
  "Utensilios del hogar",
];

export const unidadesPorTipo = {
  "Alimentos no perecibles": ["kg", "unidades", "cajas"],
  "Insumos médicos": ["unidades", "cajas", "sobres"],
  "Artículos de higiene": ["unidades", "kits", "cajas"],
  "Ropa y abrigo": ["prendas", "cajas", "kits"],
  "Donación Monetaria": ["CLP", "USD"],
  "Utensilios del hogar": ["unidades", "juegos", "cajas"],
};

// Campos adicionales por tipo de donación (más relevantes para la organización)
export const camposPorTipo = {
  "Alimentos no perecibles": [
    { name: "tipoAlimento", label: "Tipo de alimento", type: "select", options: ["Granos y legumbres", "Enlatados", "Aceites y condimentos", "Harinas y cereales", "Alimento infantil", "Otros"] },
    { name: "fechaVencimiento", label: "Fecha de vencimiento", type: "date" },
    { name: "condicionesAlmacenamiento", label: "Condiciones de almacenamiento", type: "select", options: ["Temperatura ambiente", "Refrigerado", "Lugar seco", "No aplica"] },
    { name: "tipoEnvase", label: "Tipo de envase", type: "select", options: ["Bolsa sellada", "Lata", "Caja", "Botella", "Otro"] },
    { name: "aptoConsumo", label: "¿Apto para consumo humano?", type: "select", options: ["Sí", "No", "No especificado"] },
  ],
  "Insumos médicos": [
    { name: "tipoInsumo", label: "Tipo de insumo", type: "select", options: ["Medicamentos", "Material de curación", "Equipos médicos", "Insumos de protección", "Oxígeno y respiración"] },
    { name: "fechaVencimiento", label: "Fecha de vencimiento", type: "date" },
    { name: "registroISP", label: "Registro ISP (si aplica)", type: "text", placeholder: "Ej: ISP-XXXXX" },
    { name: "condicionesAlmacenamiento", label: "Condiciones de almacenamiento", type: "select", options: ["Temperatura ambiente", "Cadena de frío", "Protegido de luz", "No aplica"] },
    { name: "esterilizado", label: "¿Viene esterilizado?", type: "select", options: ["Sí", "No", "No aplica"] },
  ],
  "Artículos de higiene": [
    { name: "tipoArticulo", label: "Tipo de artículo", type: "select", options: ["Kit personal", "Kit familiar", "Papel higiénico", "Jabones y shampoos", "Pañales", "Toallas femeninas", "Cepillos de dientes"] },
    { name: "cantidadPorUnidad", label: "Cantidad por unidad", type: "text", placeholder: "Ej: 6 unidades" },
    { name: "destinatario", label: "Destinatario preferente", type: "select", options: ["Niños", "Adultos", "Adultos mayores", "Familias", "Cualquiera"] },
  ],
  "Ropa y abrigo": [
    { name: "categoria", label: "Categoría", type: "select", options: ["Ropa interior", "Ropa exterior", "Abrigo", "Calzado", "Accesorios", "Frazadas y mantas"] },
    { name: "talla", label: "Talla(s)", type: "select", options: ["XS", "S", "M", "L", "XL", "XXL", "Única"] },
    { name: "genero", label: "Género", type: "select", options: ["Femenino", "Masculino", "Unisex", "Niños", "Niñas"] },
    { name: "estadoPrenda", label: "Estado de la prenda", type: "select", options: ["Nueva con etiqueta", "Nueva sin etiqueta", "Semi-nueva", "Usada en buen estado"] },
    { name: "temporada", label: "Temporada", type: "select", options: ["Invierno", "Verano", "Todo el año"] },
  ],
  "Donación Monetaria": [
    { name: "metodoPago", label: "Método de pago", type: "select", options: ["Transferencia bancaria", "Tarjeta débito/crédito", "Efectivo", "Otro"] },
    { name: "monto", label: "Monto en CLP", type: "text", placeholder: "Ej: 50000" },
    { name: "comprobante", label: "N° comprobante o referencia", type: "text", placeholder: "Ej: TRANS-2026-001" },
  ],
  "Utensilios del hogar": [
    { name: "categoria", label: "Categoría", type: "select", options: ["Ollas y sartenes", "Platos y cubiertos", "Electrodomésticos", "Muebles pequeños", "Ropa de cama", "Otros"] },
    { name: "estadoUtensilio", label: "Estado", type: "select", options: ["Nuevo", "Semi-nuevo", "Usado en buen estado"] },
    { name: "material", label: "Material predominante", type: "text", placeholder: "Ej: Acero inoxidable, Plástico" },
  ],
};

export const categoriasDonacion = [
  {
    icon: "bi-basket2-fill",
    nombre: "Alimentos",
    descripcion: "Alimentos no perecibles, conservas y productos básicos de primera necesidad.",
  },
  {
    icon: "bi-bandaid-fill",
    nombre: "Insumos médicos",
    descripcion: "Medicamentos, material de curación y equipos de primeros auxilios.",
  },
  {
    icon: "bi-droplet-fill",
    nombre: "Higiene",
    descripcion: "Artículos de aseo personal, pañales, papel higiénico y jabón.",
  },
  {
    icon: "bi-bag-fill",
    nombre: "Ropa y abrigo",
    descripcion: "Ropa de todo tipo, frazadas, sleeping y artículos de abrigo.",
  },
  {
    icon: "bi-currency-dollar",
    nombre: "Donaciones monetarias",
    descripcion: "Donaciones monetarias para compras directas según necesidades específicas.",
  },
  {
    icon: "bi-house-fill",
    nombre: "Utensilios del hogar",
    descripcion: "Ollas, platos, cubiertos y elementos básicos para el hogar.",
  },
];

// Cuentas de prueba para Login
export const cuentas = [
  { rut: "123456789", password: "admin" },
  { rut: "987654321", password: "user" },
];

export const team = [
  { nombre: "Angel Exzequiel Muñoz González", rol: "Desarrollador Frontend", icono: "bi-code-slash", color: "#DD4444" },
  { nombre: "Yasser Antonio Yamil Illanes", rol: "Desarrollador Backend", icono: "bi-server", color: "#3AB795" },
  { nombre: "Martin Ignacio Pizarro Estay", rol: "Desarrollador Backend", icono: "bi-database-gear", color: "#F48080" },
];

export const valores = [
  { icon: "bi-transparency", titulo: "Transparencia", texto: "Cada donación es rastreable desde el origen hasta su entrega. Nadie queda en la oscuridad." },
  { icon: "bi-shield-check", titulo: "Seguridad", texto: "Protegemos los datos de donantes y beneficiarios con autenticación centralizada y acceso controlado." },
  { icon: "bi-arrow-repeat", titulo: "Sostenibilidad", texto: "Nuestra arquitectura modular permite crecer sin comprometer la operación actual de la organización." },
  { icon: "bi-people-fill", titulo: "Coordinación", texto: "Conectamos donantes, empresas, municipalidades y equipos logísticos en un único sistema integrado." },
];

export const hitos = [
  { year: "2023", titulo: "Fundación de Donatón", texto: "Nace como proyecto universitario para resolver el caos logístico en emergencias." },
  { year: "2024", titulo: "Primeros centros activos", texto: "Integramos 12 centros de acopio en la Región Metropolitana con trazabilidad completa." },
  { year: "2025", titulo: "Expansión nacional", texto: "Llegamos a 38 centros activos en 6 regiones del país, con más de 5.200 familias beneficiadas." },
  { year: "2026", titulo: "Plataforma integral", texto: "Lanzamos back-office, transparencia pública y reportes en tiempo real para toda la comunidad." },
];

export const impactoStats = [
  { icono: "bi-heart-fill", valor: "$12.400 M", texto: "Donaciones recibidas", detalle: "Acumulado 2024-2026" },
  { icono: "bi-building-fill", valor: "38", texto: "Centros de acopio", detalle: "Activos en todo Chile" },
  { icono: "bi-people-fill", valor: "5.200+", texto: "Familias beneficiadas", detalle: "Directamente impactadas" },
  { icono: "bi-truck", valor: "920", texto: "Envíos completados", detalle: "Con éxito a destino" },
  { icono: "bi-graph-up-arrow", valor: "94%", texto: "Eficiencia operativa", detalle: "Recursos a destino final" },
  { icono: "bi-currency-dollar", valor: "$0", texto: "Gastos administrativos", detalle: "100% voluntario" },
];

export const distribucionFondos = [
  { concepto: "Ayuda directa a familias", porcentaje: 78, color: "#DD4444" },
  { concepto: "Logística y transporte", porcentaje: 12, color: "#F48080" },
  { concepto: "Capacitación voluntarios", porcentaje: 6, color: "#3AB795" },
  { concepto: "Administración", porcentaje: 4, color: "#194B4F" },
];

export const reportes = [
  { titulo: "Reporte Anual 2025", fecha: "Enero 2026", tipo: "PDF", size: "2.4 MB", icono: "bi-file-earmark-pdf-fill", color: "#DD4444" },
  { titulo: "Estado Financiero Q4 2025", fecha: "Diciembre 2025", tipo: "PDF", size: "1.8 MB", icono: "bi-file-earmark-pdf-fill", color: "#DD4444" },
  { titulo: "Balance Social 2025", fecha: "Noviembre 2025", tipo: "PDF", size: "3.1 MB", icono: "bi-file-earmark-pdf-fill", color: "#DD4444" },
  { titulo: "Auditoría Externa 2025", fecha: "Octubre 2025", tipo: "PDF", size: "4.2 MB", icono: "bi-file-earmark-check-fill", color: "#3AB795" },
  { titulo: "Informe de Impacto por Región", fecha: "Septiembre 2025", tipo: "XLSX", size: "1.2 MB", icono: "bi-file-earmark-spreadsheet-fill", color: "#194B4F" },
  { titulo: "Memoria de Gestión 2024-2025", fecha: "Agosto 2025", tipo: "PDF", size: "5.7 MB", icono: "bi-file-earmark-text-fill", color: "#F48080" },
];

export const gobernanza = [
  { nombre: "Angel Exzequiel Muñoz González", cargo: "Lider Corporativo", img: null },
  { nombre: "Yasser Antonio Yamil Illanes", cargo: "Lider de Operaciones y Logistica", img: null },
  { nombre: "Martin Ignacio Pizarro Estay", cargo: "Lider de Relaciones Públicas", img: null },
];

export const pasosFuncionamiento = [
  { num: "1", icon: "bi-gift-fill", titulo: "Realizas tu donación", texto: "Solo respondes un formulario corto con el tipo de recurso, cantidad, etc. Todo queda documentado en el sistema." },
  { num: "2", icon: "bi-building-fill", titulo: "Asignación al centro", texto: "La plataforma asigna tu donación al centro de acopio que más necesita de tu donación." },
  { num: "3", icon: "bi-truck", titulo: "Logística y traslado", texto: "El equipo logístico de Donatón gestiona el transporte y la distribución a los centros." },
  { num: "4", icon: "bi-check-circle-fill", titulo: "Confirmación de entrega", texto: "Te informaremos cuando tu donación llegue a aquellos que lo necesitan." },
];

export const estadoColor = {
  "Entregado": "#3AB795",
  "En tránsito": "#0dcaf0",
  "En acopio": "#FFC107",
  "Pendiente": "#DD4444",
  "Asignado": "#0d6efd",
  "Cubierto": "#3AB795",
};

export const CHART_COLORS = ["#DD4444", "#F48080", "#3AB795", "#194B4F"];

export const urgenciaColorMap = { Alta: "danger", Media: "warning", Baja: "secondary" };
export const estadoNecColorMap = { Pendiente: "danger", Asignado: "warning", Cubierto: "success" };