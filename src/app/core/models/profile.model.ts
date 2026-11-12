/** Nivel de dominio mostrado como barra de progreso (0-100). */
export interface Skill {
  name: string;
  level: number;
}

/** Métrica breve mostrada en la sección principal del perfil. */
export interface ProfileHighlight {
  value: string;
  label: string;
}

export type SocialIcon = 'github' | 'linkedin' | 'mail';

/** Enlace a una red profesional o al correo electrónico. */
export interface SocialLink {
  label: string;
  url: string;
  icon: SocialIcon;
}

/**
 * Información personal y profesional del portafolio.
 * Los textos son visibles para el usuario y deben escribirse en español.
 */
export interface Profile {
  /** Nombre completo visible en el encabezado y el título principal. */
  name: string;
  /** Nombre corto para la marca del encabezado. */
  shortName: string;
  /** Rol o programa académico actual. */
  role: string;
  /** Universidad o institución. */
  institution: string;
  /** Ciudad y país. */
  location: string;
  /** Frase de presentación destacada. */
  headline: string;
  /** Párrafo de presentación profesional. */
  summary: string;
  /** Ruta de la foto o avatar dentro de `public/`. */
  avatarUrl: string;
  /** Texto alternativo descriptivo para el avatar. */
  avatarAlt: string;
  /** Mensaje breve de disponibilidad. */
  availability: string;
  /** Enfoque profesional actual. */
  focus: string;
  /** Correo de contacto. */
  email: string;
  /** Título de la sección de contacto. */
  contactTitle: string;
  /** Mensaje de la sección de contacto. */
  contactMessage: string;
  /** Enlaces a redes y correo. */
  socialLinks: SocialLink[];
  /** Lenguajes de programación con su nivel. */
  languages: Skill[];
  /** Tecnologías y herramientas mostradas como chips. */
  technologies: string[];
  /** Habilidades blandas. */
  softSkills: string[];
  /** Métricas breves del perfil. */
  highlights: ProfileHighlight[];
}
