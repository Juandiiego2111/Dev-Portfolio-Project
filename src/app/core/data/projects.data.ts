import type { Project } from '../models/project.model';

/**
 * ---------------------------------------------------------------------------
 * Catálogo de proyectos del portafolio.
 *
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
    id: 'uceva-clean-architecture',
    name: 'Clean Architecture en Angular',
    description:
      'Taller de curso realizado en equipo que aplica arquitectura limpia en un ' +
      'cliente Angular. El desarrollo se organiza en las capas domain, ' +
      'application, infrastructure y presentation.',
    technologies: [
      'Angular 20',
      'TypeScript',
      'Jest',
      'Bootstrap',
      'Clean Architecture',
      'GitHub Actions',
    ],
    features: [
      'Módulos de usuarios, productos, cursos, pedidos y libros',
      'Repositorios intercambiables (backend Node, Spring Boot o datos en memoria)',
      'La demo en GitHub Pages usa datos de ejemplo',
      '170 pruebas unitarias con cobertura del 100 %',
      'Despliegue automático con GitHub Actions',
    ],
    repoUrl: 'https://github.com/Juandiiego2111/Uceva-Angular-Taller-Clean-Architecture',
    demoUrl: 'https://juandiiego2111.github.io/Uceva-Angular-Taller-Clean-Architecture/',
  },
  {
    id: 'taller-4-astro-angular-ssg-spa',
    name: 'Taller 4: Astro SSG + Angular SPA',
    description:
      'Monorepo del curso que compara dos estrategias de interfaz: un sitio estático ' +
      'generado con Astro y un cliente SPA publicado con Angular. Ambas aplicaciones ' +
      'se publican juntas.',
    technologies: ['Astro 5', 'Angular 20', 'TypeScript', 'Jest', 'Bootstrap', 'GitHub Actions'],
    features: [
      'Astro genera las vistas en el build',
      'El cliente Angular se publica en la subruta /client/ con enrutamiento hash',
      'El cliente usa datos de ejemplo en GitHub Pages',
      '85 pruebas unitarias',
      'Un solo workflow construye y publica ambas apps',
    ],
    repoUrl: 'https://github.com/Juandiiego2111/Taller-4-Astro-Angular-SSG-SPA',
    demoUrl: 'https://juandiiego2111.github.io/Taller-4-Astro-Angular-SSG-SPA/',
  },
  {
    id: 'devhub-pipelines-hash',
    name: 'DevHub',
    description:
      'Laboratorio de pipelines de integración y despliegue desarrollado en equipo. ' +
      'La aplicación Angular incluye páginas de inicio, proyectos y contacto con tema ' +
      'oscuro.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Angular Router', 'Vitest'],
    features: [
      'Tres páginas con navegación',
      'Enrutamiento hash para funcionar en GitHub Pages',
      'Pruebas unitarias',
      'Pipeline de GitHub Actions con build, deploy y verify',
    ],
    repoUrl: 'https://github.com/Juandiiego2111/lab-pipelines-hash',
    demoUrl: 'https://juandiiego2111.github.io/lab-pipelines-hash/',
  },
  {
    id: 'parcial-ii-microfrontends-biblioteca',
    name: 'Biblioteca con Microfrontends',
    description:
      'Parcial II de Arquitectura de Software con David Mora Duque y Juan Pablo Devia, ' +
      'que construye un sistema de biblioteca con microfrontends. El autor desarrolló ' +
      'la vertical de socios sobre un host Angular que carga libros, socios y préstamos ' +
      'con Webpack Module Federation. Los backends originales (Node.js y Spring Boot) no ' +
      'se despliegan.',
    technologies: [
      'Angular 20',
      'Webpack Module Federation',
      'TypeScript',
      'Clean Architecture',
      'GitHub Actions',
    ],
    features: [
      'Host y tres microfrontends publicados en un solo sitio',
      'Cada microfrontend aplica arquitectura limpia',
      'La demo usa datos de ejemplo (los microservicios no corren en Pages)',
      'Despliegue automático con verificación',
    ],
    repoUrl: 'https://github.com/Juandiiego2111/Parcial-II-Microfrontends-Biblioteca',
    demoUrl: 'https://juandiiego2111.github.io/Parcial-II-Microfrontends-Biblioteca/',
  },
];
