import type { Project } from '../models/project.model';

/**
 * ---------------------------------------------------------------------------
 * Catálogo de proyectos del portafolio.
 *
 * TODO: editar los proyectos 2 a 5 con la información real. Mantén el mismo
 * formato de URLs:
 *   - Repositorio: https://github.com/Juandiiego2111/<repo>
 *   - Demo:        https://juandiiego2111.github.io/<repo>/
 * Los cambios en este archivo se reflejan automáticamente en el catálogo.
 * ---------------------------------------------------------------------------
 */
export const PROJECTS: readonly Project[] = [
  {
    id: 'dev-portfolio',
    name: 'Portafolio Dev',
    description:
      'Portafolio personal que reúne cinco proyectos en un catálogo interactivo. ' +
      'El contenido vive en datos tipados y cada cambio se valida y despliega ' +
      'automáticamente mediante un pipeline de CI/CD.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'GitHub Actions', 'GitHub Pages'],
    features: [
      'Arquitectura standalone con Angular y signals',
      'Pipeline de tests, build y despliegue automático',
      'Diseño responsive, accesible y con tema claro/oscuro',
      'Contenido centralizado en archivos de datos editables',
    ],
    repoUrl: 'https://github.com/Juandiiego2111/Dev-Portfolio-Project',
    demoUrl: 'https://juandiiego2111.github.io/Dev-Portfolio-Project/',
  },
  {
    // TODO: editar proyecto 2 (nombre, descripción, tecnologías, características y URLs).
    id: 'sistema-gestion-academica',
    name: 'Sistema de Gestión Académica',
    description:
      'Aplicación web para administrar estudiantes, cursos y calificaciones, con ' +
      'roles diferenciados y reportes académicos consolidados.',
    technologies: ['Angular', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    features: [
      'Registro y seguimiento de estudiantes y cursos',
      'Autenticación con roles de administrador y docente',
      'Cálculo automatizado de promedios y reportes',
      'API REST documentada y validada con pruebas',
    ],
    repoUrl: 'https://github.com/Juandiiego2111/sistema-gestion-academica',
    demoUrl: 'https://juandiiego2111.github.io/sistema-gestion-academica/',
  },
  {
    // TODO: editar proyecto 3 (nombre, descripción, tecnologías, características y URLs).
    id: 'plataforma-inventario',
    name: 'Plataforma de Inventario',
    description:
      'Sistema de control de inventario para pequeños negocios, enfocado en la ' +
      'trazabilidad de productos, alertas de stock y visualización de movimientos.',
    technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Gestión de productos, categorías y proveedores',
      'Alertas automáticas de stock mínimo',
      'Panel con indicadores de entradas y salidas',
      'Historial de movimientos con filtros de búsqueda',
    ],
    repoUrl: 'https://github.com/Juandiiego2111/plataforma-inventario',
    demoUrl: 'https://juandiiego2111.github.io/plataforma-inventario/',
  },
  {
    // TODO: editar proyecto 4 (nombre, descripción, tecnologías, características y URLs).
    id: 'api-reservas',
    name: 'API de Reservas',
    description:
      'API REST para gestionar la reserva de espacios institucionales, con control ' +
      'de disponibilidad, autenticación y documentación interactiva.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    features: [
      'Validación de disponibilidad por franjas horarias',
      'Autenticación y autorización con JWT',
      'Documentación de endpoints con OpenAPI',
      'Pruebas de integración sobre la base de datos',
    ],
    repoUrl: 'https://github.com/Juandiiego2111/api-reservas',
    demoUrl: 'https://juandiiego2111.github.io/api-reservas/',
  },
  {
    // TODO: editar proyecto 5 (nombre, descripción, tecnologías, características y URLs).
    id: 'tablero-analitica',
    name: 'Tablero de Analítica',
    description:
      'Dashboard interactivo que transforma datos operativos en indicadores ' +
      'visuales para apoyar la toma de decisiones académicas y administrativas.',
    technologies: ['Angular', 'Python', 'FastAPI', 'Chart.js'],
    features: [
      'Indicadores clave con actualización por periodos',
      'Filtros dinámicos por sede, programa y fecha',
      'Visualizaciones responsivas y accesibles',
      'Exportación de reportes en formato CSV',
    ],
    repoUrl: 'https://github.com/Juandiiego2111/tablero-analitica',
    demoUrl: 'https://juandiiego2111.github.io/tablero-analitica/',
  },
];
