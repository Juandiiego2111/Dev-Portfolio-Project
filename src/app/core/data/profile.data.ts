import type { Profile } from '../models/profile.model';

/**
 * ---------------------------------------------------------------------------
 * TODO: editar este archivo con los datos reales del autor.
 * Todo el contenido visible del perfil (textos, enlaces, habilidades y
 * mÃ©tricas) se alimenta desde aquÃ­; no hace falta tocar los templates.
 * ---------------------------------------------------------------------------
 */
export const PROFILE: Profile = {
  // TODO: editar nombre completo.
  name: 'Juan Diego Rodríguez Ortiz',
  // TODO: editar nombre corto para la marca del encabezado.
  shortName: 'Juan Diego',

  role: 'Estudiante de IngenierÃ­a de Sistemas',
  institution: 'Unidad Central del Valle del Cauca (UCEVA)',
  // TODO: editar ciudad y paÃ­s.
  location: 'TuluÃ¡, Valle del Cauca, Colombia',

  headline: 'Convierto ideas en software claro, Ãºtil y desplegable.',
  // TODO: editar la presentaciÃ³n profesional con tu experiencia real.
  summary:
    'Soy estudiante de IngenierÃ­a de Sistemas en la UCEVA y me apasiona construir ' +
    'aplicaciones web completas: desde el modelado de datos y la arquitectura hasta ' +
    'la interfaz, las pruebas y el despliegue. Este portafolio reÃºne cinco proyectos ' +
    'acadÃ©micos y personales que muestran mi proceso de aprendizaje y mi enfoque en ' +
    'las buenas prÃ¡cticas de ingenierÃ­a de software.',

  // TODO: reemplazar `avatar.svg` por tu fotografÃ­a (por ejemplo, `avatar.jpg`).
  avatarUrl: 'avatar.svg',
  // TODO: editar el texto alternativo si cambias la fotografÃ­a.
  avatarAlt: 'Avatar ilustrado de Juan Diego Rodríguez Ortiz',

  availability: 'Disponible para proyectos acadÃ©micos y colaboraciones',
  focus: 'Desarrollo web full stack Â· Arquitectura de software Â· CI/CD',

  // TODO: editar el correo de contacto.
  email: 'juan.diego@uceva.edu.co',
  contactTitle: 'Â¿Construimos algo juntos?',
  contactMessage:
    'Estoy abierto a prÃ¡cticas, proyectos colaborativos y conversaciones sobre ' +
    'desarrollo web, arquitectura y automatizaciÃ³n. EscrÃ­beme y hablemos.',

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
      // TODO: editar el correo (tambiÃ©n debes actualizarlo en `email`).
      label: 'Correo',
      url: 'mailto:juan.diego@uceva.edu.co',
      icon: 'mail',
    },
  ],

  // TODO: ajustar los niveles (0-100) segÃºn tu experiencia real.
  languages: [
    { name: 'TypeScript', level: 85 },
    { name: 'Java', level: 78 },
    { name: 'Python', level: 72 },
    { name: 'SQL', level: 75 },
    { name: 'JavaScript', level: 82 },
  ],

  // TODO: editar las tecnologÃ­as y herramientas que quieras destacar.
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
    'ComunicaciÃ³n efectiva',
    'Pensamiento analÃ­tico',
    'Aprendizaje continuo',
  ],

  // TODO: editar o ampliar las mÃ©tricas destacadas.
  highlights: [
    { value: 'UCEVA', label: 'IngenierÃ­a de Sistemas' },
    { value: 'Full Stack', label: 'Perfil de formaciÃ³n' },
    { value: 'CI/CD', label: 'InterÃ©s profesional' },
  ],
};

