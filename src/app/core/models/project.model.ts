/**
 * Representa un proyecto mostrado en el catálogo del portafolio.
 * Todos los textos son visibles para el usuario y deben escribirse en español.
 */
export interface Project {
  /** Identificador único y estable; se usa para el seguimiento en bucles. */
  id: string;
  /** Nombre corto del proyecto. */
  name: string;
  /** Descripción de una o dos frases sobre el problema y la solución. */
  description: string;
  /** Tecnologías principales mostradas como chips. */
  technologies: string[];
  /** Características o logros destacados del proyecto. */
  features: string[];
  /** URL pública del repositorio en GitHub. */
  repoUrl: string;
  /** URL de la aplicación desplegada. */
  demoUrl: string;
  /** Ruta opcional a una captura de pantalla dentro de `public/`. */
  image?: string;
}
