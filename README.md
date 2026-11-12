# Portafolio Dev — Juan Diego

Portafolio digital desarrollado con **Angular 22** como trabajo de la asignatura
**Arquitectura de Software**. Presenta el perfil profesional y un catálogo de cinco
proyectos, con un pipeline de integración y despliegue continuo (CI/CD) que ejecuta
pruebas, compila, publica en GitHub Pages y verifica el sitio desplegado.

[![Deploy to GitHub Pages](https://github.com/Juandiiego2111/Dev-Portfolio-Project/actions/workflows/deploy.yml/badge.svg)](https://github.com/Juandiiego2111/Dev-Portfolio-Project/actions/workflows/deploy.yml)
[![Continuous Integration](https://github.com/Juandiiego2111/Dev-Portfolio-Project/actions/workflows/ci.yml/badge.svg)](https://github.com/Juandiiego2111/Dev-Portfolio-Project/actions/workflows/ci.yml)

## Demo

🔗 **Sitio desplegado:** <https://juandiiego2111.github.io/Dev-Portfolio-Project/>

## Descripción

El proyecto es una _single page application_ (SPA) con navegación por anclas. Todo el
contenido visible —perfil, habilidades, enlaces y proyectos— vive en archivos de datos
tipados, de modo que actualizar el portafolio no requiere modificar los templates.

Incluye:

- Perfil profesional con avatar, presentación, institución, habilidades, lenguajes
  (con barras de nivel) y tecnologías.
- Catálogo de cinco proyectos con descripción, tecnologías, características y dos
  enlaces por tarjeta: repositorio y aplicación desplegada.
- Diseño responsive mobile-first, tema claro/oscuro automático y un interruptor manual
  cuya preferencia se conserva en `localStorage`.
- Accesibilidad: HTML semántico, skip link, foco visible, textos alternativos,
  `aria-label`, contraste cuidado y respeto por `prefers-reduced-motion`.
- Pruebas unitarias con **Vitest + jsdom** (runner por defecto de Angular 22).
- Pipeline de CI/CD con **GitHub Actions** y despliegue en **GitHub Pages**.

## Tecnologías

| Área      | Herramientas                                              |
| --------- | --------------------------------------------------------- |
| Framework | Angular 22 (standalone components, control flow, signals) |
| Lenguaje  | TypeScript 6 (modo estricto)                              |
| Estilos   | SCSS con variables CSS, diseño propio                     |
| Pruebas   | Vitest 4 + jsdom, Angular TestBed                         |
| CI/CD     | GitHub Actions, GitHub Pages                              |
| Calidad   | Prettier, EditorConfig, TypeScript estricto               |

No se usan librerías pesadas de UI ni frameworks CSS externos.

## Estructura del proyecto

```text
.
├── .github/
│   └── workflows/
│       ├── ci.yml                 # Tests + build en pull requests
│       └── deploy.yml             # Test + build + deploy + verificación
├── public/
│   ├── avatar.svg                 # Avatar placeholder (editable)
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── data/
│   │   │   │   ├── profile.data.ts    # ← Contenido del perfil
│   │   │   │   └── projects.data.ts   # ← Catálogo de proyectos
│   │   │   ├── models/
│   │   │   │   ├── profile.model.ts
│   │   │   │   └── project.model.ts
│   │   │   └── services/
│   │   │       ├── profile.service.ts
│   │   │       ├── projects.service.ts
│   │   │       └── theme.service.ts
│   │   ├── features/
│   │   │   ├── profile/               # Hero + habilidades
│   │   │   └── projects/              # Catálogo
│   │   ├── shared/components/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   └── project-card/
│   │   ├── app.component.*
│   │   └── app.config.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
└── tsconfig.json
```

### Arquitectura

- **`core`**: modelos, datos y servicios de aplicación. Los servicios exponen la
  información con `signal()` de solo lectura.
- **`features`**: componentes de página (perfil y catálogo).
- **`shared`**: componentes reutilizables (header, tarjeta de proyecto, footer).
- **`app.component`**: compone el shell, configura título y metadatos desde el perfil.

## Requisitos

- **Node.js LTS** compatible con Angular 22 (`^22.22.3 || ^24.15.0 || >=26.0.0`).
- **npm 11** o superior.
- Git.

Versiones usadas en el desarrollo: Node.js 24.20.0, npm 11.19.0, Angular 22.2.6.

## Ejecución local

```bash
npm ci
npm start
```

La aplicación queda disponible en <http://localhost:4200/>.

### Scripts disponibles

| Comando                | Descripción                                                    |
| ---------------------- | -------------------------------------------------------------- |
| `npm start`            | Servidor de desarrollo con recarga en caliente.                |
| `npm run build`        | Compila la aplicación en `dist/dev-portfolio-project/browser`. |
| `npm test`             | Ejecuta Vitest en modo interactivo/watch.                      |
| `npm run test:ci`      | Ejecuta las pruebas una vez, sin watch (uso en CI).            |
| `npm run format`       | Formatea el proyecto con Prettier.                             |
| `npm run format:check` | Comprueba el formato sin modificar archivos.                   |

> `test:ci` ejecuta `ng test --watch=false`. Angular 22 usa **Vitest** por defecto en
> un entorno **jsdom**, que es _headless_ por naturaleza; no se necesita Chrome ni
> Karma en el runner de GitHub Actions.

### Build para GitHub Pages

```bash
npm run build -- --base-href=/Dev-Portfolio-Project/
```

La salida queda en `dist/dev-portfolio-project/browser`. El workflow copia
`index.html` a `404.html` para que GitHub Pages responda correctamente ante rutas
desconocidas.

## Personalización del contenido

Solo necesitas editar dos archivos:

1. **`src/app/core/data/profile.data.ts`**
   - Nombre completo y nombre corto (`name`, `shortName`).
   - Presentación, institución, ubicación y disponibilidad.
   - Correo, LinkedIn y enlaces sociales.
   - Lenguajes con nivel, tecnologías, habilidades blandas y métricas.
   - Los puntos pendientes están marcados con `// TODO: editar`.
2. **`src/app/core/data/projects.data.ts`**
   - Proyecto 1: portafolio actual, ya configurado con sus URLs reales.
   - Proyectos 2 a 5: placeholders marcados con `// TODO: editar`.
   - Mantén el patrón de URLs:
     `https://github.com/Juandiiego2111/<repo>` y
     `https://juandiiego2111.github.io/<repo>/`.

Opcionalmente:

- Reemplaza `public/avatar.svg` por una fotografía y actualiza `avatarUrl` y
  `avatarAlt` en el perfil.
- Si agregas capturas, guárdalas en `public/` y usa la propiedad opcional `image`
  de cada proyecto.

## Pruebas unitarias

Las pruebas cubren los puntos clave del portafolio:

- `ProjectsService`: cantidad de proyectos, unicidad, URLs válidas y búsqueda por id.
- `ProjectCardComponent`: nombre, tecnologías, características, posición y los dos
  enlaces con `href`, `target="_blank"` y `rel="noopener noreferrer"`.
- `ProjectsComponent`: renderizado de las cinco tarjetas a partir de los datos.
- `ProfileComponent`: identidad, avatar, lenguajes, tecnologías y habilidades.
- `AppComponent`: shell completo, nombre en el `h1`, cinco tarjetas y metadatos.

Para ejecutar la suite tal como lo hará CI:

```bash
npm run test:ci
```

## Pipeline CI/CD

### `deploy.yml` — despliegue automático

Se activa con **push a `main`** o manualmente con **workflow_dispatch**. Usa los
permisos mínimos necesarios (`contents: read`, `pages: write`, `id-token: write`) y el
grupo de concurrencia `pages` para cancelar despliegues anteriores en curso.

```text
push a main / workflow_dispatch
              │
              ▼
┌─────────────────────────────┐
│ build                       │
│ 1. checkout                 │
│ 2. Node.js LTS + caché npm  │
│ 3. npm ci                   │
│ 4. npm run test:ci          │
│ 5. build con base-href      │
│ 6. index.html → 404.html    │
│ 7. upload-pages-artifact    │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│ deploy                      │
│ environment: github-pages   │
│ actions/deploy-pages        │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│ verify                      │
│ 5 intentos · 10 s de espera │
│ HTTP 200 + contenido        │
│ esperado en el HTML         │
└─────────────────────────────┘
```

La verificación espera 5 segundos, descarga el sitio publicado, comprueba que responda
**HTTP 200** y que el HTML contenga el texto **“Portafolio profesional”** presente en
el título y los metadatos. Si no se cumple, reintenta hasta cinco veces con 10 segundos
de espera y, si aún falla, el job termina con error.

### `ci.yml` — validación de pull requests

En cada pull request hacia `main` (o ejecución manual) instala dependencias, corre
`test:ci` y compila con el mismo `base-href`. Así se detectan errores antes de hacer
merge. No despliega nada.

### Configurar GitHub Pages

1. Ve a **Settings → Pages** del repositorio.
2. En **Build and deployment → Source**, selecciona **GitHub Actions**.
3. Haz push a `main` o ejecuta manualmente el workflow **Deploy to GitHub Pages**.
4. La primera ejecución crea el entorno `github-pages` y publica el sitio.

No se necesita la rama `gh-pages` ni un token adicional: `deploy-pages` usa el
`GITHUB_TOKEN` y OpenID Connect.

## Accesibilidad y buenas prácticas

- Un único `h1`, secciones con `aria-labelledby` y landmarks (`header`, `main`, `footer`).
- Skip link para saltar al contenido principal.
- Foco visible con contraste y navegación completa por teclado.
- Enlaces externos con `target="_blank"` y `rel="noopener noreferrer"`.
- Imágenes con texto alternativo y SVG decorativos con `aria-hidden="true"`.
- Tema claro/oscuro según `prefers-color-scheme`, con preferencia manual persistente.
- Animaciones desactivadas con `prefers-reduced-motion`.
- TypeScript en modo estricto y plantillas compiladas con chequeo de tipos.

## Convenciones de commits (Conventional Commits)

El repositorio sigue [Conventional Commits](https://www.conventionalcommits.org/):

```text
<tipo>(<alcance opcional>): <descripción en imperativo>
```

Tipos permitidos:

| Tipo       | Uso                                            | Ejemplo                                                         |
| ---------- | ---------------------------------------------- | --------------------------------------------------------------- |
| `feat`     | Nueva funcionalidad                            | `feat(profile): agrega barras de nivel para lenguajes`          |
| `fix`      | Corrección de errores                          | `fix(card): corrige el enlace al repositorio`                   |
| `docs`     | Documentación                                  | `docs(readme): documenta el pipeline de CI/CD`                  |
| `chore`    | Mantenimiento, dependencias o configuración    | `chore(deps): actualiza Angular a la versión 22.2.6`            |
| `ci`       | Cambios en GitHub Actions                      | `ci(pages): agrega verificación post-despliegue con reintentos` |
| `test`     | Pruebas unitarias                              | `test(projects): cubre el renderizado de cinco tarjetas`        |
| `refactor` | Reestructuración sin cambiar el comportamiento | `refactor(core): mueve los datos a archivos tipados`            |
| `style`    | Formato, espacios o estilos sin cambio lógico  | `style(ui): ajusta el espaciado del header`                     |
| `perf`     | Mejoras de rendimiento                         | `perf(build): reduce el bundle inicial`                         |

Recomendaciones:

- Usa el verbo en imperativo y minúsculas: `agrega`, no `agregué` ni `Agrega`.
- Una idea por commit; evita mezclar cambios no relacionados.
- Máximo aproximado de 72 caracteres en la primera línea.
- Puedes añadir un cuerpo explicando el **qué** y el **por qué**.

Ejemplos de historial:

```text
feat(projects): agrega catálogo de cinco proyectos desde datos tipados
fix(theme): evita el destello de tema al recargar la página
docs(readme): documenta la configuración de GitHub Pages
chore(deps): actualiza las dependencias de Angular
ci(actions): agrega workflow de verificación post-despliegue
test(project-card): valida los enlaces del repositorio y la demo
refactor(profile): separa el perfil de los datos de proyectos
```

## Autor

**Juan Diego [APELLIDOS]**  
Estudiante de Ingeniería de Sistemas — Unidad Central del Valle del Cauca (UCEVA)  
GitHub: [@Juandiiego2111](https://github.com/Juandiiego2111)

---

Proyecto académico de Arquitectura de Software · Angular + GitHub Actions + GitHub Pages.
