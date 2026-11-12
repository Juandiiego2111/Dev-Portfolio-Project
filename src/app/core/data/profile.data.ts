import type { Profile } from '../models/profile.model';

/**
 * ---------------------------------------------------------------------------
 * TODO: editar este archivo con los datos reales del autor.
 * Todo el contenido visible del perfil (textos, enlaces, habilidades y
 * métricas) se alimenta desde aquí; no hace falta tocar los templates.
 * ---------------------------------------------------------------------------
 */
export const PROFILE: Profile = {
  name: 'Juan Diego Rodríguez Ortiz',
  shortName: 'Juan Diego',

  role: 'Estudiante de Ingeniería de Sistemas',
  institution: 'Unidad Central del Valle del Cauca (UCEVA)',
  // TODO: editar (verificar ciudad y país).
  location: 'Tuluá, Valle del Cauca, Colombia',

  headline: 'Convierto ideas en software claro, útil y desplegable.',
  summary:
    'Tengo 20 años y curso 8.º semestre de Ingeniería de Sistemas en la UCEVA. ' +
    'Me apasiona construir aplicaciones web completas: desde el modelado de datos y ' +
    'la arquitectura hasta la interfaz, las pruebas y el despliegue. Este portafolio ' +
    'reúne cinco proyectos académicos y personales que muestran mi proceso de ' +
    'aprendizaje y mi enfoque en las buenas prácticas de ingeniería de software.',

  // TODO: reemplazar `avatar.svg` por tu fotografía (por ejemplo, `avatar.jpg`).
  avatarUrl: 'avatar.svg',
  avatarAlt: 'Avatar ilustrado de Juan Diego Rodríguez Ortiz',

  availability: 'Disponible para proyectos académicos y colaboraciones',
  focus: 'Desarrollo web full stack · Arquitectura de software · CI/CD',

  // TODO: editar el correo de contacto.
  email: 'juan.diego@uceva.edu.co',
  contactTitle: '¿Construimos algo juntos?',
  contactMessage:
    'Estoy abierto a prácticas, proyectos colaborativos y conversaciones sobre ' +
    'desarrollo web, arquitectura y automatización. Escríbeme y hablemos.',

  socialLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/Juandiiego2111',
      icon: 'github',
    },
    {
      // TODO: editar o eliminar el perfil de LinkedIn.
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/juan-diego-placeholder',
      icon: 'linkedin',
    },
    {
      // TODO: editar el correo (también debes actualizarlo en `email`).
      label: 'Correo',
      url: 'mailto:juan.diego@uceva.edu.co',
      icon: 'mail',
    },
  ],

  // TODO: ajustar los niveles (0-100) según tu experiencia real.
  languages: [
    { name: 'TypeScript', level: 85 },
    { name: 'Java', level: 78 },
    { name: 'Python', level: 72 },
    { name: 'SQL', level: 75 },
    { name: 'JavaScript', level: 82 },
  ],

  // TODO: editar las tecnologías y herramientas que quieras destacar.
  technologies: [
    'Angular',
    'Node.js',
    'Spring Boot',
    'PostgreSQL',
    'Git',
    'GitHub Actions',
    'Docker',
    'REST APIs',
    'HTML5',
    'SCSS',
  ],

  // TODO: editar tus habilidades blandas.
  softSkills: [
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Pensamiento analítico',
    'Aprendizaje continuo',
  ],

  // TODO: editar o ampliar las métricas destacadas.
  highlights: [
    { value: 'UCEVA', label: 'Ingeniería de Sistemas' },
    { value: 'Full Stack', label: 'Perfil de formación' },
    { value: 'CI/CD', label: 'Interés profesional' },
  ],
};
